/* Hank Manager 5.3.10 – Finanze con tariffe campo e amichevoli.
   Registro di cassa integrato in state (hank_v04): backup e cloud esistenti lo includono.
   Non modifica eventi, giocatori, formazioni, statistiche o sincronizzazione. */
'use strict';
let financeActiveSeason = '';
let financeActiveTab = 'overview';
const FINANCE_EXPENSES = [
  'Iscrizione','Affiliazione','Tesseramenti','Tessera dirigente','Allenamenti','Match casalinghi',
  'Match trasferte','Match in campo neutro','Amichevoli','Lavanderia','Altre spese'
];
const FINANCE_INCOMES = ['Quota giocatore','Sponsor','Altre entrate'];
const financeEuro = cents => new Intl.NumberFormat('it-IT',{style:'currency',currency:'EUR'}).format((Number(cents)||0)/100);
const financeE = value => escapeHtml(String(value??''));
const financeToday = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const financeDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value||'') ? value.slice(8,10)+'/'+value.slice(5,7)+'/'+value.slice(0,4) : '—';
// Importi iniziali riferiti esclusivamente alla stagione 2026/27.
// Le stagioni future partono senza spese fisse, ma con le tariffe partita/lavanderia modificabili.
function financeDefaultAutomatic(season){
  const current=season==='2026/27';
  return {registrationCents:current?100000:0,affiliationCents:current?5000:0,
    playerCardCents:current?2500:0,registeredPlayers:current?28:0,
    managerCardCents:current?700:0,trainingCents:current?21000:0,
    homeMatchCents:14000,matchCents:16000,laundryCents:1000,
    friendlyMatchesCount:current?2:0,friendlyMatchCents:16000,
    matchOverrides:{},rateSchemaVersion:2};
}
const FINANCE_AUTO_FIELDS=[
  ['registrationCents','Iscrizione','euro'],
  ['affiliationCents','Affiliazione','euro'],
  ['playerCardCents','Tesseramento per giocatore','euro'],
  ['registeredPlayers','Numero tesserati','count'],
  ['managerCardCents','Tessera dirigente','euro'],
  ['trainingCents','Allenamenti (costo fisso)','euro'],
  ['friendlyMatchesCount','Amichevoli già disputate (totale minimo)','count'],
  ['friendlyMatchCents','Costo per amichevole','euro'],
  ['homeMatchCents','Partita in casa','euro'],
  ['matchCents','Partita in trasferta / campo neutro','euro'],
  ['laundryCents','Lavanderia per partita (anche amichevoli)','euro']
];
function financeAutomaticSettings(data=financeInit()){
  if(!data.automatic||typeof data.automatic!=='object'||Array.isArray(data.automatic))
    data.automatic=financeDefaultAutomatic(financeActiveSeason);
  const a=data.automatic;
  if(!a.matchOverrides||typeof a.matchOverrides!=='object'||Array.isArray(a.matchOverrides))
    a.matchOverrides={};
  // Migrazione una tantum v5.3.9 -> v5.3.10: NON tocca movimenti manuali,
  // entrate, quote giocatori, override per partita o tariffe già personalizzate.
  if(a.rateSchemaVersion!==2){
    if(financeActiveSeason==='2026/27'&&a.trainingCents===53000)a.trainingCents=21000;
    if(!Number.isSafeInteger(a.homeMatchCents))a.homeMatchCents=14000;
    if(!Number.isSafeInteger(a.friendlyMatchCents))a.friendlyMatchCents=16000;
    if(!Number.isSafeInteger(a.friendlyMatchesCount))a.friendlyMatchesCount=financeActiveSeason==='2026/27'?2:0;
    a.rateSchemaVersion=2;
  }
  return a;
}
function financeIsFriendly(match){
  const competition=match.competition==='Personalizza'?(match.customCompetition||''):match.competition;
  return /amichevol/i.test(String(competition||''));
}
function financeMatchDefault(match,a){
  return financeIsFriendly(match)?a.friendlyMatchCents:
    match.homeAway==='Casa'?a.homeMatchCents:a.matchCents;
}
function financeMatchAmounts(match,a){
  const override=a.matchOverrides[String(match.id)]||{};
  const fallback=financeMatchDefault(match,a);
  return {
    matchCents:Number.isSafeInteger(override.matchCents)&&override.matchCents>=0?override.matchCents:fallback,
    laundryCents:Number.isSafeInteger(override.laundryCents)&&override.laundryCents>=0?override.laundryCents:a.laundryCents,
    overridden:Object.keys(override).length>0
  };
}
function financePlayedMatches(){
  const year=Number(financeActiveSeason.slice(0,4));
  const start=`${year}-07-01`,end=`${year+1}-07-01`;
  return (Array.isArray(state.events)?state.events:[])
    .filter(e=>e&&e.type==='Partita'&&e.status==='Terminata'&&
      String(e.date||'')>=start&&String(e.date||'')<end)
    .sort((a,b)=>String(a.date).localeCompare(String(b.date))||String(a.id).localeCompare(String(b.id)));
}
function financeAutoCosts(data=financeInit()){
  const a=financeAutomaticSettings(data),matches=financePlayedMatches();
  const friendlies=matches.filter(financeIsFriendly);
  // Le due amichevoli già disputate potrebbero non essere state inserite nel
  // Calendario. Quando vengono aggiunte come "Terminate", sostituiscono una
  // voce storica: non si sommano una seconda volta.
  const unlistedFriendlies=Math.max(0,a.friendlyMatchesCount-friendlies.length);
  const fixed=[
    {id:'auto-registration',category:'Iscrizione',description:'Iscrizione stagione',amountCents:a.registrationCents},
    {id:'auto-affiliation',category:'Affiliazione',description:'Affiliazione stagione',amountCents:a.affiliationCents},
    {id:'auto-playercards',category:'Tesseramenti',description:`${a.registeredPlayers} tesserati × ${financeEuro(a.playerCardCents)}`,amountCents:a.registeredPlayers*a.playerCardCents},
    {id:'auto-manager',category:'Tessera dirigente',description:'Tessera dirigente',amountCents:a.managerCardCents},
    {id:'auto-training',category:'Allenamenti',description:'Allenamenti (costo fisso)',amountCents:a.trainingCents},
    {id:'auto-friendly-missing',category:'Amichevoli',description:`${unlistedFriendlies} amichevoli già disputate non presenti nel Calendario × ${financeEuro(a.friendlyMatchCents)}`,amountCents:unlistedFriendlies*a.friendlyMatchCents},
    {id:'auto-friendly-laundry-missing',category:'Lavanderia',description:`Lavanderia · ${unlistedFriendlies} amichevoli non presenti nel Calendario`,amountCents:unlistedFriendlies*a.laundryCents}
  ].map(x=>({...x,type:'expense',date:'',automatic:true})).filter(x=>x.amountCents>0);
  const variable=[];
  for(const m of matches){
    const amounts=financeMatchAmounts(m,a);
    const category=financeIsFriendly(m)?'Amichevoli':m.homeAway==='Trasferta'?'Match trasferte':m.homeAway==='Campo neutro'?'Match in campo neutro':'Match casalinghi';
    const description=`${m.opponent||'Avversario'} · ${financeIsFriendly(m)?'Amichevole · ':''}${m.homeAway||'Casa'}`;
    if(amounts.matchCents>0)variable.push({id:`auto-match-${m.id}`,type:'expense',category,description,date:m.date,amountCents:amounts.matchCents,automatic:true,matchId:String(m.id)});
    if(amounts.laundryCents>0)variable.push({id:`auto-laundry-${m.id}`,type:'expense',category:'Lavanderia',description:`Lavanderia · ${m.opponent||'Avversario'}`,date:m.date,amountCents:amounts.laundryCents,automatic:true,matchId:String(m.id)});
  }
  const fixedTotal=fixed.reduce((sum,e)=>sum+e.amountCents,0);
  const variableTotal=variable.reduce((sum,e)=>sum+e.amountCents,0);
  return {fixed,variable,entries:[...fixed,...variable],fixedTotal,variableTotal,total:fixedTotal+variableTotal,matches,friendlies,unlistedFriendlies};
}
function financeOpenAutoSettings(){
  const a=financeAutomaticSettings();
  sheet.innerHTML=`<div class="finance-form"><div class="sheet-head"><h2>Modifica costi automatici</h2><button class="close" onclick="closeModal()">✕</button></div>
    <p class="muted small">Stagione ${financeE(financeActiveSeason)}. Gli importi sono in euro. Le amichevoli già disputate sono conteggiate una sola volta, anche se successivamente vengono inserite nel Calendario. I movimenti manuali restano invariati.</p>
    ${FINANCE_AUTO_FIELDS.map(([key,label,kind])=>`<div class="field"><label for="financeAuto_${key}">${financeE(label.toUpperCase())}${kind==='euro'?' (€)':''}</label><input id="financeAuto_${key}" type="number" inputmode="${kind==='count'?'numeric':'decimal'}" min="0" step="${kind==='count'?'1':'0.01'}" value="${kind==='count'?a[key]:(a[key]/100).toFixed(2)}"></div>`).join('')}
    <div class="finance-form-buttons"><button class="primary" onclick="financeSaveAutoSettings()">SALVA COSTI</button><button class="secondary" onclick="closeModal()">ANNULLA</button></div></div>`;
  modal.classList.add('open');
}
function financeSaveAutoSettings(){
  const data=financeInit(),a=financeAutomaticSettings(data),changes={};
  for(const [key,,kind] of FINANCE_AUTO_FIELDS){
    const value=document.getElementById(`financeAuto_${key}`)?.value;
    const amount=kind==='count'?Number(value):financeCents(value,true);
    if(kind==='count'?(!/^\d+$/.test(String(value))||!Number.isSafeInteger(amount)||amount>10000):amount===null){
      alert('Controlla gli importi e il numero di tesserati: sono ammessi solo valori non negativi.');return;
    }
    changes[key]=amount;
  }
  Object.assign(a,changes);save();closeModal();renderFinances();
}
function financeOpenMatchCosts(id){
  const m=financePlayedMatches().find(e=>String(e.id)===String(id));if(!m)return;
  const a=financeAutomaticSettings();
  const amounts=financeMatchAmounts(m,a);
  const match=amounts.matchCents;
  const laundry=amounts.laundryCents;
  sheet.innerHTML=`<div class="finance-form"><div class="sheet-head"><h2>Costo partita</h2><button class="close" onclick="closeModal()">✕</button></div>
    <p class="muted small">${financeE(m.opponent||'Avversario')} · ${financeDate(m.date)} · ${financeE(m.homeAway||'Casa')}. Inserisci 0 € se non c'è stata una spesa.</p>
    <div class="field"><label>COSTO PARTITA (€)</label><input id="financeMatchCost" type="number" min="0" step="0.01" inputmode="decimal" value="${(match/100).toFixed(2)}"></div>
    <div class="field"><label>LAVANDERIA (€)</label><input id="financeLaundryCost" type="number" min="0" step="0.01" inputmode="decimal" value="${(laundry/100).toFixed(2)}"></div>
    <div class="finance-form-buttons"><button class="primary" onclick="financeSaveMatchCosts(${financeE(JSON.stringify(String(id)))})">SALVA</button><button class="secondary" onclick="financeResetMatchCosts(${financeE(JSON.stringify(String(id)))})">RIPRISTINA TARIFFE</button></div></div>`;
  modal.classList.add('open');
}
function financeSaveMatchCosts(id){
  const matchCents=financeCents(document.getElementById('financeMatchCost')?.value,true);
  const laundryCents=financeCents(document.getElementById('financeLaundryCost')?.value,true);
  if(matchCents===null||laundryCents===null){alert('Inserisci importi validi in euro, anche 0,00.');return}
  financeAutomaticSettings().matchOverrides[String(id)]={matchCents,laundryCents};
  save();closeModal();renderFinances();
}
function financeResetMatchCosts(id){
  delete financeAutomaticSettings().matchOverrides[String(id)];
  save();closeModal();renderFinances();
}

