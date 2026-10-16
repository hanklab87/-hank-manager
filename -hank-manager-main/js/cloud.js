/* Hank Manager v5.0 Beta: deliberate, authenticated, revision-checked cloud transfers.
   No automatic writes, no service_role keys, no local state changes on startup. */
(function(){
'use strict';
const KEY='hank_cloud_settings_v50',SESSION='hank_cloud_session_v50';
const AUTO_KEY='hank_cloud_auto_v502', BASE_KEY='hank_cloud_baseline_v502';
let autoEnabled=false,autoBusy=false,base=null;
try{autoEnabled=localStorage.getItem(AUTO_KEY)==='yes';base=JSON.parse(localStorage.getItem(BASE_KEY)||'null')}catch(_){}

const PUBLIC_KEY='sb_publishable_7TtJPjAopzRzAuR1paT9Yg__eJSKRTZ';
const el=id=>document.getElementById(id);
let cfg={url:'',key:PUBLIC_KEY,email:''}, session=null, checked=null;
try{cfg={...cfg,...JSON.parse(localStorage.getItem(KEY)||'{}')};session=JSON.parse(sessionStorage.getItem(SESSION)||'null')}catch(_){}
function status(t){const n=el('hm-cloud-status');n.textContent=t;if(t.startsWith('⚠️')){n.style.border='2px solid #f59e0b';n.style.padding='12px';n.style.borderRadius='8px';n.scrollIntoView({behavior:'smooth',block:'center'});}else{n.style.border='';n.style.padding='';n.style.borderRadius='';}}
function validate(){
 const url=el('hm-cloud-url').value.trim().replace(/\/+$/,'');
 if(!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url))throw Error('Inserisci il Project URL Supabase completo (https://...supabase.co).');
 const key=el('hm-cloud-key').value.trim();if(!key.startsWith('sb_publishable_')&&!key.startsWith('eyJ'))throw Error('Inserisci soltanto la publishable key / anon key.');
 cfg={url,key,email:el('hm-cloud-email').value.trim()};localStorage.setItem(KEY,JSON.stringify(cfg));return cfg;
}
function persist(){sessionStorage.setItem(SESSION,JSON.stringify(session))}
async function auth(){
 validate();if(!session)throw Error('Prima effettua l’accesso.');
 if(Date.now()<(session.expiresAt||0)-90000)return session.access_token;
 if(!session.refresh_token)throw Error('Sessione scaduta. Accedi nuovamente.');
 const res=await fetch(cfg.url+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{'Content-Type':'application/json',apikey:cfg.key},body:JSON.stringify({refresh_token:session.refresh_token})});
 const data=await res.json();if(!res.ok)throw Error(data.msg||data.error_description||'Sessione scaduta. Accedi nuovamente.');
 session={...data,expiresAt:Date.now()+(data.expires_in||3600)*1000};persist();return session.access_token;
}
async function api(path,opts={}){
 const token=await auth();const res=await fetch(cfg.url+'/rest/v1/'+path,{...opts,headers:{apikey:cfg.key,Authorization:'Bearer '+token,...(opts.headers||{})}});
 if(!res.ok){let err;try{err=await res.json()}catch(_){}throw Error(err?.message||err?.details||'Errore Supabase ('+res.status+')')}
 if(res.status===204)return null;return await res.json();
}
async function remote(){const uid=session?.user?.id;if(!uid)throw Error('Utente non riconosciuto: esci e accedi di nuovo.');const rows=await api('hank_data?select=user_id,data,updated_at&user_id=eq.'+encodeURIComponent(uid)+'&limit=1');return rows?.[0]||null}
function local(){const raw=localStorage.getItem('hank_v04');if(!raw)throw Error('Nessun archivio locale da trasferire.');const data=JSON.parse(raw);if(!data||!Array.isArray(data.players)||!Array.isArray(data.events))throw Error('Archivio locale non valido.');return data}
function describe(data){return (data.players?.length||0)+' giocatori, '+(data.events?.length||0)+' eventi, '+(data.events||[]).filter(e=>e.status==='Terminata').length+' partite/eventi terminati'}
function fail(err){status('⚠️ '+(err?.message||String(err)))}
function snapshot(){return JSON.stringify(local())}
function canonical(x){if(Array.isArray(x))return x.map(canonical);if(x&&typeof x==='object')return Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])]));return x}
function sameData(a,b){return JSON.stringify(canonical(a))===JSON.stringify(canonical(b))}
function sameRaw(a,b){try{return sameData(JSON.parse(a),JSON.parse(b))}catch(_){return false}}
function setBase(revision,raw){base={uid:session?.user?.id,url:cfg.url,revision,raw};localStorage.setItem(BASE_KEY,JSON.stringify(base))}
function disableAuto(message){autoEnabled=false;localStorage.removeItem(AUTO_KEY);const c=el('hm-cloud-auto');if(c)c.checked=false;if(message)status(message)}
function updateAutoControl(){const c=el('hm-cloud-auto');if(c)c.checked=autoEnabled}
async function syncOnce(){
 if(!autoEnabled||autoBusy||!session||!navigator.onLine)return;
 autoBusy=true;
 try{
  validate();
  if(!base||base.uid!==session.user.id||base.url!==cfg.url){disableAuto('⚠️ Sincronizzazione sospesa: account o progetto diverso. Verifica i dati e riattiva.');return}
  const mine=snapshot(),online=await remote();
  if(!online){disableAuto('⚠️ Archivio online assente: sincronizzazione sospesa.');return}
  const localChanged=!sameRaw(mine,base.raw),remoteChanged=!sameData(online.data,JSON.parse(base.raw));
  if(localChanged&&remoteChanged){disableAuto('⚠️ CONFLITTO: modifiche sia su questo dispositivo sia nel cloud. Nessun dato sovrascritto. Esporta i backup e risolvi manualmente.');return}
  if(!localChanged&&!remoteChanged)return;
  if(localChanged){
   const now=new Date().toISOString();
   const rows=await api('hank_data?user_id=eq.'+encodeURIComponent(session.user.id)+'&updated_at=eq.'+encodeURIComponent(base.revision),{method:'PATCH',headers:{'Content-Type':'application/json',Prefer:'return=representation'},body:JSON.stringify({data:JSON.parse(mine),updated_at:now})});
   if(rows?.length!==1){disableAuto('⚠️ Conflitto di revisione: nessuna sovrascrittura. Controlla archivio online.');return}
   setBase(rows[0].updated_at,mine);checked={uid:session.user.id,revision:rows[0].updated_at};status('✓ Modifiche locali inviate al cloud.');
  }else{
   if(!online.data||!Array.isArray(online.data.players)||!Array.isArray(online.data.events))throw Error('Dati cloud non validi.');
   // Check again before replacing local state; avoid a race with an edit made during the request.
   if(!sameRaw(snapshot(),mine)){disableAuto('⚠️ Modifiche locali durante il controllo. Sincronizzazione sospesa.');return}
   const old=localStorage.getItem('hank_v04');
   const backupKey='hank_cloud_auto_pre_restore_'+Date.now();
   try{localStorage.setItem(backupKey,old)}catch(_){disableAuto('⚠️ Impossibile salvare una copia locale prima del recupero. Sincronizzazione sospesa.');return}
   const incoming=JSON.stringify(online.data);
   try{localStorage.setItem('hank_v04',incoming)}catch(err){localStorage.setItem('hank_v04',old);throw err}
   setBase(online.updated_at,incoming);checked={uid:session.user.id,revision:online.updated_at};status('✓ Aggiornamenti ricevuti dal cloud. Ricarico la pagina.');location.reload();
  }
 }catch(e){fail(e)}finally{autoBusy=false}
}
window.hmCloudToggleAuto=async function(enabled){
 if(!enabled){disableAuto('Sincronizzazione automatica disattivata.');return}
 try{
  if(!session)throw Error('Accedi prima a Supabase. La sessione può scadere quando chiudi l’app.');
  status('Verifica dei dati locali e del cloud prima dell’attivazione…');
  const online=await remote();if(!online)throw Error('Archivio cloud vuoto.');
  const mine=snapshot(),cloud=JSON.stringify(online.data);
  const identical=sameData(JSON.parse(mine),online.data);
  const knownBase=base&&base.uid===session.user.id&&base.url===cfg.url&&base.raw;
  const localUnchanged=knownBase&&sameRaw(mine,base.raw);
  if(!identical&&!localUnchanged)throw Error('I dati locali e quelli cloud sono diversi e non è possibile dimostrare che il dispositivo sia rimasto invariato. Sincronizzazione bloccata; conserva i backup.');
  if(!identical){
    if(!confirm('Il cloud contiene modifiche rispetto alla copia invariata di questo dispositivo. Attivare il recupero automatico? Prima verrà creata una copia di sicurezza locale.\n\nPremi Annulla se non sei sicuro.')){updateAutoControl();return}
    // Keep the previous baseline so syncOnce can safely recognize a remote-only change.
  }else{
    if(!confirm('Attivare la sincronizzazione automatica su questo dispositivo? Mantieni i backup.')){updateAutoControl();return}
    setBase(online.updated_at,mine);
  }
  checked={uid:session.user.id,revision:online.updated_at};autoEnabled=true;localStorage.setItem(AUTO_KEY,'yes');updateAutoControl();
  status(identical?'✓ Sincronizzazione automatica attiva.':'✓ Sincronizzazione attiva. Recupero protetto degli aggiornamenti cloud in corso…');
  if(!identical)await syncOnce();
 }catch(e){disableAuto('⚠️ '+(e?.message||String(e)))}
};
setInterval(syncOnce,20000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncOnce()});

window.hmCloudOpen=function(){el('hm-cloud-overlay').hidden=false;el('hm-cloud-url').value=cfg.url;el('hm-cloud-key').value=cfg.key;el('hm-cloud-email').value=cfg.email;el('hm-cloud-password').value='';status(session?'Sessione presente. Premi «Controlla archivio online».':'Non collegato. Accedi con il tuo account Supabase.');updateAutoControl();};
window.hmCloudClose=function(){el('hm-cloud-overlay').hidden=true};
window.hmCloudLogin=async function(){try{validate();const email=cfg.email,password=el('hm-cloud-password').value;if(!email||!password)throw Error('Inserisci email e password.');status('Accesso in corso…');const res=await fetch(cfg.url+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:cfg.key,'Content-Type':'application/json'},body:JSON.stringify({email,password})});const data=await res.json();if(!res.ok)throw Error(data.msg||data.error_description||'Credenziali non valide');if(!data.user?.id)throw Error('Identità utente mancante');session={...data,expiresAt:Date.now()+(data.expires_in||3600)*1000};persist();checked=null;el('hm-cloud-password').value='';status('✓ Accesso effettuato. Ora controlla l’archivio online.')}catch(e){fail(e)}};
window.hmCloudLogout=function(){disableAuto();session=null;checked=null;sessionStorage.removeItem(SESSION);el('hm-cloud-password').value='';status('Disconnesso da questo dispositivo.')} ;
window.hmCloudInspect=async function(){try{status('Controllo archivio…');const online=await remote();checked={uid:session.user.id,revision:online?.updated_at||null};let text='DISPOSITIVO: '+describe(local())+'\n';text+=online?'CLOUD: '+describe(online.data)+'\nUltimo aggiornamento: '+online.updated_at:'CLOUD: vuoto (nessun dato ancora caricato)';status(text)}catch(e){checked=null;fail(e)}};
window.hmCloudUpload=async function(){try{
 const mine=local();if(!checked||checked.uid!==session?.user?.id)throw Error('Prima premi «Controlla archivio online».');
 const before=await remote();if((before?.updated_at||null)!==checked.revision)throw Error('Il cloud è cambiato dall’ultimo controllo. Controlla nuovamente prima di procedere.');
 const promptText=before?'Il cloud contiene già dati ('+describe(before.data)+'). Vuoi SOSTITUIRLI con i dati di questo dispositivo ('+describe(mine)+')?':'Il cloud è vuoto. Vuoi caricare la copia di questo dispositivo ('+describe(mine)+')?';
 if(!confirm(promptText+'\n\nVerifica di aver esportato il backup prima di procedere.'))return;
 const now=new Date().toISOString();let rows;
 if(before){rows=await api('hank_data?user_id=eq.'+encodeURIComponent(session.user.id)+'&updated_at=eq.'+encodeURIComponent(before.updated_at),{method:'PATCH',headers:{'Content-Type':'application/json',Prefer:'return=representation'},body:JSON.stringify({data:mine,updated_at:now})});if(rows.length!==1)throw Error('Conflitto: cloud aggiornato da un altro dispositivo. Nessuna modifica effettuata.');}
 else {rows=await api('hank_data',{method:'POST',headers:{'Content-Type':'application/json',Prefer:'return=representation'},body:JSON.stringify({user_id:session.user.id,data:mine,updated_at:now})});}
 checked={uid:session.user.id,revision:rows[0].updated_at};disableAuto();status('✓ Copia caricata nel cloud. '+describe(mine)+'\nI dati locali non sono stati modificati.');
 }catch(e){checked=null;fail(e)}};