function financeSeasonDefault(){
  const s=String(state.society?.season||'2026/27');
  return /^20\d{2}\/\d{2}$/.test(s)?s:'2026/27';
}
function financeInit(){
  if(!state.finances||typeof state.finances!=='object'||Array.isArray(state.finances))state.finances={seasons:{}};
  if(!state.finances.seasons||typeof state.finances.seasons!=='object'||Array.isArray(state.finances.seasons))state.finances.seasons={};
  // Un'eventuale migrazione può selezionare esplicitamente la stagione storica.
  // La schermata Finanze forza invece sempre la stagione attiva in Società.
  if(!financeActiveSeason)financeActiveSeason=financeSeasonDefault();
  if(!state.finances.seasons[financeActiveSeason])state.finances.seasons[financeActiveSeason]={entries:[],players:{}};
  const data=state.finances.seasons[financeActiveSeason];
  if(!Array.isArray(data.entries))data.entries=[];
  if(!data.players||typeof data.players!=='object'||Array.isArray(data.players))data.players={};
  financeAutomaticSettings(data);
  return data;
}
function financeEntries(data=financeInit()){
  return data.entries.filter(e=>e&&['income','expense'].includes(e.type)&&Number.isSafeInteger(e.amountCents)&&e.amountCents>0);
}
function financeTotals(data=financeInit()){
  const entries=financeEntries(data);
  const income=entries.filter(e=>e.type==='income').reduce((sum,e)=>sum+e.amountCents,0);
  const manualExpense=entries.filter(e=>e.type==='expense').reduce((sum,e)=>sum+e.amountCents,0);
  const auto=financeAutoCosts(data);
  const expense=manualExpense+auto.total;
  const playerPayments=entries.filter(e=>e.type==='income'&&e.category==='Quota giocatore');
  const paidByPlayer={};
  for(const e of playerPayments){if(e.playerId!=null)paidByPlayer[String(e.playerId)]=(paidByPlayer[String(e.playerId)]||0)+e.amountCents}
  let expected=0, received=0, outstanding=0, payers=0;
  for(const [id,p] of Object.entries(data.players)){
    if(!p?.payer)continue;
    payers++;
    const due=Number.isSafeInteger(p.dueCents)&&p.dueCents>=0?p.dueCents:0;
    const paid=paidByPlayer[id]||0;
    expected+=due;
    received+=paid;
    outstanding+=Math.max(0,due-paid);
  }
  return {income,expense,manualExpense,automaticExpense:auto.total,auto,balance:income-expense,payers,expected,received,outstanding,paidByPlayer};
}
function financeSetSeason(value){
  if(!/^20\d{2}\/\d{2}$/.test(value))return;
  financeActiveSeason=value;renderFinances();
}
function financeAddSeason(){
  const value=prompt('Nuova stagione (es. 2027/28):','2027/28');
  if(value===null)return;
  const season=value.trim();
  if(!/^20\d{2}\/\d{2}$/.test(season)||Number(season.slice(5))!==(Number(season.slice(2,4))+1)%100){alert('Inserisci una stagione valida, per esempio 2027/28.');return}
  if(state.finances?.seasons?.[season]){financeActiveSeason=season;renderFinances();return}
  financeActiveSeason=season;
  financeInit();save();renderFinances();
}
function financeTab(tab){
  if(!['overview','expenses','income'].includes(tab))return;
  financeActiveTab=tab;renderFinances();
}
function renderFinances(){
  // Nessun selettore manuale: il registro visualizzato segue Società.
  // Le stagioni precedenti restano archiviate in state.finances.seasons.
  financeActiveSeason=financeSeasonDefault();
  const data=financeInit();
  const content=document.getElementById('financeContent');
  if(!content)return;
  const t=financeTotals(data);
  const metric=(name,value,cls='')=>`<div class="finance-metric ${cls}"><span>${name}</span><strong>${financeEuro(value)}</strong></div>`;
  content.innerHTML=`
    <div class="finance-summary">
      ${metric('Entrate incassate',t.income,'income')}
      ${metric('Spese sostenute',t.expense,'expense')}
      ${metric('Saldo disponibile',t.balance,'balance '+(t.balance<0?'negative':''))}
    </div>
    <div class="finance-tabs" role="tablist" aria-label="Sezioni finanze">
      <button type="button" role="tab" aria-selected="${financeActiveTab==='overview'}" class="${financeActiveTab==='overview'?'active':''}" onclick="financeTab('overview')">Riepilogo</button>
      <button type="button" role="tab" aria-selected="${financeActiveTab==='expenses'}" class="${financeActiveTab==='expenses'?'active':''}" onclick="financeTab('expenses')">Spese</button>
      <button type="button" role="tab" aria-selected="${financeActiveTab==='income'}" class="${financeActiveTab==='income'?'active':''}" onclick="financeTab('income')">Entrate</button>
    </div>
    ${financeActiveTab==='overview'?financeRenderOverview(data,t):financeActiveTab==='expenses'?financeRenderEntries(data,'expense'):financeRenderIncome(data,t)}
  `;
}
function financeRenderOverview(data,t){
  const recent=financeEntries(data).slice().sort((a,b)=>String(b.date).localeCompare(String(a.date))||String(b.id).localeCompare(String(a.id))).slice(0,6);
  const expGroups={};
  for(const e of [...financeEntries(data).filter(x=>x.type==='expense'),...t.auto.entries])expGroups[e.category]=(expGroups[e.category]||0)+e.amountCents;
  const groupHtml=Object.entries(expGroups).sort((a,b)=>b[1]-a[1]).map(([name,amount])=>`<div class="finance-line"><strong>${financeE(name)}</strong><span class="finance-amount negative">${financeEuro(amount)}</span></div>`).join('');
  return `<div class="finance-card"><h2>Quote giocatori</h2>
    <p class="muted small">${t.payers} giocatori paganti · Quota prevista: ${financeEuro(t.expected)} · Versato dai paganti: ${financeEuro(t.received)}</p>
    <div class="finance-line"><strong>Quote ancora da incassare</strong><span class="finance-amount ${t.outstanding?'negative':'positive'}">${financeEuro(t.outstanding)}</span></div>
    <p class="muted small" style="margin-top:9px">Le quote previste non sono entrate di cassa: il saldo considera solo i versamenti registrati.</p>
    <div class="finance-actions"><button class="secondary" type="button" onclick="financeTab('income')">Gestisci quote e incassi →</button></div>
  </div>
  <div class="finance-card"><h2>Spese per categoria</h2><p class="muted small">Automatiche: ${financeEuro(t.automaticExpense)} · Manuali: ${financeEuro(t.manualExpense)}</p>${groupHtml||'<p class="finance-empty">Nessuna spesa registrata.</p>'}</div>
  <div class="finance-card"><h2>Ultimi movimenti</h2>${recent.length?recent.map(financeEntryMarkup).join(''):'<p class="finance-empty">Nessun movimento. Registra la prima spesa o entrata.</p>'}
    <div class="finance-actions"><button class="secondary" onclick="financeOpenEntry('expense')">＋ Spesa</button><button class="secondary" onclick="financeOpenEntry('income')">＋ Entrata</button></div>
  </div>
  <div class="finance-actions"><button class="secondary" onclick="financeExportCsv()">⬇ Esporta movimenti CSV</button></div>`;
}
function financeEntryMarkup(e){
  const player=e.playerId!=null?state.players.find(p=>String(p.id)===String(e.playerId)):null;
  const details=[financeDate(e.date),e.category,e.description||'',player?player.name:''].filter(Boolean).map(financeE).join(' · ');
  return `<div class="finance-line"><div><strong>${financeE(e.description||e.category)}</strong><small>${details}</small></div>
    <div class="finance-line-right"><span class="finance-amount ${e.type==='income'?'positive':'negative'}">${e.type==='income'?'+':'−'}${financeEuro(e.amountCents)}</span>
    <button type="button" onclick="financeOpenEntry('${e.type}','${financeE(e.id)}')">Modifica</button></div></div>`;
}
function financeRenderEntries(data,type){
  const entries=financeEntries(data).filter(e=>e.type===type).sort((a,b)=>String(b.date).localeCompare(String(a.date))||String(b.id).localeCompare(String(a.id)));
  const auto=financeAutoCosts(data),a=financeAutomaticSettings(data);
  const fixed=auto.fixed.map(e=>`<div class="finance-line"><div><strong>${financeE(e.category)}</strong><small>${financeE(e.description)}</small></div><span class="finance-amount negative">${financeEuro(e.amountCents)}</span></div>`).join('');
  const matchRows=auto.matches.map(m=>{
    const amounts=financeMatchAmounts(m,a);
    const match=amounts.matchCents,laundry=amounts.laundryCents;
    return `<div class="finance-line"><div><strong>${financeE(m.opponent||'Avversario')}</strong><small>${financeDate(m.date)} · ${financeIsFriendly(m)?'Amichevole · ':''}${financeE(m.homeAway||'Casa')} · Partita ${financeEuro(match)} + lavanderia ${financeEuro(laundry)}${amounts.overridden?' · Personalizzata':''}</small></div><div class="finance-line-right"><span class="finance-amount negative">${financeEuro(match+laundry)}</span><button type="button" onclick="financeOpenMatchCosts(${financeE(JSON.stringify(String(m.id)))})">Modifica</button></div></div>`;
  }).join('');
  return `<div class="finance-card"><h2>Spese automatiche · ${financeEuro(auto.total)}</h2>
    <p class="muted small">Si aggiornano dalle partite con stato <strong>Terminata</strong> del Calendario. Ogni partita viene conteggiata una sola volta.</p>
    <div class="finance-actions"><button class="primary" onclick="financeOpenAutoSettings()">⚙ MODIFICA IMPORTI</button></div>
    <div class="finance-category-title">Costi fissi e amichevoli pregresse · ${financeEuro(auto.fixedTotal)}</div>
    ${fixed||'<p class="finance-empty">Nessun costo fisso impostato per questa stagione.</p>'}
    <p class="muted small">Amichevoli: ${a.friendlyMatchesCount} già disputate · ${auto.friendlies.length} presenti come terminate nel Calendario · ${auto.unlistedFriendlies} conteggiate come pregresse. Ogni amichevole vale ${financeEuro(a.friendlyMatchCents)} + ${financeEuro(a.laundryCents)} lavanderia.</p>
    <div class="finance-category-title">Partite dal Calendario e lavanderia · ${financeEuro(auto.variableTotal)}</div>
    <p class="muted small">${auto.matches.length} partite terminate · Casa ${financeEuro(a.homeMatchCents)} + ${financeEuro(a.laundryCents)} · Trasferta/Neutro ${financeEuro(a.matchCents)} + ${financeEuro(a.laundryCents)} · Amichevole ${financeEuro(a.friendlyMatchCents)} + ${financeEuro(a.laundryCents)}</p>
    ${matchRows||'<p class="finance-empty">Nessuna partita ancora segnata come Terminata in questa stagione.</p>'}
  </div>
  <div class="finance-card"><h2>Altre spese manuali</h2>
    <p class="muted small">Aggiungi solo spese non già incluse nei costi automatici, per evitare duplicazioni.</p>
    <div class="finance-actions"><button class="primary" onclick="financeOpenEntry('expense')">＋ NUOVA SPESA</button></div>
    ${entries.length?entries.map(financeEntryMarkup).join(''):'<p class="finance-empty">Nessuna spesa manuale registrata.</p>'}
  </div>`;
}
function financeRenderIncome(data,t){
  const income=financeEntries(data).filter(e=>e.type==='income').sort((a,b)=>String(b.date).localeCompare(String(a.date))||String(b.id).localeCompare(String(a.id)));
  const players=Array.isArray(state.players)?state.players.slice().sort((a,b)=>String(a.name).localeCompare(String(b.name),'it')):[];
  const playerCards=players.map(p=>{
    const id=String(p.id);const info=data.players[id]||{};const payer=!!info.payer;
    const due=Number.isSafeInteger(info.dueCents)&&info.dueCents>=0?info.dueCents:0;
    const paid=t.paidByPlayer[id]||0;const left=Math.max(0,due-paid);
    const status=payer?(due===0?'Quota da impostare':left===0?'In regola':paid>0?'Parziale':'Da pagare'):'Esonerato';
    return `<div class="finance-line" style="display:block">
      <div class="finance-player-head"><strong>${financeE(p.name)}</strong><label><input type="checkbox" ${payer?'checked':''} onchange="financeTogglePayer(${financeE(JSON.stringify(id))},this.checked)"> Pagante</label></div>
      <div class="finance-player-detail">${payer?`Quota: <b>${financeEuro(due)}</b> · Versato: <b>${financeEuro(paid)}</b> · Residuo: <b>${financeEuro(left)}</b>`:`Non tenuto al versamento${paid?' · Pagamenti storici: '+financeEuro(paid):''}`}</div>
      <div class="finance-player-actions"><span class="finance-status ${payer&&due>0&&left===0?'paid':payer?'pending':''}">${status}</span>
      ${payer?`<button class="secondary" onclick="financeOpenDue(${financeE(JSON.stringify(id))})">Imposta quota</button><button class="primary" onclick="financeOpenPlayerPayment(${financeE(JSON.stringify(id))})">＋ Pagamento</button>`:''}</div>
    </div>`;
  }).join('');
  return `<div class="finance-card"><h2>Nuova entrata</h2><p class="muted small">Gli sponsor e le altre entrate si registrano qui. I pagamenti dei giocatori si inseriscono nella loro scheda.</p>
    <div class="finance-actions"><button class="primary" onclick="financeOpenEntry('income')">＋ SPONSOR / ALTRA ENTRATA</button></div>
  </div>
  <div class="finance-card"><h2>Quote della rosa</h2><p class="muted small">Seleziona solo i giocatori paganti. Per ciascuno puoi fissare la quota e registrare uno o più versamenti.</p>
    <div class="finance-line"><strong>Da incassare dai paganti</strong><span class="finance-amount">${financeEuro(t.outstanding)}</span></div>
    ${playerCards||'<p class="finance-empty">Aggiungi giocatori nella Rosa per gestire le quote.</p>'}
  </div>
  <div class="finance-card"><h2>Registro entrate</h2>${income.length?income.map(financeEntryMarkup).join(''):'<p class="finance-empty">Nessuna entrata registrata.</p>'}</div>`;
}
function financeTogglePayer(id,checked){
  const data=financeInit();
  if(!state.players.some(p=>String(p.id)===String(id)))return;
  const previous=data.players[id]||{};
  data.players[id]={...previous,payer:!!checked,dueCents:Number.isSafeInteger(previous.dueCents)?previous.dueCents:0};
  save();renderFinances();
}
function financeOpenDue(id){
  const data=financeInit();
  const p=state.players.find(x=>String(x.id)===String(id));if(!p)return;
  const info=data.players[id]||{};if(!info.payer){alert('Seleziona prima Pagante.');return}
  const due=Number.isSafeInteger(info.dueCents)?info.dueCents:0;
  sheet.innerHTML=`<div class="finance-form"><div class="sheet-head"><h2>Quota · ${financeE(p.name)}</h2><button class="close" onclick="closeModal()">✕</button></div>
    <p class="muted small">Inserisci l'importo complessivo dovuto nella stagione ${financeE(financeActiveSeason)}. Non viene conteggiato come incasso finché non registri il pagamento.</p>
    <div class="field"><label>QUOTA DOVUTA (€)</label><input id="financeDueAmount" type="number" min="0" step="0.01" inputmode="decimal" value="${(due/100).toFixed(2)}"></div>
    <div class="finance-form-buttons"><button class="primary" onclick="financeSaveDue(${financeE(JSON.stringify(String(id)))})">SALVA QUOTA</button><button class="secondary" onclick="closeModal()">ANNULLA</button></div></div>`;
  modal.classList.add('open');
}
function financeCents(value,allowZero=false){
  const text=String(value??'').trim().replace(',','.');
  if(!/^\d+(?:\.\d{1,2})?$/.test(text))return null;
  const n=Number(text);const cents=Math.round(n*100);
  if(!Number.isSafeInteger(cents)||cents<0||(!allowZero&&cents===0))return null;
  return cents;
}
function financeSaveDue(id){
  const amount=financeCents(document.getElementById('financeDueAmount')?.value,true);
  if(amount===null){alert('Inserisci un importo valido in euro (massimo due decimali).');return}
  const data=financeInit();if(!data.players[id]?.payer)return;
  data.players[id].dueCents=amount;save();closeModal();renderFinances();
}
function financeOpenPlayerPayment(id){
  const data=financeInit();
  const player=state.players.find(p=>String(p.id)===String(id));
  if(!player||!data.players[id]?.payer){alert('Seleziona prima il giocatore come Pagante.');return}
  financeOpenEntry('income',null,String(id));
}
function financeOpenEntry(type,id=null,playerId=null){
  if(!['income','expense'].includes(type))return;
  const data=financeInit();
  const existing=id?data.entries.find(e=>String(e.id)===String(id)&&e.type===type):null;
  if(id&&!existing){alert('Movimento non trovato.');return}
  const player=playerId!=null?state.players.find(p=>String(p.id)===String(playerId)):null;
  const category=existing?.category||(player?'Quota giocatore':type==='expense'?'Affiliazione':'Sponsor');
  const categories=type==='expense'?FINANCE_EXPENSES:FINANCE_INCOMES;
  const locked=!!player||category==='Quota giocatore';
  const categorySelect=locked
    ?`<input id="financeEntryCategory" type="hidden" value="Quota giocatore"><input value="Quota giocatore" disabled>`
    :`<select id="financeEntryCategory" onchange="financeCategoryChanged()">${categories.filter(x=>x!=='Quota giocatore').map(c=>`<option ${c===category?'selected':''}>${financeE(c)}</option>`).join('')}</select>`;
  const effectivePlayer=player|| (existing?.playerId!=null?state.players.find(p=>String(p.id)===String(existing.playerId)):null);
  sheet.innerHTML=`<div class="finance-form"><div class="sheet-head"><h2>${existing?'Modifica':'Nuova'} ${type==='expense'?'spesa':'entrata'}</h2><button class="close" onclick="closeModal()">✕</button></div>
    <p class="muted small">Stagione ${financeE(financeActiveSeason)}${effectivePlayer?' · '+financeE(effectivePlayer.name):''}</p>
    <div class="field"><label>CATEGORIA</label>${categorySelect}</div>
    <div class="field"><label>IMPORTO (€)</label><input id="financeEntryAmount" type="number" inputmode="decimal" min="0.01" step="0.01" placeholder="0,00" value="${existing?(existing.amountCents/100).toFixed(2):''}"></div>
    <div class="field"><label>DATA DEL MOVIMENTO</label><input id="financeEntryDate" type="date" value="${financeE(existing?.date||financeToday())}"></div>
    <div class="field"><label id="financeDescriptionLabel">${type==='income'&&category==='Sponsor'?'NOME SPONSOR / DESCRIZIONE':'DESCRIZIONE'}</label><input id="financeEntryDescription" maxlength="180" placeholder="${type==='income'&&category==='Sponsor'?'Nome dello sponsor':'Dettagli facoltativi'}" value="${financeE(existing?.description||(player?'Quota '+player.name:''))}"></div>
    <div class="finance-form-buttons"><button class="primary" onclick="financeSaveEntry('${type}',${financeE(JSON.stringify(existing?.id||null))},${financeE(JSON.stringify(String(existing?.playerId??playerId??'')))})">SALVA</button><button class="secondary" onclick="closeModal()">ANNULLA</button></div>
    ${existing?`<button class="danger-full" style="margin-top:12px" onclick="financeDeleteEntry(${financeE(JSON.stringify(String(existing.id)))})">ELIMINA MOVIMENTO</button>`:''}
  </div>`;
  modal.classList.add('open');
}
function financeCategoryChanged(){
  const label=document.getElementById('financeDescriptionLabel');
  if(label)label.textContent=document.getElementById('financeEntryCategory')?.value==='Sponsor'?'NOME SPONSOR / DESCRIZIONE':'DESCRIZIONE';
}
function financeSaveEntry(type,id,playerId){
  const data=financeInit();
  const amount=financeCents(document.getElementById('financeEntryAmount')?.value);
  const date=document.getElementById('financeEntryDate')?.value||'';
  const category=document.getElementById('financeEntryCategory')?.value||'';
  const description=document.getElementById('financeEntryDescription')?.value.trim()||'';
  if(amount===null){alert('Inserisci un importo positivo in euro, con massimo due decimali.');return}
  if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||Number.isNaN(new Date(date+'T12:00:00').getTime())){alert('Inserisci una data valida.');return}
  if(!(type==='expense'?FINANCE_EXPENSES:FINANCE_INCOMES).includes(category)){alert('Categoria non valida.');return}
  if(type==='income'&&category==='Sponsor'&&!description){alert('Inserisci il nome dello sponsor.');return}
  if(type==='expense'&&!id&&category!=='Altre spese'&&!confirm('Questa categoria potrebbe essere già conteggiata automaticamente. Vuoi aggiungere una spesa EXTRA?'))return;
  const old=id?data.entries.find(e=>String(e.id)===String(id)):null;
  if(id&&!old){alert('Movimento non trovato.');return}
  if(category==='Quota giocatore'){
    if(!playerId||!state.players.some(p=>String(p.id)===String(playerId))){alert('Giocatore non trovato.');return}
    if(!old&&!data.players[String(playerId)]?.payer){alert('Il giocatore deve essere selezionato come pagante.');return}
  }else{playerId=''}
  const entry={id:old?.id||`f${Date.now()}-${Math.random().toString(36).slice(2,9)}`,type,category,amountCents:amount,date,description};
  if(category==='Quota giocatore')entry.playerId=String(playerId);
  if(old){const index=data.entries.indexOf(old);data.entries[index]=entry}else data.entries.push(entry);
  save();closeModal();renderFinances();
}
function financeDeleteEntry(id){
  const data=financeInit();const e=data.entries.find(x=>String(x.id)===String(id));if(!e)return;
  if(!confirm(`Eliminare definitivamente questo movimento di ${financeEuro(e.amountCents)}?`))return;
  data.entries=data.entries.filter(x=>String(x.id)!==String(id));save();closeModal();renderFinances();
}
function financeExportCsv(){
  const data=financeInit();
  const csvCell=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
  const rows=[['Stagione','Data','Tipo','Categoria','Giocatore','Descrizione','Importo EUR','Origine']];
  for(const e of [...financeEntries(data),...financeAutoCosts(data).entries]){
    const p=e.playerId!=null?state.players.find(x=>String(x.id)===String(e.playerId)):null;
    rows.push([financeActiveSeason,e.date,e.type==='income'?'Entrata':'Spesa',e.category,p?.name||'',e.description||'',`${e.type==='income'?'':'-'}${(e.amountCents/100).toFixed(2).replace('.',',')}`,e.automatic?'Automatica':'Manuale']);
  }
  const content='\ufeff'+rows.map(r=>r.map(csvCell).join(';')).join('\r\n');
  const url=URL.createObjectURL(new Blob([content],{type:'text/csv;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=`hank-finanze-${financeActiveSeason.replace('/','-')}.csv`;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