window.hmCloudDownload=async function(){try{
 if(!checked||checked.uid!==session?.user?.id)throw Error('Prima premi «Controlla archivio online».');
 const online=await remote();if(!online)throw Error('Il cloud è ancora vuoto.');if(online.updated_at!==checked.revision)throw Error('Il cloud è cambiato. Controlla nuovamente.');
 const data=online.data;if(!data||!Array.isArray(data.players)||!Array.isArray(data.events))throw Error('I dati online non hanno un formato valido.');
 const mine=local();status('CLOUD: '+describe(data)+'\nDISPOSITIVO: '+describe(mine));
 if(!confirm('ATTENZIONE: recuperare il cloud sostituirà i dati locali di questo dispositivo.\n\nPremi Annulla se non hai esportato un backup dei dati locali.\n\nVuoi continuare?'))return;
 // Download an actual backup before any local mutation; do not rely on successful OS save to be detectable.
 if(!confirm('Ultima conferma: hai già salvato un backup dei dati di QUESTO dispositivo?\n\nOK = sostituisci i dati locali con il cloud.'))return;
 const old=localStorage.getItem('hank_v04');const backupKey='hank_cloud_pre_restore_'+Date.now();
 try{localStorage.setItem(backupKey,old)}catch(_){throw Error('Spazio insufficiente per una copia locale di sicurezza. Esporta il backup e libera spazio prima di procedere.')}
 try{localStorage.setItem('hank_v04',JSON.stringify(data))}catch(err){localStorage.setItem('hank_v04',old);throw err}
 disableAuto();status('✓ Dati cloud recuperati. La pagina si aggiornerà.');location.reload();
 }catch(e){fail(e)}};
})();
