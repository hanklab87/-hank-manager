const defaultPlayers=[{"id": 1, "name": "Francesco Impellizzeri", "role": "Portiere", "number": 1, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 2, "name": "Yoseph Funaro", "role": "Portiere", "number": 2, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 3, "name": "Tommaso Maroder", "role": "Portiere", "number": 3, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 4, "name": "Morris David Bendaud", "role": "Portiere", "number": 4, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 5, "name": "Stefano Sabbatini", "role": "Portiere", "number": 5, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 6, "name": "Samuel Di Castro", "role": "Difensore", "number": 6, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 7, "name": "Marco Luziatelli", "role": "Difensore", "number": 7, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 8, "name": "Fabio Tesciuba", "role": "Difensore", "number": 8, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 9, "name": "Stefano Spagnoletto", "role": "Difensore", "number": 10, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 10, "name": "Marco Fiorentini", "role": "Terzino", "number": 12, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 11, "name": "Fabio Piperno", "role": "Terzino", "number": 13, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 12, "name": "Salvatore Sabia", "role": "Centrocampista", "number": 16, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 13, "name": "Gavriel Pavoncello", "role": "Terzino", "number": 17, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 14, "name": "Edoardo Maroder", "role": "Centrocampista", "number": 18, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 15, "name": "Alessio Gioia", "role": "Centrocampista", "number": 19, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 16, "name": "Rahmin Fellah", "role": "Centrocampista", "number": 20, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 17, "name": "Deniel Pavoncello", "role": "Centrocampista", "number": 21, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 18, "name": "Francesco Antonio Araujo", "role": "Attaccante", "number": 23, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 19, "name": "Alessandro Gazzo", "role": "Terzino", "number": 24, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 20, "name": "Massimiliano Moretti", "role": "Attaccante", "number": 25, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 21, "name": "Joshua Yosef Sasson", "role": "Attaccante", "number": 26, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 22, "name": "Gianni De Fatima Pires Araujo", "role": "Attaccante", "number": 27, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 23, "name": "Alberto Di Consiglio", "role": "Attaccante", "number": 28, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 24, "name": "Enrico Ascoli", "role": "Allenatore", "number": 31, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 25, "name": "Gianluca Gatti", "role": "Difensore", "number": 32, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 26, "name": "Marvin Miguel Pires Dos Santos", "role": "Attaccante", "number": 35, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}, {"id": 27, "name": "Alessandro Gabbani", "role": "Centrocampista", "number": 36, "foot": "Destro", "apps": 0, "goals": 0, "assists": 0}];
const defaultEvents=[{"id": 1001, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "1ª giornata", "homeAway": "Trasferta", "opponent": "Pizza Eschilo", "date": "2026-09-28", "time": "", "venue": "Campo Aldobrandini (Ostia Antica)", "status": "Da giocare"}, {"id": 1002, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "2ª giornata", "homeAway": "Trasferta", "opponent": "Lokomotiv", "date": "2026-10-05", "time": "", "venue": "Campo Bettini", "status": "Da giocare"}, {"id": 1003, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "3ª giornata", "homeAway": "Casa", "opponent": "Grifone", "date": "2026-10-27", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1004, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "4ª giornata", "homeAway": "Casa", "opponent": "Atletico SM", "date": "2026-11-10", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1005, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "5ª giornata", "homeAway": "Trasferta", "opponent": "Real Baseggio", "date": "2026-11-16", "time": "", "venue": "Campo Muratori", "status": "Da giocare"}, {"id": 1006, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "6ª giornata", "homeAway": "Casa", "opponent": "Milani", "date": "2026-12-01", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1007, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "7ª giornata", "homeAway": "Trasferta", "opponent": "Montagnola", "date": "2026-12-14", "time": "", "venue": "Campo Romulea", "status": "Da giocare"}, {"id": 1008, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "8ª giornata", "homeAway": "Casa", "opponent": "Union FB", "date": "2026-12-22", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1009, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "9ª giornata", "homeAway": "Trasferta", "opponent": "CRC", "date": "2027-01-11", "time": "", "venue": "Campo San Tarcisio", "status": "Da giocare"}, {"id": 1010, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "10ª giornata", "homeAway": "Trasferta", "opponent": "Unicum", "date": "2027-01-25", "time": "", "venue": "Campo La Borghesiana", "status": "Da giocare"}, {"id": 1011, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "11ª giornata", "homeAway": "Casa", "opponent": "Borgorosso", "date": "2027-02-02", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1012, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "12ª giornata", "homeAway": "Casa", "opponent": "Pizza Eschilo", "date": "2027-02-09", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1013, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "13ª giornata", "homeAway": "Casa", "opponent": "Lokomotiv", "date": "2027-02-23", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1014, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "14ª giornata", "homeAway": "Trasferta", "opponent": "Grifone", "date": "2027-03-01", "time": "", "venue": "Campo Elis", "status": "Da giocare"}, {"id": 1015, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "15ª giornata", "homeAway": "Trasferta", "opponent": "Atletico SM", "date": "2027-03-22", "time": "", "venue": "Campo Ferrovieri", "status": "Da giocare"}, {"id": 1016, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "16ª giornata", "homeAway": "Casa", "opponent": "Real Baseggio", "date": "2027-04-06", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1017, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "17ª giornata", "homeAway": "Trasferta", "opponent": "Milani", "date": "2027-04-12", "time": "", "venue": "Campo San Tarcisio", "status": "Da giocare"}, {"id": 1018, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "18ª giornata", "homeAway": "Casa", "opponent": "Montagnola", "date": "2027-04-20", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1019, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "19ª giornata", "homeAway": "Trasferta", "opponent": "Union FB", "date": "2027-04-26", "time": "", "venue": "Campo Atletico 2000", "status": "Da giocare"}, {"id": 1020, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "20ª giornata", "homeAway": "Casa", "opponent": "CRC", "date": "2027-05-04", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1021, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "21ª giornata", "homeAway": "Casa", "opponent": "Unicum", "date": "2027-05-11", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}, {"id": 1022, "type": "Partita", "competition": "Campionato", "customCompetition": "", "round": "22ª giornata", "homeAway": "Casa", "opponent": "Borgorosso", "date": "2027-05-18", "time": "", "venue": "Campo Ostiense", "status": "Da giocare"}];
let state=JSON.parse(localStorage.getItem('hank_v04')||'null')||{profile:null,players:defaultPlayers,events:defaultEvents,branding:{logo:'',sponsors:[]}};
if(!state.players||state.players.length<20) state.players=defaultPlayers;
if(!state.events||state.events.length<22) state.events=defaultEvents;
if(!state.branding) state.branding={logo:'',sponsors:[]};
state.events=state.events.map(e=>({...e,
  callups:Array.isArray(e.callups)?e.callups:[],
  scorers:Array.isArray(e.scorers)?e.scorers:[],
  matchEvents:Array.isArray(e.matchEvents)?e.matchEvents:
    (Array.isArray(e.scorers)?e.scorers.map(s=>({type:'Gol',playerId:s.playerId,minute:s.minute||'',note:''})):[]),
  availability:e.availability&&typeof e.availability==='object'?e.availability:{},
  homeScore:e.homeScore??'',
  awayScore:e.awayScore??'',
  notes:e.notes||''
}));

state.tactical=state.tactical&&typeof state.tactical==='object'?state.tactical:{
  currentFormation:'4-3-3',
  onField:[],
  positions:{},
  saved:[]
};
state.tactical.currentFormation=state.tactical.currentFormation||'4-3-3';
state.tactical.onField=Array.isArray(state.tactical.onField)?state.tactical.onField:[];
state.tactical.positions=state.tactical.positions&&typeof state.tactical.positions==='object'?state.tactical.positions:{};
state.tactical.saved=Array.isArray(state.tactical.saved)?state.tactical.saved:[];

state.events=state.events.map(e=>({
  ...e,
  lineup:e.lineup&&typeof e.lineup==='object'?e.lineup:{
    formation:'4-3-3',
    starters:[],
    reserves:[],
    positions:{}
  }
}));
let currentTacticalEventId=null;

state.events=state.events.map(e=>({
  ...e,
  ratings:e.ratings&&typeof e.ratings==='object'?e.ratings:{},
  statsFinalized:Boolean(e.statsFinalized),
  statsApplied:Boolean(e.statsApplied)
}));

state.events=state.events.map(e=>({...e,timer:e.timer&&typeof e.timer==='object'?e.timer:{running:false,startedAt:null,elapsedSeconds:0,finished:false}}));
let matchTimerInterval=null;

state.events=state.events.map(e=>({
  ...e,
  callups:Array.isArray(e.callups)?e.callups:[],
  live:e.live&&typeof e.live==='object'?e.live:{
    active:false,
    running:false,
    startedAt:null,
    elapsedSeconds:0,
    homeScore:Number(e.homeScore||0),
    awayScore:Number(e.awayScore||0),
    events:[],
    onField:{},
    bench:[],
    playerMinutes:{}
  }
}));

state.society=state.society&&typeof state.society==='object'?state.society:{
  name:state.profile?.team||'Maccabi Roma',
  legalName:'',
  founded:'',
  category:'',
  group:'',
  homeGround:'',
  address:'',
  colors:'',
  president:'',
  coach:'',
  assistantCoach:'',
  manager:'',
  phone:'',
  email:'',
  vatNumber:'',
  fiscalCode:'',
  notes:''
};
state.players=state.players.map(p=>({
  ...p,
  firstName:p.firstName||((p.name||'').split(' ')[0]||''),
  lastName:p.lastName||((p.name||'').split(' ').slice(1).join(' ')||''),
  birthDate:p.birthDate||'',
  fiscalCode:p.fiscalCode||'',
  phone:p.phone||'',
  email:p.email||'',
  medicalCertificate:p.medicalCertificate||'',
  medicalExpiry:p.medicalExpiry||'',
  documentNote:p.documentNote||'',
  preferredFoot:p.preferredFoot||'',
  notes:p.notes||''
}));
let currentMatchDetailsId=null;


state.events.forEach(e=>{
  e.live=e.live||{};
  e.live.periodLength=Number(e.live.periodLength||40);
  e.live.phase=e.live.phase||(
    e.live.finished?'finished':
    e.live.running?'first':
    'pre'
  );
  e.live.periodElapsedSeconds=Number(
    e.live.periodElapsedSeconds!==undefined
      ?e.live.periodElapsedSeconds
      :(e.live.elapsedSeconds||0)
  );
  e.live.totalPlayingSeconds=Number(
    e.live.totalPlayingSeconds!==undefined
      ?e.live.totalPlayingSeconds
      :(e.live.elapsedSeconds||0)
  );
  e.live.periodStartedAt=e.live.periodStartedAt||e.live.startedAt||null;
  e.live.playingStartedAt=e.live.playingStartedAt||e.live.startedAt||null;
  e.live.secondHalfDisplay=e.live.secondHalfDisplay||'continuous';
  e.live.mvpPlayerId=e.live.mvpPlayerId||null;
});

let currentLiveEventId=null;
let liveTimerInterval=null;



let currentFilter='Tutti';

function save(){localStorage.setItem('hank_v04',JSON.stringify(state))}
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));
  const inside=['home','squad','calendar','tactical'].includes(id);
  topbar.classList.toggle('hidden',!inside);
  nav.classList.toggle('hidden',!inside);
  document.body.classList.toggle('detail-open',['matchDetails','tactical','liveMatch'].includes(id));
  document.querySelectorAll('.bottom button,.bottom-nav button').forEach(b=>b.classList.remove('active'));
  if(id==='home'){nHome?.classList.add('active');renderBranding();renderNextMatch();renderDashboard();}
  if(id==='tactical'){renderTacticalBoard();}
  if(id==='squad'){nSquad?.classList.add('active');renderPlayers()}
  if(id==='calendar'){nCalendar?.classList.add('active');renderEvents()}
  window.scrollTo(0,0);
}
function startApp(){
  const n=document.getElementById('name').value.trim()||'Enrico Ascoli';
  const t=document.getElementById('team').value.trim()||'Maccabi Roma';
  state.profile={name:n,team:t,role:document.getElementById('role').value};
  save();
  hello.textContent='Ciao '+n.split(' ')[0]+' 👋';
  show('home');
}
function setFilter(btn){
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');currentFilter=btn.dataset.role;renderPlayers();
}
function renderPlayers(){
  const q=(document.getElementById('search')?.value||'').toLowerCase();

  const allPlayers=state.players
    .filter(p=>String(p.role||'').toLowerCase()!=='allenatore')
    .filter(p=>(currentFilter==='Tutti'||p.role===currentFilter)&&(p.name||'').toLowerCase().includes(q))
    .sort((a,b)=>roleOrderV44(a.role)-roleOrderV44(b.role)||Number(a.number)-Number(b.number));

  const count=document.getElementById('rosterCount');
  if(count)count.textContent=state.players.filter(p=>String(p.role||'').toLowerCase()!=='allenatore').length;

  let currentGroup='';
  playerList.innerHTML=allPlayers.map(p=>{
    const group=roleGroupV44(p.role);
    const heading=group!==currentGroup?`<div class="role-group-title roster-role-title">${group}</div>`:'';
    currentGroup=group;

    return `${heading}<div class="player" onclick="openPlayer(${p.id})">
      <div class="player-left">
        <div class="avatar">
          ${p.photo?`<img src="${p.photo}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`:initials(p.name)}
        </div>
        <div style="min-width:0">
          <div class="pname">${escapeHtml(p.name)}</div>
          <div class="prole">${escapeHtml(p.role)}</div>
        </div>
      </div>
      <div class="number">${p.number}</div>
    </div>`;
  }).join('')||'<div class="card empty">Nessun giocatore trovato.</div>';
}
function openPlayer(id){
  const p=state.players.find(x=>String(x.id)===String(id));if(!p)return;
  const birth=p.birthDate?formatDate(p.birthDate):'Non inserita';
  const med=p.medicalExpiry?formatDate(p.medicalExpiry):'Non inserita';
  sheet.innerHTML=`<div class="sheet-head">
    <div><p class="muted small">SCHEDA GIOCATORE</p><h2>${escapeHtml(p.name)}</h2></div>
    <button class="close" onclick="closeModal()">✕</button>
  </div>
  <div class="hero" style="margin:12px 0">
    <div style="display:flex;align-items:center;gap:14px">
      <div class="avatar" style="width:72px;height:72px;font-size:22px">${p.photo?`<img src="${p.photo}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`:initials(p.name)}</div>
      <div><div class="badge">#${p.number} · ${escapeHtml(p.role)}</div></div>
    </div>
  </div>
  <div class="info-list-modern">
    <div class="info-row-modern"><span>Data di nascita</span><strong>${birth}</strong></div>
    <div class="info-row-modern"><span>Certificato medico</span><strong>${p.medicalCertificate?'Presente':'Non inserito'}</strong></div>
    <div class="info-row-modern"><span>Scadenza certificato</span><strong>${med}</strong></div>
  </div>
  <div class="stats">
    <div class="stat"><strong>${p.apps||p.stats?.appearances||0}</strong><span>Presenze</span></div>
    <div class="stat"><strong>${p.goals||p.stats?.goals||0}</strong><span>Gol</span></div>
    <div class="stat"><strong>${p.assists||p.stats?.assists||0}</strong><span>Assist</span></div>
  </div>
  <div class="player-delete-row">
    <button class="secondary" onclick="openEditPlayer(${p.id})">MODIFICA</button>
    <button class="danger-full" style="margin:0" onclick="deletePlayer(${p.id})">ELIMINA</button>
  </div>`;
  modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){
  modal.classList.remove('open','match-modal');
  document.body.style.overflow='';
}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
function fabAction(){
  if(document.getElementById('squad')?.classList.contains('active'))openAddPlayer();
  else if(document.getElementById('calendar')?.classList.contains('active'))openAddEvent();
}
function playerForm(title,p={}){
  return `<div class="sheet-head"><h2>${title}</h2><button class="close" onclick="closeModal()">✕</button></div>
  <div class="field"><label>FOTO</label><input id="pphoto" type="file" accept="image/*"></div>
  <div class="field"><label>NOME E COGNOME</label><input id="pn" value="${escapeHtml(p.name||'')}"></div>
  <div class="field"><label>NUMERO</label><input id="pnum" type="number" value="${p.number??''}"></div>
  <div class="field"><label>RUOLO</label><select id="prole">
    ${['Portiere','Difensore','Terzino','Centrocampista','Attaccante','Allenatore'].map(r=>`<option ${p.role===r?'selected':''}>${r}</option>`).join('')}
  </select></div>
  <div class="field"><label>DATA DI NASCITA</label><input id="pbirth" type="date" value="${p.birthDate||''}"></div>
  <div class="field"><label>CERTIFICATO MEDICO</label><input id="pmedical" value="${escapeHtml(p.medicalCertificate||'')}" placeholder="Es. agonistico"></div>
  <div class="field"><label>SCADENZA CERTIFICATO</label><input id="pmedicalexpiry" type="date" value="${p.medicalExpiry||''}"></div>`;
}
function openAddPlayer(){
  sheet.innerHTML=playerForm('Nuovo giocatore')+`<button class="primary" onclick="addPlayer()">SALVA GIOCATORE</button>`;
  modal.classList.add('open');document.body.style.overflow='hidden';
}
function openEditPlayer(id){
  const p=state.players.find(x=>String(x.id)===String(id));if(!p)return;
  sheet.innerHTML=playerForm('Modifica giocatore',p)+`<button class="primary" onclick="saveEditedPlayer(${p.id})">SALVA MODIFICHE</button>`;
  modal.classList.add('open');document.body.style.overflow='hidden';
}
function readPlayerForm(existing={}){
  return {
    ...existing,
    name:document.getElementById('pn').value.trim(),
    number:Number(document.getElementById('pnum').value),
    role:document.getElementById('prole').value,
    birthDate:document.getElementById('pbirth').value,
    medicalCertificate:document.getElementById('pmedical').value.trim(),
    medicalExpiry:document.getElementById('pmedicalexpiry').value
  };
}
function addPlayer(){
  const name=document.getElementById('pn').value.trim();
  const number=document.getElementById('pnum').value;
  if(!name||number==='')return alert('Inserisci nome e numero');
  const player=readPlayerForm({id:Date.now(),apps:0,goals:0,photo:''});
  const file=document.getElementById('pphoto').files[0];
  if(file){
    const r=new FileReader();
    r.onload=()=>{player.photo=r.result;state.players.push(player);save();closeModal();renderPlayers()};
    r.readAsDataURL(file);
  }else{
    state.players.push(player);save();closeModal();renderPlayers();
  }
}
function saveEditedPlayer(id){
  const i=state.players.findIndex(x=>String(x.id)===String(id));if(i<0)return;
  const updated=readPlayerForm(state.players[i]);
  if(!updated.name||!updated.number)return alert('Inserisci nome e numero');
  const file=document.getElementById('pphoto').files[0];
  const finish=()=>{state.players[i]=updated;save();closeModal();renderPlayers()};
  if(file){
    const r=new FileReader();r.onload=()=>{updated.photo=r.result;finish()};r.readAsDataURL(file);
  }else finish();
}
function deletePlayer(id){
  const p=state.players.find(x=>String(x.id)===String(id));if(!p)return;
  if(!confirm(`Eliminare definitivamente ${p.name}?`))return;
  state.players=state.players.filter(x=>String(x.id)!==String(id));
  state.events.forEach(e=>{
    e.callups=(e.callups||[]).filter(x=>String(x)!==String(id));
    e.matchEvents=(e.matchEvents||[]).filter(x=>String(x.playerId)!==String(id));
  });
  save();closeModal();renderPlayers();
}
function openAddEvent(){
  sheet.innerHTML=`<div class="sheet-head"><h2>Nuovo evento</h2><button class="close" onclick="closeModal()">✕</button></div>
  <div class="field"><label>TIPO EVENTO</label><select id="etype" onchange="toggleMatchFields()"><option>Partita</option><option>Allenamento</option><option>Riunione</option><option>Altro</option></select></div>
  <div id="matchFields">
    <div class="field"><label>COMPETIZIONE</label><select id="ecompetition" onchange="toggleCustomCompetition()"><option>Campionato</option><option>Coppa</option><option>Torneo</option><option>Amichevole</option><option>Personalizza</option></select></div>
    <div class="field hidden" id="customCompField"><label>NOME COMPETIZIONE</label><input id="ecustomcompetition" placeholder="Es. Trofeo Cesari"></div>
    <div class="field"><label>GIORNATA / FASE</label><input id="eround" placeholder="Es. 1ª giornata, Semifinale"></div>
    <div class="field"><label>CASA O TRASFERTA</label><select id="ehomeaway"><option>Casa</option><option>Trasferta</option><option>Campo neutro</option></select></div>
    <div class="field"><label>AVVERSARIO</label><input id="eopponent"></div>
  </div>
  <div class="field"><label>DATA</label><input id="edate" type="date"></div>
  <div class="field"><label>ORA</label><input id="etime" type="time"></div>
  <div class="field"><label>CAMPO / LUOGO</label><input id="evenue"></div>
  <button class="primary" onclick="addEvent()">SALVA EVENTO</button>`;
  modal.classList.add('open');document.body.style.overflow='hidden';
}
function toggleMatchFields(){document.getElementById('matchFields').classList.toggle('hidden',document.getElementById('etype').value!=='Partita')}
function toggleCustomCompetition(){document.getElementById('customCompField').classList.toggle('hidden',document.getElementById('ecompetition').value!=='Personalizza')}
function addEvent(){
  const type=document.getElementById('etype').value;
  const date=document.getElementById('edate').value;
  if(!date)return alert('Inserisci la data');
  const isMatch=type==='Partita';
  const opponent=isMatch?document.getElementById('eopponent').value.trim():'';
  if(isMatch&&!opponent)return alert('Inserisci l’avversario');
  state.events.push({id:Date.now(),type,
    competition:isMatch?document.getElementById('ecompetition').value:'',
    customCompetition:isMatch?document.getElementById('ecustomcompetition').value.trim():'',
    round:isMatch?document.getElementById('eround').value.trim():'',
    homeAway:isMatch?document.getElementById('ehomeaway').value:'',
    opponent,date,time:document.getElementById('etime').value,
    venue:document.getElementById('evenue').value.trim(),status:isMatch?'Da giocare':'',
    callups:[],scorers:[],matchEvents:[],availability:{},homeScore:'',awayScore:'',notes:'',lineup:{formation:'4-3-3',starters:[],reserves:[],positions:{},slotAssignments:{}}});
  save();closeModal();renderEvents();renderNextMatch();
}
function renderEvents(){
  const team=state.profile?.team||'Maccabi Roma';
  const teamLogo=state.branding?.logo||'';
  const arr=[...state.events].sort((a,b)=>(a.date+(a.time||'')).localeCompare(b.date+(b.time||'')));
  const logoHtml=teamLogo
    ? `<img class="team-logo-mini" src="${teamLogo}" alt="${team}">`
    : `<div class="team-badge-mini">${initials(team)}</div>`;
  events.innerHTML=arr.length?arr.map(e=>{
    if(e.type!=='Partita')return `<div class="match-card clickable" onclick="openEventCenter(${e.id})"><div class="match-top"><span class="comp">${e.type}</span></div><div class="teams-line">${e.type}</div><div class="match-info">📅 ${formatDate(e.date)} ${e.time||''}<br>📍 ${e.venue||'Luogo da definire'}</div></div>`;
    const comp=e.competition==='Personalizza'?(e.customCompetition||'Personalizzata'):e.competition;
    const isAway=e.homeAway==='Trasferta';
    const home=isAway?e.opponent:team;
    const away=isAway?team:e.opponent;
    const homeVisual=isAway
      ? `<div class="team-badge-mini">${initials(home)}</div>`
      : logoHtml;
    const awayVisual=isAway
      ? logoHtml
      : `<div class="team-badge-mini">${initials(away)}</div>`;
    const outcome=matchOutcomeLabel(e,team);
    const outcomeClass=outcome==='Vittoria'?'result-win':outcome==='Sconfitta'?'result-loss':outcome==='Pareggio'?'result-draw':'result-pending';
    return `<div class="match-card clickable ${outcomeClass}" onclick="openMatchDetails(${e.id})">
      <div class="match-top">
        <span class="comp">${comp}${e.round?' · '+e.round:''}</span>
        <span class="status">${matchOutcomeLabel(e,team)}</span>
      </div>
      <div class="match-team-row">
        <div class="team-with-logo home-side">${homeVisual}<strong>${home}</strong></div>
        <div class="match-vs">${e.homeScore!==""&&e.awayScore!==""?`${e.homeScore} - ${e.awayScore}`:"VS"}</div>
        <div class="team-with-logo away-side"><strong>${away}</strong>${awayVisual}</div>
      </div>
      <div class="match-info">📅 ${formatDate(e.date)} ${e.time||'Orario da definire'}<br>📍 ${e.venue||'Campo da definire'} · ${e.homeAway}</div>
    </div>`;
  }).join(''):'<div class="card empty">Nessun evento inserito.</div>';
}
function renderNextMatch(){
  const today=new Date().toISOString().slice(0,10);
  const matches=[...state.events].filter(e=>e.type==='Partita').sort((a,b)=>a.date.localeCompare(b.date));
  const next=matches.find(e=>e.date>=today)||matches[0];
  if(!next)return;
  const team=state.profile?.team||'Maccabi Roma';
  const teamLogo=state.branding?.logo||'';
  const isAway=next.homeAway==='Trasferta';
  const home=isAway?next.opponent:team;
  const away=isAway?team:next.opponent;
  const clubs=document.querySelectorAll('.hero .club');
  if(clubs.length>=2){
    clubs[0].querySelector('b').textContent=home;
    clubs[1].querySelector('b').textContent=away;
    const homeCrest=clubs[0].querySelector('.crest');
    const awayCrest=clubs[1].querySelector('.crest');
    if(!isAway && teamLogo){
      homeCrest.innerHTML=`<img src="${teamLogo}" style="width:100%;height:100%;object-fit:cover;border-radius:20px">`;
    }else{
      homeCrest.textContent=initials(home);
    }
    if(isAway && teamLogo){
      awayCrest.innerHTML=`<img src="${teamLogo}" style="width:100%;height:100%;object-fit:cover;border-radius:20px">`;
    }else{
      awayCrest.textContent=initials(away);
    }
  }
  const meta=document.querySelector('.hero .meta');
  if(meta)meta.innerHTML=`<span>📅 ${formatDate(next.date)} ${next.time||''}</span><span>📍 ${next.venue}</span>`;
}

function openEventCenter(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">${e.type.toUpperCase()}</p><h2>${e.type}</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="field"><label>DATA</label><input id="mcDate" type="date" value="${e.date||''}"></div>
  <div class="field"><label>ORA</label><input id="mcTime" type="time" value="${e.time||''}"></div>
  <div class="field"><label>LUOGO</label><input id="mcVenue" value="${escapeHtml(e.venue||'')}"></div>
  <div class="field"><label>NOTE</label><textarea id="mcNotes">${escapeHtml(e.notes||'')}</textarea></div>
  <button class="primary" onclick="saveSimpleEvent(${id})">SALVA MODIFICHE</button>
  <button class="danger-full" onclick="deleteEvent(${id})">ELIMINA EVENTO</button>`;
  modal.classList.add('open');
}
function saveSimpleEvent(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  e.date=document.getElementById('mcDate').value;
  e.time=document.getElementById('mcTime').value;
  e.venue=document.getElementById('mcVenue').value.trim();
  e.notes=document.getElementById('mcNotes').value.trim();
  save();closeModal();renderEvents();renderNextMatch();
}
function openMatchCenter(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  const team=state.profile?.team||state.society?.name||'Maccabi Roma';
  const isAway=e.homeAway==='Trasferta';
  const home=isAway?e.opponent:team;
  const away=isAway?team:e.opponent;
  const selected=new Set(e.callups||[]);
  const players=state.players.filter(p=>p.role!=='Allenatore').sort((a,b)=>roleOrderV44(a.role)-roleOrderV44(b.role)||Number(a.number)-Number(b.number));
  const playerOptions=players.map(p=>`<option value="${p.id}">#${p.number} ${escapeHtml(p.name)}</option>`).join('');
  const timeline=[...(e.matchEvents||[])].sort((a,b)=>(Number(a.minute)||999)-(Number(b.minute)||999)).map((ev,i)=>{
    const p=state.players.find(x=>String(x.id)===String(ev.playerId));
    return `<div class="timeline-event"><div class="event-icon">${eventIcon(ev.type)}</div><div><div class="event-title">${escapeHtml(ev.type)} · ${p?escapeHtml(p.name):'Giocatore'}</div><div class="event-note">${escapeHtml(ev.note||'')}</div></div><div><div class="event-minute">${ev.minute?escapeHtml(ev.minute)+"'":''}</div><button class="mini-danger" onclick="removeMatchEvent(${id},${i})">✕</button></div></div>`;
  }).join('');
  const finished=e.status==='Terminata';
  sheet.innerHTML=`<div class="match-page-sticky">
      <div><p class="muted small">${escapeHtml(e.competition||'PARTITA')}</p><h2>${escapeHtml(e.round||'Scheda partita')}</h2></div>
      <button class="close" onclick="closeModal()">✕</button>
    </div>
    <div class="match-page-shell">
      <div class="match-summary-hero">
        <div class="match-teams-row">
          <div class="match-team-side">${!isAway?clubLogoHtml(team):`<div class="match-logo-round">${initials(home)}</div>`}<strong>${escapeHtml(home)}</strong></div>
          <div class="match-score-big">${e.homeScore!==''?e.homeScore:0} - ${e.awayScore!==''?e.awayScore:0}</div>
          <div class="match-team-side">${isAway?clubLogoHtml(team):`<div class="match-logo-round">${initials(away)}</div>`}<strong>${escapeHtml(away)}</strong></div>
        </div>
        <div class="match-meta-strip"><span>${formatDate(e.date)}</span><span>${e.time||'Ora da definire'}</span><span>${escapeHtml(e.venue||'Campo da definire')}</span></div>
      </div>

      ${finished?buildMatchSummaryHtml(e):`
      <div class="match-section-card">
        <h3>Convocati presenti</h3>
        <div class="callups">${players.map(p=>`<div class="callup-row-simple"><label><input class="callupCheck" type="checkbox" value="${p.id}" ${selected.has(p.id)||selected.has(String(p.id))?'checked':''}><span class="number-pill">${p.number}</span><span><strong>${escapeHtml(p.name)}</strong><br><span class="muted small">${escapeHtml(p.role)}</span></span></label></div>`).join('')}</div>
        <button class="primary" onclick="saveMatchCenter(${id})">SALVA CONVOCATI E DATI</button>
      </div>

      <div class="match-section-card">
        <h3>Preparazione partita</h3>
        <button class="primary" onclick="openMatchTactical(${id})">⚽ PREPARA FORMAZIONE</button>
        <button class="secondary" style="margin-top:8px" onclick="startLiveMatch(${id})">▶ LIVE MATCH</button>
      </div>

      <div class="match-section-card">
        <h3>Dati partita</h3>
        <div class="field"><label>STATO</label><select id="mcStatus">${['Da giocare','In corso','Terminata','Rinviata'].map(x=>`<option ${e.status===x?'selected':''}>${x}</option>`).join('')}</select></div>
        <div class="form-grid"><div class="field"><label>DATA</label><input id="mcDate" type="date" value="${e.date||''}"></div><div class="field"><label>ORA</label><input id="mcTime" type="time" value="${e.time||''}"></div></div>
        <div class="field"><label>CAMPO</label><input id="mcVenue" value="${escapeHtml(e.venue||'')}"></div>
        <div class="form-grid"><div class="field"><label>GOL CASA</label><input id="mcHomeScore" type="number" min="0" value="${e.homeScore}"></div><div class="field"><label>GOL TRASFERTA</label><input id="mcAwayScore" type="number" min="0" value="${e.awayScore}"></div></div>
      </div>

      <div class="match-section-card">
        <h3>Inserimento manuale eventi</h3>
        <div class="field"><label>TIPO EVENTO</label><select id="matchEventType"><option>Gol</option><option>Ammonizione</option><option>Espulsione</option><option>Autogol</option><option>Rigore segnato</option><option>Rigore sbagliato</option><option>Rigore parato</option></select></div>
        <div class="form-grid"><div class="field"><label>GIOCATORE</label><select id="matchEventPlayer">${playerOptions}</select></div><div class="field"><label>MINUTO</label><input id="matchEventMinute" placeholder="Es. 23"></div></div>
        <div class="field"><label>NOTA</label><input id="matchEventNote" value=""></div>
        <button class="secondary" onclick="addMatchEvent(${id})">＋ AGGIUNGI EVENTO</button>
        <div>${timeline||'<p class="muted small" style="margin-top:10px">Nessun evento inserito.</p>'}</div>
      </div>

      <div class="match-section-card">
        <h3>Note del mister</h3>
        <textarea id="mcNotes">${escapeHtml(e.notes||'')}</textarea>
        <button class="primary" onclick="saveMatchCenter(${id})">SALVA SCHEDA PARTITA</button>
        <button class="secondary" style="margin-top:8px" onclick="resetCurrentMatchV441(${id})">↺ AZZERA PARTITA</button>
        <button class="danger-full" onclick="deleteEvent(${id})">ELIMINA PARTITA</button>
      </div>`}
    </div>`;
  modal.classList.add('open','match-modal');
  document.body.style.overflow='hidden';
}
function collectMatchForm(e){
  e.status=document.getElementById('mcStatus').value;
  e.date=document.getElementById('mcDate').value;
  e.time=document.getElementById('mcTime').value;
  e.venue=document.getElementById('mcVenue').value.trim();
  e.homeScore=document.getElementById('mcHomeScore').value;
  e.awayScore=document.getElementById('mcAwayScore').value;
  e.notes=document.getElementById('mcNotes').value.trim();
  e.callups=[...document.querySelectorAll('.callupCheck:checked')].map(x=>Number(x.value));
  e.availability={};
}

function resetCurrentMatchV441(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  if(!confirm('Azzero completamente questa partita? Convocati, formazione, eventi, voti, cronometro e risultato verranno cancellati.'))return;

  e.callups=[];
  e.availability={};
  e.homeScore='';
  e.awayScore='';
  e.status='Da giocare';
  e.notes='';
  e.ratings={};
  e.matchEvents=[];
  e.statsApplied=false;
  e.statsFinalized=false;
  e.timer={running:false,startedAt:null,elapsedSeconds:0};
  e.lineup={
    formation:'4-3-3',
    starters:[],
    reserves:[],
    positions:{},
    slotAssignments:{}
  };
  e.live={
    active:false,
    running:false,
    finished:false,
    phase:'pre',
    periodLength:40,
    periodElapsedSeconds:0,
    totalPlayingSeconds:0,
    periodStartedAt:null,
    playingStartedAt:null,
    secondHalfDisplay:'continuous',
    homeScore:0,
    awayScore:0,
    events:[],
    onField:{},
    bench:[],
    playerMinutes:{},
    mvpPlayerId:null
  };

  save();
  closeModal();
  renderEvents();
  renderNextMatch();
  renderDashboard();
  alert('Partita azzerata. Ora puoi prepararla e rigiocarla da zero.');
}

function saveMatchCenter(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  collectMatchForm(e);
  e.live=e.live||{};
  e.live.homeScore=Number(e.homeScore||0);
  e.live.awayScore=Number(e.awayScore||0);
  save();
  closeModal();
  renderEvents();
  renderNextMatch();
  renderDashboard();
}
function addMatchEvent(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  collectMatchForm(e);
  const type=document.getElementById('matchEventType').value;
  const playerId=Number(document.getElementById('matchEventPlayer').value);
  const minute=document.getElementById('matchEventMinute').value.trim();
  const note=document.getElementById('matchEventNote').value.trim();
  e.matchEvents=e.matchEvents||[];
  e.matchEvents.push({type,playerId,minute,note});
  save();openMatchCenter(id);
}
function removeMatchEvent(id,index){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  e.matchEvents.splice(index,1);save();openMatchCenter(id);
}
function eventIcon(type){
  return ({'Gol':'⚽','Assist':'🎯','Ammonizione':'🟨','Espulsione':'🟥','Autogol':'🔁','Rigore segnato':'🥅','Rigore sbagliato':'❌','Rigore parato':'🧤',conceded:'🥅'})[type]||'•';
}
function matchOutcomeLabel(e,team){
  if(e.status!=='Terminata'||e.homeScore===''||e.awayScore==='')return e.status||'Da giocare';
  const isAway=e.homeAway==='Trasferta';
  const gf=Number(isAway?e.awayScore:e.homeScore),ga=Number(isAway?e.homeScore:e.awayScore);
  return gf>ga?'Vittoria':gf<ga?'Sconfitta':'Pareggio';
}
function deleteEvent(id){
  if(!confirm('Vuoi eliminare definitivamente questa partita?'))return;
  state.events=state.events.filter(e=>e.id!==id);
  save();closeModal();renderEvents();renderNextMatch();
}
function escapeHtml(value){
  return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function openBranding(){
  const sponsors=state.branding.sponsors||[];
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">IDENTITÀ SQUADRA</p><h2>Logo e sponsor</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="logo-preview" id="logoPreview">${state.branding.logo?`<img src="${state.branding.logo}">`:'MR'}</div>
  <div class="field"><label>LOGO DELLA SOCIETÀ</label><input id="logoInput" type="file" accept="image/*" onchange="loadTeamLogo(this)"></div>
  ${state.branding.logo?`<button class="mini-danger" style="width:100%;margin-bottom:14px" onclick="removeTeamLogo()">RIMUOVI LOGO SOCIETÀ</button>`:''}
  <div class="section-head"><div><h2>Sponsor</h2><p class="muted small">Puoi inserirne più di uno</p></div></div>
  <div class="field"><label>NOME SPONSOR</label><input id="sponsorName"></div>
  <div class="field"><label>LOGO SPONSOR</label><input id="sponsorLogo" type="file" accept="image/*"></div>
  <button class="primary" onclick="addSponsor()">AGGIUNGI SPONSOR</button>
  <div class="list">${sponsors.map((s,i)=>`<div class="player"><div class="player-left">${s.logo?`<img src="${s.logo}" style="width:42px;height:42px;object-fit:contain;background:white;border-radius:10px">`:''}<div><div class="pname">${s.name}</div><div class="prole">Sponsor</div></div></div><button class="mini-danger" onclick="removeSponsor(${i})">Elimina</button></div>`).join('')}</div>`;
  modal.classList.add('open');
}
function loadTeamLogo(input){
  const file=input.files[0];if(!file)return;
  const r=new FileReader();r.onload=()=>{state.branding.logo=r.result;save();document.getElementById('logoPreview').innerHTML=`<img src="${r.result}">`;renderBranding();renderEvents();renderNextMatch()};r.readAsDataURL(file);
}
function removeTeamLogo(){
  state.branding.logo='';
  save();
  renderBranding();
  renderEvents();
  renderNextMatch();
  openBranding();
}
function addSponsor(){
  const name=document.getElementById('sponsorName').value.trim();
  const file=document.getElementById('sponsorLogo').files[0];
  if(!name)return alert('Inserisci il nome dello sponsor');
  if(!file){state.branding.sponsors.push({name,logo:''});save();openBranding();renderBranding();return}
  const r=new FileReader();r.onload=()=>{state.branding.sponsors.push({name,logo:r.result});save();openBranding();renderBranding()};r.readAsDataURL(file);
}
function removeSponsor(i){state.branding.sponsors.splice(i,1);save();openBranding();renderBranding()}
function renderBranding(){
  const team=state.profile?.team||'Maccabi Roma';
  document.getElementById('homeTeamName').textContent=team;
  if(state.branding.logo)document.getElementById('homeCrest').innerHTML=`<img src="${state.branding.logo}" style="width:100%;height:100%;object-fit:cover;border-radius:20px">`;
  else document.getElementById('homeCrest').textContent=initials(team);
  document.getElementById('homeSponsors').innerHTML=(state.branding.sponsors||[]).map(s=>`<div class="sponsor-chip">${s.logo?`<img src="${s.logo}">`:''}<span class="small">${s.name}</span></div>`).join('');
}

function seasonStats(){
  const played=state.events.filter(e=>e.type==='Partita'&&e.status==='Terminata'&&e.homeScore!==''&&e.awayScore!=='');
  let wins=0,draws=0,losses=0,gf=0,ga=0;
  played.forEach(e=>{
    const isAway=e.homeAway==='Trasferta';
    const f=Number(isAway?e.awayScore:e.homeScore),a=Number(isAway?e.homeScore:e.awayScore);
    gf+=f;ga+=a;if(f>a)wins++;else if(f<a)losses++;else draws++;
  });
  return {played:played.length,wins,draws,losses,gf,ga};
}
function playerStats(){
  const map={};
  state.players.forEach(p=>map[p.id]={player:p,goals:0,yellow:0,red:0,ownGoals:0,apps:0});
  state.events.filter(e=>e.type==='Partita').forEach(e=>{
    (e.callups||[]).forEach(id=>{if(map[id])map[id].apps++});
    (e.matchEvents||[]).forEach(ev=>{
      const s=map[ev.playerId];if(!s)return;
      if(ev.type==='Gol'||ev.type==='Rigore segnato')s.goals++;
      if(ev.type==='Assist')s.assists++;
      if(ev.type==='Ammonizione')s.yellow++;
      if(ev.type==='Espulsione')s.red++;
      if(ev.type==='Autogol')s.ownGoals++;
    });
  });
  return Object.values(map);
}
function renderDashboard(){
  const s=seasonStats();
  const top=playerStats().sort((a,b)=>b.goals-a.goals||b.assists-a.assists).slice(0,5);
  const host=document.getElementById('dashboardV07');if(!host)return;
  host.innerHTML=`<div class="dashboard-grid">
    <div class="dash-stat"><small>Partite</small><strong>${s.played}</strong></div>
    <div class="dash-stat"><small>Vittorie</small><strong>${s.wins}</strong></div>
    <div class="dash-stat"><small>Gol fatti</small><strong>${s.gf}</strong></div>
    <div class="dash-stat"><small>Gol subiti</small><strong>${s.ga}</strong></div>
  </div>
  <div class="section-head" style="margin-top:20px"><div><h2>Classifica marcatori</h2><p class="muted small">Aggiornata dagli eventi partita</p></div></div>
  <div>${top.map((x,i)=>`<div class="player-stat-card"><div class="player-left"><span class="number-pill">${i+1}</span><div><div class="pname">${escapeHtml(x.player.name)}</div><div class="prole">${escapeHtml(x.player.role)}</div></div></div><div class="stat-badges"><span class="stat-badge">⚽ ${x.goals}</span><span class="stat-badge">🎯 ${x.assists}</span><span class="stat-badge">🟨 ${x.yellow}</span><span class="stat-badge">🟥 ${x.red}</span></div></div>`).join('')||'<div class="card empty">Nessuna statistica disponibile.</div>'}</div>`;
}
function openNextMatch(){
  const today=new Date().toISOString().slice(0,10);
  const next=[...state.events].filter(e=>e.type==='Partita'&&e.date>=today).sort((a,b)=>a.date.localeCompare(b.date))[0]
    ||[...state.events].filter(e=>e.type==='Partita').sort((a,b)=>b.date.localeCompare(a.date))[0];
  if(next)openMatchCenter(next.id);else alert('Nessuna partita disponibile');
}
function showStats(){
  show('home');
  setTimeout(()=>{
    renderTeamStatisticsV434();
    document.getElementById('dashboardV07')?.scrollIntoView({behavior:'smooth'});
  },50);
}



const FORMATION_PRESETS={
'4-3-3':[[50,91,'POR'],[18,73,'TD'],[39,77,'DC'],[61,77,'DC'],[82,73,'TS'],[28,54,'CC'],[50,59,'CC'],[72,54,'CC'],[20,27,'AD'],[50,21,'ATT'],[80,27,'AS']],
'4-2-3-1':[[50,91,'POR'],[18,73,'TD'],[39,77,'DC'],[61,77,'DC'],[82,73,'TS'],[38,58,'MED'],[62,58,'MED'],[20,39,'AD'],[50,36,'TRQ'],[80,39,'AS'],[50,19,'ATT']],
'4-4-2':[[50,91,'POR'],[18,73,'TD'],[39,77,'DC'],[61,77,'DC'],[82,73,'TS'],[18,51,'ED'],[39,56,'CC'],[61,56,'CC'],[82,51,'ES'],[37,25,'ATT'],[63,25,'ATT']],
'3-5-2':[[50,91,'POR'],[27,75,'DC'],[50,79,'DC'],[73,75,'DC'],[12,50,'ED'],[32,57,'CC'],[50,61,'MED'],[68,57,'CC'],[88,50,'ES'],[37,24,'ATT'],[63,24,'ATT']],
'3-4-2-1':[[50,91,'POR'],[27,75,'DC'],[50,79,'DC'],[73,75,'DC'],[15,52,'ED'],[38,58,'CC'],[62,58,'CC'],[85,52,'ES'],[35,34,'TRQ'],[65,34,'TRQ'],[50,17,'ATT']],
'3-4-3':[[50,91,'POR'],[27,75,'DC'],[50,79,'DC'],[73,75,'DC'],[17,53,'ED'],[40,59,'CC'],[60,59,'CC'],[83,53,'ES'],[20,27,'AD'],[50,20,'ATT'],[80,27,'AS']],
'4-3-1-2':[[50,91,'POR'],[18,73,'TD'],[39,77,'DC'],[61,77,'DC'],[82,73,'TS'],[28,55,'CC'],[50,60,'MED'],[72,55,'CC'],[50,39,'TRQ'],[37,22,'ATT'],[63,22,'ATT']]
};
function getTacticalEvent(){return state.events.find(e=>String(e.id)===String(currentTacticalEventId))}
function ensureEventLineup(e){
if(!e.lineup)e.lineup={formation:'4-3-3',starters:[],reserves:[],positions:{}};
e.lineup.formation=e.lineup.formation||'4-3-3';
e.lineup.slotAssignments=e.lineup.slotAssignments&&typeof e.lineup.slotAssignments==='object'?e.lineup.slotAssignments:{};
const called=new Set((e.callups||[]).map(String));
Object.keys(e.lineup.slotAssignments).forEach(k=>{if(!called.has(String(e.lineup.slotAssignments[k])))delete e.lineup.slotAssignments[k]});
e.lineup.starters=Object.values(e.lineup.slotAssignments).filter(Boolean);
e.lineup.reserves=(e.callups||[]).filter(id=>!e.lineup.starters.some(s=>String(s)===String(id)));
}
function openMatchTactical(id){const e=state.events.find(x=>x.id===id);if(!e)return;collectMatchForm(e);if(!(e.callups||[]).length){alert('Prima seleziona almeno un convocato.');return}currentTacticalEventId=id;ensureEventLineup(e);save();closeModal();show('tactical');renderTacticalBoard()}
function backToMatchCenter(){const id=currentTacticalEventId;if(id){currentMatchDetailsId=id;show('matchDetails');renderMatchDetails()}else show('calendar')}
function renderTacticalBoard(){
const pitch=document.getElementById('cleanPitch');if(!pitch)return;const e=getTacticalEvent();if(!e){pitch.innerHTML='<div class="empty-tactical">Apri una partita dal calendario.</div>';return}
ensureEventLineup(e);document.getElementById('formationSelect').value=e.lineup.formation;document.getElementById('tacticalMatchTitle').textContent=`${state.profile?.team||'Maccabi Roma'} · ${e.opponent}`;document.getElementById('tacticalMatchSubtitle').textContent=`${e.round||''} · ${formatDate(e.date)} ${e.time||''}`;document.getElementById('lineupCounter').textContent=`${e.lineup.starters.length} titolari · ${e.lineup.reserves.length} riserve`;
pitch.innerHTML='<div class="pitch-line half"></div><div class="pitch-line circle"></div><div class="pitch-line box-top"></div><div class="pitch-line box-bottom"></div><div class="pitch-line six-top"></div><div class="pitch-line six-bottom"></div>';
(FORMATION_PRESETS[e.lineup.formation]||FORMATION_PRESETS['4-3-3']).forEach((s,i)=>{const pid=e.lineup.slotAssignments[i],p=state.players.find(x=>String(x.id)===String(pid)),el=document.createElement('div');el.className='formation-slot';el.style.left=s[0]+'%';el.style.top=s[1]+'%';el.innerHTML=`<button class="slot-button ${p?'filled':''}" onclick="openSlotPicker(${i},'${s[2]}')">${p?p.number:'+'}</button><span class="slot-name">${p?escapeHtml(p.name.split(' ').slice(-1)[0]):s[2]}</span><div class="slot-role">${s[2]}</div>`;pitch.appendChild(el)});renderReserves()}
function roleOrderV44(role){
  const value=String(role||'').trim().toLowerCase();
  if(value.includes('port'))return 0;
  if(value.includes('difensore centrale')||value==='difensore'||value.includes('centrale difens'))return 1;
  if(value.includes('terzin'))return 2;
  if(value.includes('centrocamp'))return 3;
  if(value.includes('attacc'))return 4;
  return 5;
}
function roleGroupV44(role){
  const order=roleOrderV44(role);
  return ['Portieri','Difensori centrali','Terzini','Centrocampisti','Attaccanti','Altri'][order];
}
function openSlotPicker(i,r){
  const e=getTacticalEvent();
  const used=new Set(Object.values(e.lineup.slotAssignments||{}).map(String));
  const cur=String(e.lineup.slotAssignments?.[i]||'');
  const ps=(e.callups||[])
    .map(id=>state.players.find(p=>String(p.id)===String(id)))
    .filter(Boolean)
    .filter(p=>!used.has(String(p.id))||String(p.id)===cur)
    .sort((a,b)=>roleOrderV44(a.role)-roleOrderV44(b.role)||Number(a.number)-Number(b.number));

  let currentGroup='';
  const rows=ps.map(p=>{
    const group=roleGroupV44(p.role);
    const heading=group!==currentGroup?`<div class="role-group-title">${group}</div>`:'';
    currentGroup=group;
    return `${heading}<button class="picker-row" onclick="assignPlayerToSlot(${i},${p.id})">
      <div><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div>
      <span>＋</span>
    </button>`;
  }).join('');

  sheet.innerHTML=`<div class="sheet-head">
    <div><p class="muted small">POSIZIONE ${r}</p><h2>Scegli il giocatore</h2></div>
    <button class="close" onclick="closeModal()">✕</button>
  </div>
  <div class="player-picker">${rows}${cur?`<button class="danger-full" onclick="clearSlot(${i})">RIMUOVI</button>`:''}</div>`;
  modal.classList.add('open');
}
function assignPlayerToSlot(i,pid){const e=getTacticalEvent();Object.keys(e.lineup.slotAssignments||{}).forEach(k=>{if(String(e.lineup.slotAssignments[k])===String(pid))delete e.lineup.slotAssignments[k]});e.lineup.slotAssignments[i]=pid;ensureEventLineup(e);save();closeModal();renderTacticalBoard()}
function clearSlot(i){const e=getTacticalEvent();delete e.lineup.slotAssignments[i];ensureEventLineup(e);save();closeModal();renderTacticalBoard()}
function applyFormation(n){const e=getTacticalEvent();if(!e)return;e.lineup.formation=n;e.lineup.slotAssignments={};ensureEventLineup(e);save();renderTacticalBoard()}
function renderReserves(){const e=getTacticalEvent(),h=document.getElementById('reservesList');if(!e||!h)return;h.innerHTML=e.lineup.reserves.map(id=>{const p=state.players.find(x=>String(x.id)===String(id));return p?`<div class="reserve-row"><span class="number-pill">${p.number}</span><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div></div>`:''}).join('')||'<div class="empty-tactical">Nessuna riserva.</div>'}
function clearMatchLineup(){const e=getTacticalEvent();if(!e||!confirm('Vuoi svuotare la formazione?'))return;e.lineup.slotAssignments={};ensureEventLineup(e);save();renderTacticalBoard()}
function saveMatchLineup(){const e=getTacticalEvent();if(!e)return;ensureEventLineup(e);save();alert(`Formazione salvata: ${e.lineup.starters.length} titolari.`);
if(e.lineup.starters.length===11){
  setTimeout(()=>{ if(confirm('Formazione salvata. Vuoi aprire la modalità partita?')) startLiveMatch(e.id); },100);
}}


function renderLiveMatchBox(e){const t=e.timer||{};return `<div class="match-live-card"><div><span class="live-dot"></span><strong>${t.running?'PARTITA IN CORSO':e.status==='Terminata'?'PARTITA TERMINATA':'PRONTA PER INIZIARE'}</strong></div><div class="match-clock" id="matchClock">${formatClock(getElapsedSeconds(e))}</div><div class="form-grid"><button class="primary" onclick="${(e.lineup?.starters||[]).length===11?`startLiveMatch(${e.id})`:`alert('Prima completa e salva la formazione.')`}">▶ LIVE MATCH</button><button class="secondary" onclick="resetMatchTimer(${e.id})">↺ AZZERA</button></div></div>`}
function getElapsedSeconds(e){const t=e.timer||{};let s=Number(t.elapsedSeconds||0);if(t.running&&t.startedAt)s+=Math.floor((Date.now()-Number(t.startedAt))/1000);return Math.max(0,s)}
function formatClock(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function toggleMatchTimer(id){const e=state.events.find(x=>x.id===id);if(!e)return;e.timer=e.timer||{running:false,startedAt:null,elapsedSeconds:0};if(e.timer.running){e.timer.elapsedSeconds=getElapsedSeconds(e);e.timer.running=false;e.timer.startedAt=null}else{e.timer.running=true;e.timer.startedAt=Date.now();e.status='In corso'}save();openMatchCenter(id);startClockUpdater(id)}
function resetMatchTimer(id){const e=state.events.find(x=>x.id===id);if(!e||!confirm('Azzerare il cronometro?'))return;e.timer={running:false,startedAt:null,elapsedSeconds:0,finished:false};save();openMatchCenter(id)}
function startClockUpdater(id){clearInterval(matchTimerInterval);matchTimerInterval=setInterval(()=>{const e=state.events.find(x=>x.id===id),el=document.getElementById('matchClock');if(!e||!el){clearInterval(matchTimerInterval);return}el.textContent=formatClock(getElapsedSeconds(e));if(!e.timer?.running)clearInterval(matchTimerInterval)},1000)}
function finishMatch(id){const e=state.events.find(x=>x.id===id);if(!e||!confirm('Terminare la partita?'))return;if(e.timer?.running){e.timer.elapsedSeconds=getElapsedSeconds(e);e.timer.running=false;e.timer.startedAt=null}e.timer.finished=true;e.status='Terminata';save();openMatchCenter(id);renderDashboard();renderEvents()}



function startLiveMatch(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  ensureEventLineup(e);
  if((e.lineup?.starters||[]).length!==11){
    alert('Devi inserire 11 titolari prima di iniziare.');
    return;
  }

  e.live=e.live||{};
  e.live.active=true;
  e.live.running=Boolean(e.live.running);
  e.live.periodLength=Number(e.live.periodLength||40);
  e.live.phase=e.live.phase||'pre';
  e.live.periodElapsedSeconds=Number(e.live.periodElapsedSeconds||0);
  e.live.totalPlayingSeconds=Number(e.live.totalPlayingSeconds||0);
  e.live.periodStartedAt=e.live.periodStartedAt||null;
  e.live.playingStartedAt=e.live.playingStartedAt||null;
  e.live.secondHalfDisplay=e.live.secondHalfDisplay||'continuous';
  e.live.homeScore=Number(e.live.homeScore??e.homeScore??0);
  e.live.awayScore=Number(e.live.awayScore??e.awayScore??0);
  e.live.events=Array.isArray(e.live.events)?e.live.events:[];
  e.live.onField=Object.keys(e.live.onField||{}).length?e.live.onField:{...(e.lineup.slotAssignments||{})};
  e.live.bench=Array.isArray(e.live.bench)&&e.live.bench.length?e.live.bench:[...(e.lineup.reserves||[])];
  e.live.playerMinutes=e.live.playerMinutes&&typeof e.live.playerMinutes==='object'?e.live.playerMinutes:{};

  Object.values(e.live.onField).forEach(pid=>{
    if(!e.live.playerMinutes[pid]){
      e.live.playerMinutes[pid]={
        startedAtSeconds:getTotalPlayingSecondsV44(e),
        endedAtSeconds:null,
        minutes:0,
        starter:true
      };
    }
  });

  save();
  currentLiveEventId=id;
  closeModal();
  show('liveMatch');
  renderLiveMatch();
}
function openLiveMatch(id){
  currentLiveEventId=id;
  show('liveMatch');
  renderLiveMatch();
}
function exitLiveMatch(){
  clearInterval(liveTimerInterval);
  const id=currentLiveEventId;
  if(id){
    currentMatchDetailsId=id;
    show('matchDetails');
    renderMatchDetails();
  }else{
    show('calendar');
    renderEvents();
  }
}
function getLiveEvent(){
  return state.events.find(e=>String(e.id)===String(currentLiveEventId));
}
function getPeriodElapsedSecondsV44(e){
  const l=e.live||{};
  let seconds=Number(l.periodElapsedSeconds||0);
  if(l.running&&l.periodStartedAt)seconds+=Math.floor((Date.now()-Number(l.periodStartedAt))/1000);
  return Math.max(0,seconds);
}
function getTotalPlayingSecondsV44(e){
  const l=e.live||{};
  let seconds=Number(l.totalPlayingSeconds||0);
  if(l.running&&l.playingStartedAt)seconds+=Math.floor((Date.now()-Number(l.playingStartedAt))/1000);
  return Math.max(0,seconds);
}
function officialMinuteV44(e){
  const l=e.live||{};
  const period=Math.max(1,Number(l.periodLength||40));
  const elapsed=Math.floor(getPeriodElapsedSecondsV44(e)/60);

  if(l.phase==='first'){
    return elapsed>period?`${period}+${elapsed-period}`:String(elapsed);
  }
  if(l.phase==='halftime')return String(period);
  if(l.phase==='second'){
    return String(period+elapsed);
  }
  if(l.phase==='finished'){
    return String(period*2);
  }
  return '0';
}
function numericOfficialMinuteV44(e){
  const l=e.live||{};
  const period=Math.max(1,Number(l.periodLength||40));
  const elapsed=Math.floor(getPeriodElapsedSecondsV44(e)/60);
  if(l.phase==='second'||l.phase==='finished')return period+elapsed;
  return elapsed;
}
function liveClockTextV44(e){
  const l=e.live||{};
  const period=Math.max(1,Number(l.periodLength||40));
  const seconds=getPeriodElapsedSecondsV44(e);
  const minute=Math.floor(seconds/60);
  const second=seconds%60;

  if(l.phase==='halftime')return 'INTERVALLO';
  if(l.phase==='finished')return 'FINE';

  if(l.phase==='first'&&minute>period){
    return `${period}+${minute-period}:${String(second).padStart(2,'0')}`;
  }

  const displayMinute=l.phase==='second'&&l.secondHalfDisplay==='continuous'
    ?period+minute
    :minute;

  return `${String(displayMinute).padStart(2,'0')}:${String(second).padStart(2,'0')}`;
}
function livePhaseLabelV44(phase){
  return ({
    pre:'DA INIZIARE',
    first:'1° TEMPO',
    halftime:'INTERVALLO',
    second:'2° TEMPO',
    finished:'PARTITA TERMINATA'
  })[phase]||'LIVE MATCH';
}
function setPeriodLengthV44(value){
  const e=getLiveEvent();if(!e||e.live.phase!=='pre')return;
  e.live.periodLength=Math.max(1,Number(value)||40);
  save();renderLiveMatch();
}
function setSecondHalfDisplayV44(value){
  const e=getLiveEvent();if(!e)return;
  e.live.secondHalfDisplay=value;
  save();renderLiveMatch();
}
function beginFirstHalfV44(){
  const e=getLiveEvent();if(!e)return;
  e.live.phase='first';
  e.live.running=true;
  e.live.periodElapsedSeconds=0;
  e.live.periodStartedAt=Date.now();
  e.live.playingStartedAt=Date.now();
  e.status='In corso';
  save();renderLiveMatch();
}
function pauseResumeLiveV44(){
  const e=getLiveEvent();if(!e||!['first','second'].includes(e.live.phase))return;
  if(e.live.running){
    e.live.periodElapsedSeconds=getPeriodElapsedSecondsV44(e);
    e.live.totalPlayingSeconds=getTotalPlayingSecondsV44(e);
    e.live.running=false;
    e.live.periodStartedAt=null;
    e.live.playingStartedAt=null;
  }else{
    e.live.running=true;
    e.live.periodStartedAt=Date.now();
    e.live.playingStartedAt=Date.now();
  }
  save();renderLiveMatch();
}
function finishFirstHalfV44(){
  const e=getLiveEvent();if(!e||e.live.phase!=='first')return;
  e.live.periodElapsedSeconds=getPeriodElapsedSecondsV44(e);
  e.live.totalPlayingSeconds=getTotalPlayingSecondsV44(e);
  e.live.running=false;
  e.live.periodStartedAt=null;
  e.live.playingStartedAt=null;
  e.live.firstHalfActualSeconds=e.live.periodElapsedSeconds;
  e.live.phase='halftime';
  save();renderLiveMatch();
}
function beginSecondHalfV44(){
  const e=getLiveEvent();if(!e||e.live.phase!=='halftime')return;
  e.live.phase='second';
  e.live.secondHalfDisplay='continuous';
  e.live.running=true;
  e.live.periodElapsedSeconds=0;
  e.live.periodStartedAt=Date.now();
  e.live.playingStartedAt=Date.now();
  save();
  renderLiveMatch();
}
function toggleLiveTimer(){
  const e=getLiveEvent();if(!e)return;
  if(e.live.phase==='pre')beginFirstHalfV44();
  else if(e.live.phase==='halftime')beginSecondHalfV44();
  else pauseResumeLiveV44();
}
function editLiveMinute(){
  const e=getLiveEvent();if(!e)return;
  const current=Math.floor(getPeriodElapsedSecondsV44(e)/60);
  const value=prompt(
    e.live.phase==='second'
      ?'Minuto del secondo tempo da cui ripartire:'
      :'Minuto del primo tempo da cui ripartire:',
    String(current)
  );
  if(value===null)return;
  e.live.periodElapsedSeconds=Math.max(0,Number(value)||0)*60;
  if(e.live.running)e.live.periodStartedAt=Date.now();
  save();renderLiveMatch();
}
function renderLiveControlsV44(e){
  const controls=document.getElementById('liveControls');
  const settings=document.getElementById('livePeriodSettings');
  if(!controls||!settings)return;

  const l=e.live;
  const durationOptions=[20,25,30,35,40,45]
    .map(value=>`<option value="${value}" ${Number(l.periodLength)===value?'selected':''}>2 × ${value} minuti</option>`)
    .join('');

  if(l.phase==='pre'){
    settings.innerHTML=`<label>Durata partita</label><select onchange="setPeriodLengthV44(this.value)">${durationOptions}</select>`;
    controls.innerHTML=`
      <button class="primary compact-btn live-main-action" onclick="beginFirstHalfV44()">▶ INIZIA PRIMO TEMPO</button>
      <button class="secondary compact-btn" onclick="editLiveMinute()">✎ IMPOSTA MINUTO</button>`;
    return;
  }

  if(l.phase==='first'){
    settings.innerHTML=`<span class="muted small">Primo tempo · ${l.periodLength} minuti + recupero</span>`;
    controls.innerHTML=`
      <button class="secondary compact-btn" onclick="pauseResumeLiveV44()">${l.running?'⏸ PAUSA':'▶ RIPRENDI'}</button>
      <button class="secondary compact-btn" onclick="editLiveMinute()">✎ MODIFICA MINUTO</button>
      <button class="warning compact-btn live-main-action" onclick="finishFirstHalfV44()">⏹ FINE PRIMO TEMPO</button>`;
    return;
  }

  if(l.phase==='halftime'){
    settings.innerHTML=`<span class="muted small">Intervallo</span>`;
    controls.innerHTML=`<button class="primary compact-btn live-main-action" onclick="beginSecondHalfV44()">▶ INIZIA SECONDO TEMPO</button>`;
    return;
  }

  if(l.phase==='second'){
    settings.innerHTML=`<span class="muted small">Secondo tempo · minuto ufficiale continuo</span>`;
    controls.innerHTML=`
      <button class="secondary compact-btn" onclick="pauseResumeLiveV44()">${l.running?'⏸ PAUSA':'▶ RIPRENDI'}</button>
      <button class="secondary compact-btn" onclick="editLiveMinute()">✎ MODIFICA MINUTO</button>
      <button class="danger compact-btn live-main-action" onclick="finishLiveMatch()">■ FINE PARTITA</button>`;
    return;
  }

  settings.innerHTML='';
  controls.innerHTML=`<button class="secondary compact-btn" onclick="exitLiveMatch()">VEDI RIEPILOGO</button>`;
}
function renderLiveMatch(){
  const e=getLiveEvent();if(!e)return;
  const l=e.live;
  const team=state.profile?.team||state.society?.name||'Maccabi Roma';
  const teamAway=e.homeAway==='Trasferta';

  document.getElementById('liveMatchTitle').textContent=teamAway?`${e.opponent} vs ${team}`:`${team} vs ${e.opponent}`;
  document.getElementById('liveHomeName').textContent=teamAway?e.opponent:team;
  document.getElementById('liveAwayName').textContent=teamAway?team:e.opponent;
  document.getElementById('liveHomeScore').textContent=l.homeScore||0;
  document.getElementById('liveAwayScore').textContent=l.awayScore||0;
  document.getElementById('liveClock').textContent=liveClockTextV44(e);

  const phase=document.getElementById('livePhase');
  phase.textContent=livePhaseLabelV44(l.phase);
  phase.className=`live-phase-badge ${l.phase==='halftime'?'halftime':l.running?'playing':''}`;

  renderLiveControlsV44(e);
  renderLivePitch();
  renderLiveBench();
  renderLiveEvents();

  if(l.running)startLiveClock();
}
function renderLivePitch(){
  const e=getLiveEvent(),pitch=document.getElementById('livePitch');if(!e||!pitch)return;
  pitch.innerHTML='<div class="pitch-line half"></div><div class="pitch-line circle"></div><div class="pitch-line box-top"></div><div class="pitch-line box-bottom"></div><div class="pitch-line six-top"></div><div class="pitch-line six-bottom"></div>';

  const slots=FORMATION_PRESETS[e.lineup.formation]||FORMATION_PRESETS['4-3-3'];
  slots.forEach((s,i)=>{
    const pid=e.live.onField?.[i];
    const p=state.players.find(x=>String(x.id)===String(pid));
    if(!p)return;
    const mvp=String(e.live.mvpPlayerId)===String(p.id);
    const el=document.createElement('div');
    el.className='live-player';
    el.style.left=s[0]+'%';
    el.style.top=s[1]+'%';
    el.innerHTML=`<button class="live-player-btn ${mvp?'mvp-player':''}" onclick="openLivePlayerMenu(${p.id},${i})">${p.number}</button>
      <span class="live-player-name">${escapeHtml(p.name.split(' ').slice(-1)[0])}</span>
      ${mvp?'<span class="mvp-marker">⭐ MVP</span>':''}`;
    pitch.appendChild(el);
  });
}
function renderLiveBench(){
  const e=getLiveEvent(),host=document.getElementById('liveBench');if(!e||!host)return;
  host.innerHTML=(e.live.bench||[]).map(id=>{
    const p=state.players.find(x=>String(x.id)===String(id));
    if(!p)return '';
    const mvp=String(e.live.mvpPlayerId)===String(p.id);
    return `<div class="reserve-row">
      <span class="number-pill">${p.number}</span>
      <div><strong>${escapeHtml(p.name)} ${mvp?'⭐':''}</strong><small>${escapeHtml(p.role)}</small></div>
    </div>`;
  }).join('')||'<div class="empty-tactical">Panchina vuota.</div>';
}
function renderLiveEvents(){
  const e=getLiveEvent(),host=document.getElementById('liveEvents');if(!e||!host)return;
  host.innerHTML=[...(e.live.events||[])].reverse().map(ev=>`<div class="live-event-row">
    <div><strong>${escapeHtml(ev.label)}</strong><small>${escapeHtml(ev.detail||'')}</small></div>
    <span>${escapeHtml(String(ev.displayMinute??ev.minute))}'</span>
  </div>`).join('')||'<div class="empty-tactical">Nessun evento.</div>';
}
function startLiveClock(){
  clearInterval(liveTimerInterval);
  liveTimerInterval=setInterval(()=>{
    const e=getLiveEvent();
    const el=document.getElementById('liveClock');
    if(!e||!el){
      clearInterval(liveTimerInterval);
      return;
    }
    el.textContent=liveClockTextV44(e);
    if(!e.live.running)clearInterval(liveTimerInterval);
  },1000);
}
function openLivePlayerMenu(playerId,slotIndex){
  const p=state.players.find(x=>String(x.id)===String(playerId));if(!p)return;
  const e=getLiveEvent();
  const isMvp=String(e.live.mvpPlayerId)===String(playerId);

  sheet.innerHTML=`<div class="sheet-head">
    <div><p class="muted small">EVENTO GIOCATORE</p><h2>#${p.number} ${escapeHtml(p.name)}</h2></div>
    <button class="close" onclick="closeModal()">✕</button>
  </div>
  <div class="live-event-grid">
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'goal')">⚽ Gol</button>
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'yellow')">🟨 Ammonizione</button>
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'red')">🟥 Espulsione</button>
    ${(p.role||'').toLowerCase().includes('port')
      ?`<button class="live-event-btn goal-conceded-btn" onclick="addLivePlayerEvent(${playerId},'conceded')">🥅 Gol subito</button>`
      :`<button class="live-event-btn goal-conceded-btn" onclick="addLivePlayerEvent(${playerId},'ownGoal')">🔁 Autogol</button>`}
    <button class="live-event-btn" onclick="openSubstitutionPicker(${playerId},${slotIndex})">🔄 Sostituzione</button>
    <button class="live-event-btn mvp-live-button" onclick="toggleMvpV44(${playerId})">${isMvp?'★ Rimuovi MVP':'⭐ Migliore in campo'}</button>
    <button class="live-event-btn" onclick="closeModal()">✕ Annulla</button>
  </div>`;
  modal.classList.add('open');
}
function toggleMvpV44(playerId){
  const e=getLiveEvent();if(!e)return;
  e.live.mvpPlayerId=String(e.live.mvpPlayerId)===String(playerId)?null:playerId;
  save();closeModal();renderLiveMatch();
}
function addLivePlayerEvent(playerId,type){
  const e=getLiveEvent();
  const p=state.players.find(x=>String(x.id)===String(playerId));
  if(!e||!p)return;

  const minute=numericOfficialMinuteV44(e);
  const displayMinute=officialMinuteV44(e);
  const map={
    goal:['Gol','⚽'],
    yellow:['Ammonizione','🟨'],
    red:['Espulsione','🟥'],
    conceded:['Gol subito','🥅'],
    ownGoal:['Autogol','🔁']
  };
  const [label,icon]=map[type];
  const ev={
    id:Date.now(),
    type,
    playerId,
    minute,
    displayMinute,
    phase:e.live.phase,
    label:`${icon} ${label}`,
    detail:p.name
  };

  e.live.events.push(ev);
  const teamAway=e.homeAway==='Trasferta';

  if(type==='goal'){
    if(teamAway){
      e.live.awayScore=Number(e.live.awayScore||0)+1;
      e.awayScore=e.live.awayScore;
    }else{
      e.live.homeScore=Number(e.live.homeScore||0)+1;
      e.homeScore=e.live.homeScore;
    }
  }

  if(type==='conceded'||type==='ownGoal'){
    if(teamAway){
      e.live.homeScore=Number(e.live.homeScore||0)+1;
      e.homeScore=e.live.homeScore;
    }else{
      e.live.awayScore=Number(e.live.awayScore||0)+1;
      e.awayScore=e.live.awayScore;
    }
  }

  p.stats=p.stats||{};
  const key={
    goal:'goals',
    yellow:'yellowCards',
    red:'redCards',
    ownGoal:'ownGoals'
  }[type];
  if(key)p.stats[key]=Number(p.stats[key]||0)+1;

  save();
  closeModal();
  renderLiveMatch();
}
function openSubstitutionPicker(outPlayerId,slotIndex){
  const e=getLiveEvent();if(!e)return;
  const bench=(e.live.bench||[])
    .map(id=>state.players.find(p=>String(p.id)===String(id)))
    .filter(Boolean)
    .sort((a,b)=>roleOrderV44(a.role)-roleOrderV44(b.role)||Number(a.number)-Number(b.number));

  let group='';
  const rows=bench.map(p=>{
    const next=roleGroupV44(p.role);
    const heading=next!==group?`<div class="role-group-title">${next}</div>`:'';
    group=next;
    return `${heading}<button class="picker-row" onclick="makeLiveSubstitution(${outPlayerId},${p.id},${slotIndex})">
      <div><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div>
      <span>ENTRA</span>
    </button>`;
  }).join('');

  sheet.innerHTML=`<div class="sheet-head">
    <div><p class="muted small">SOSTITUZIONE</p><h2>Scegli chi entra</h2></div>
    <button class="close" onclick="closeModal()">✕</button>
  </div>
  <div class="player-picker">${rows||'<div class="empty-tactical">Nessun giocatore disponibile.</div>'}</div>`;
  modal.classList.add('open');
}
function makeLiveSubstitution(outId,inId,slotIndex){
  const e=getLiveEvent();if(!e)return;

  const actualSeconds=getTotalPlayingSecondsV44(e);
  const minute=numericOfficialMinuteV44(e);
  const displayMinute=officialMinuteV44(e);
  const outP=state.players.find(p=>String(p.id)===String(outId));
  const inP=state.players.find(p=>String(p.id)===String(inId));

  e.live.onField[slotIndex]=inId;
  e.live.bench=e.live.bench.filter(id=>String(id)!==String(inId));
  e.live.bench.push(outId);

  e.live.playerMinutes[outId]=e.live.playerMinutes[outId]||{
    startedAtSeconds:0,
    endedAtSeconds:null,
    minutes:0,
    starter:true
  };
  e.live.playerMinutes[outId].endedAtSeconds=actualSeconds;
  e.live.playerMinutes[outId].minutes=Math.max(
    0,
    Math.floor((actualSeconds-Number(e.live.playerMinutes[outId].startedAtSeconds||0))/60)
  );

  e.live.playerMinutes[inId]={
    startedAtSeconds:actualSeconds,
    endedAtSeconds:null,
    minutes:0,
    starter:false
  };

  e.live.events.push({
    id:Date.now(),
    type:'sub',
    minute,
    displayMinute,
    phase:e.live.phase,
    label:'🔄 Sostituzione',
    detail:`${outP?.name||''} → ${inP?.name||''}`,
    outId,
    inId,
    slotIndex
  });

  save();
  closeModal();
  renderLiveMatch();
}
function finishLiveMatch(){
  const e=getLiveEvent();
  if(!e||!confirm('Terminare la partita e salvare tutte le statistiche?'))return;

  if(e.live.running){
    e.live.periodElapsedSeconds=getPeriodElapsedSecondsV44(e);
    e.live.totalPlayingSeconds=getTotalPlayingSecondsV44(e);
    e.live.running=false;
    e.live.periodStartedAt=null;
    e.live.playingStartedAt=null;
  }

  const actualSeconds=getTotalPlayingSecondsV44(e);

  Object.values(e.live.onField||{}).forEach(pid=>{
    e.live.playerMinutes[pid]=e.live.playerMinutes[pid]||{
      startedAtSeconds:0,
      endedAtSeconds:null,
      minutes:0,
      starter:true
    };
    if(e.live.playerMinutes[pid].endedAtSeconds==null){
      e.live.playerMinutes[pid].endedAtSeconds=actualSeconds;
      e.live.playerMinutes[pid].minutes=Math.max(
        0,
        Math.floor((actualSeconds-Number(e.live.playerMinutes[pid].startedAtSeconds||0))/60)
      );
    }
  });

  if(!e.statsApplied){
    Object.entries(e.live.playerMinutes||{}).forEach(([pid,m])=>{
      const p=state.players.find(x=>String(x.id)===String(pid));
      if(!p)return;
      p.stats=p.stats||{};
      p.stats.appearances=Number(p.stats.appearances||0)+1;
      p.stats.minutes=Number(p.stats.minutes||0)+Number(m.minutes||0);
      if(m.starter)p.stats.starts=Number(p.stats.starts||0)+1;
      else p.stats.subAppearances=Number(p.stats.subAppearances||0)+1;
    });
    e.statsApplied=true;
  }

  e.homeScore=e.live.homeScore;
  e.awayScore=e.live.awayScore;
  e.status='Terminata';
  e.live.active=false;
  e.live.finished=true;
  e.live.phase='finished';

  save();
  clearInterval(liveTimerInterval);
  currentMatchDetailsId=e.id;
  show('matchDetails');
  renderMatchDetails();
  currentMatchTab='manual';
  renderMatchTab('manual');
  alert('Partita terminata. Inserisci e salva i voti.');
}
function undoLastLiveEvent(){
  const e=getLiveEvent();if(!e||!(e.live.events||[]).length)return;
  const ev=e.live.events.pop();
  const teamAway=e.homeAway==='Trasferta';

  if(ev.type==='goal'){
    if(teamAway){
      e.live.awayScore=Math.max(0,Number(e.live.awayScore||0)-1);
      e.awayScore=e.live.awayScore;
    }else{
      e.live.homeScore=Math.max(0,Number(e.live.homeScore||0)-1);
      e.homeScore=e.live.homeScore;
    }
  }

  if(ev.type==='conceded'||ev.type==='ownGoal'){
    if(teamAway){
      e.live.homeScore=Math.max(0,Number(e.live.homeScore||0)-1);
      e.homeScore=e.live.homeScore;
    }else{
      e.live.awayScore=Math.max(0,Number(e.live.awayScore||0)-1);
      e.awayScore=e.live.awayScore;
    }
  }

  if(['goal','yellow','red','ownGoal'].includes(ev.type)){
    const p=state.players.find(x=>String(x.id)===String(ev.playerId));
    if(p){
      p.stats=p.stats||{};
      const key={
        goal:'goals',
        yellow:'yellowCards',
        red:'redCards',
        ownGoal:'ownGoals'
      }[ev.type];
      p.stats[key]=Math.max(0,Number(p.stats[key]||0)-1);
    }
  }

  if(ev.type==='sub'){
    e.live.onField[ev.slotIndex]=ev.outId;
    e.live.bench=e.live.bench.filter(id=>String(id)!==String(ev.outId));
    e.live.bench.push(ev.inId);
    delete e.live.playerMinutes[ev.inId];
    if(e.live.playerMinutes[ev.outId]){
      e.live.playerMinutes[ev.outId].endedAtSeconds=null;
      e.live.playerMinutes[ev.outId].minutes=0;
    }
  }

  save();
  renderLiveMatch();
}

function openMatchDetails(id){
  currentMatchDetailsId=id;
  currentMatchTab='callups';
  const e=state.events.find(x=>String(x.id)===String(id));if(!e)return;
  show('matchDetails');
  renderMatchDetails();
  requestAnimationFrame(()=>{
    window.scrollTo({top:0,left:0,behavior:'instant'});
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
  });
}
function getCurrentMatchDetails(){
  return state.events.find(x=>String(x.id)===String(currentMatchDetailsId));
}
function setMatchLogoV432(elementId,isClub,name){
  const el=document.getElementById(elementId);if(!el)return;
  const logo=isClub?getClubLogo():'';
  el.innerHTML=logo?`<img src="${logo}" alt="Logo ${escapeHtml(name)}" style="width:100%;height:100%;object-fit:contain">`:initials(name);
}
function renderMatchDetails(){
  const e=getCurrentMatchDetails();if(!e)return;
  ensureEventLineup(e);
  const team=state.society?.name||state.profile?.team||'Maccabi Roma';
  const away=e.homeAway==='Trasferta';
  const homeName=away?e.opponent:team;
  const awayName=away?team:e.opponent;
  const txt=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v};
  txt('matchCompetition',e.competition||e.type||'Campionato');
  txt('matchCompetitionLabel',(e.competition||e.type||'Campionato').toUpperCase());
  txt('matchHomeTeam',homeName);
  txt('matchAwayTeam',awayName);
  txt('matchMainScore',`${Number(e.homeScore||0)} - ${Number(e.awayScore||0)}`);
  txt('matchDate',e.date?formatDate(e.date):'Data non inserita');
  txt('matchTime',e.time||'Orario non inserito');
  txt('matchVenue',e.venue||e.field||'Campo non inserito');
  setMatchLogoV432('matchHomeLogo',!away,homeName);
  setMatchLogoV432('matchAwayLogo',away,awayName);
  renderDirectMatchSummaryV432(e);
  renderMatchTab(currentMatchTab);
}
function categorizedMatchEventsV432(e){
  const groups={goals:[],yellow:[],red:[],subs:[]};
  allMatchEvents(e).forEach(ev=>{
    const type=String(ev.type||'').toLowerCase();
    const minute=ev.minute!==''&&ev.minute!==undefined?`${ev.minute}'`:'';
    if(type==='goal'||type==='gol'||type==='rigore segnato'){
      groups.goals.push({name:playerNameById(ev.playerId),minute});
    }else if(type==='yellow'||type==='ammonizione'){
      groups.yellow.push({name:playerNameById(ev.playerId),minute});
    }else if(type==='red'||type==='espulsione'){
      groups.red.push({name:playerNameById(ev.playerId),minute});
    }else if(type==='sub'||type==='sostituzione'){
      groups.subs.push({
        name:ev.detail||`${playerNameById(ev.outId)} → ${playerNameById(ev.inId)}`,
        minute
      });
    }
  });
  return groups;
}
function directGroupV432(icon,title,items){
  const rows=items.length
    ?items.map(x=>`<div class="direct-summary-item"><span>${escapeHtml(x.name)}</span><span>${escapeHtml(x.minute)}</span></div>`).join('')
    :'<div class="direct-summary-item"><span class="muted">Nessun evento</span><span></span></div>';
  return `<div class="direct-summary-group"><div class="direct-summary-icon">${icon}</div><div><h3>${title}</h3>${rows}</div></div>`;
}
function renderDirectMatchSummaryV432(e){
  const host=document.getElementById('matchDirectSummary');if(!host)return;
  const g=categorizedMatchEventsV432(e);
  host.innerHTML=`<div class="direct-summary-grid">
    ${directGroupV432('⚽','Marcatori',g.goals)}
    ${directGroupV432('🟨','Ammonizioni',g.yellow)}
    ${directGroupV432('🟥','Espulsioni',g.red)}
    ${directGroupV432('🔄','Sostituzioni',g.subs)}
  </div>`;
}
function renderMatchTab(tab){
  currentMatchTab=tab;
  ['callups','lineup','live','manual'].forEach(name=>{
    document.getElementById('tab'+name.charAt(0).toUpperCase()+name.slice(1))?.classList.toggle('active',name===tab);
  });
  const e=getCurrentMatchDetails(),host=document.getElementById('matchTabContent');if(!e||!host)return;
  if(tab==='callups')renderCallupsTabV432(e,host);
  if(tab==='lineup')renderLineupTabV432(e,host);
  if(tab==='live')renderLiveTabV432(e,host);
  if(tab==='manual')renderManualStatsTabV432(e,host);
}
function renderCallupsTabV432(e,host){
  const selected=new Set((e.callups||[]).map(String));
  const players=state.players.filter(p=>p.role!=='Allenatore').sort((a,b)=>Number(a.number)-Number(b.number));
  host.innerHTML=`<div class="section-head"><div><h2>Convocati</h2><p class="muted small">Spunta soltanto i giocatori presenti.</p></div></div>
  <div>${players.map(p=>`<div class="callup-row-simple"><label>
    <input class="detailsCallupCheck" type="checkbox" value="${p.id}" ${selected.has(String(p.id))?'checked':''}>
    <span class="number-pill">${p.number}</span>
    <span><strong>${escapeHtml(p.name)}</strong><br><span class="muted small">${escapeHtml(p.role)}</span></span>
  </label></div>`).join('')}</div>
  <button class="primary" onclick="saveDetailsCallupsV432()">SALVA CONVOCATI</button>`;
}
function saveDetailsCallupsV432(){
  const e=getCurrentMatchDetails();if(!e)return;
  e.callups=[...document.querySelectorAll('.detailsCallupCheck:checked')].map(x=>Number(x.value));
  save();renderMatchDetails();alert('Convocati salvati.');
}
function lineupSubstitutionsV432(e){
  return allMatchEvents(e).filter(ev=>['sub','sostituzione'].includes(String(ev.type||'').toLowerCase()));
}
function renderLineupTabV432(e,host){
  ensureEventLineup(e);
  const assignments=e.lineup?.slotAssignments||{};
  const preset=FORMATION_PRESETS[e.lineup?.formation||'4-3-3']||FORMATION_PRESETS['4-3-3'];

  const starters=Object.values(assignments)
    .map(id=>state.players.find(x=>String(x.id)===String(id)))
    .filter(Boolean);

  const starterIds=new Set(starters.map(p=>String(p.id)));
  const bench=(e.callups||[])
    .map(id=>state.players.find(x=>String(x.id)===String(id)))
    .filter(Boolean)
    .filter(p=>!starterIds.has(String(p.id)))
    .sort((a,b)=>Number(a.number)-Number(b.number));

  const playersHtml=preset.map((s,i)=>{
    const id=assignments[i];
    const p=state.players.find(x=>String(x.id)===String(id));if(!p)return '';
    return `<div class="lineup-preview-player" style="left:${s[0]}%;top:${s[1]}%">
      <div class="lineup-preview-number">${p.number}</div>
      <span class="lineup-preview-name">${escapeHtml(p.name.split(' ').slice(-1)[0])}</span>
    </div>`;
  }).join('');

  const subs=lineupSubstitutionsV432(e);

  host.innerHTML=`<div class="section-head">
    <div>
      <h2>Formazione</h2>
      <p class="muted small">Modulo utilizzato e giocatori convocati.</p>
    </div>
  </div>

  <div class="formation-selector-inline">
    <div class="field"><label>MODULO</label><select onchange="changeFormationFromMatchV433(this.value)">
      ${Object.keys(FORMATION_PRESETS).map(name=>`<option ${name===(e.lineup?.formation||'4-3-3')?'selected':''}>${name}</option>`).join('')}
    </select></div>
    <button class="secondary" onclick="openCurrentMatchLineup()">MODIFICA TITOLARI</button>
  </div>

  <div class="lineup-preview-wrap">
    <div class="lineup-mini-pitch">${playersHtml}</div>
    <div>
      <h3 class="lineup-section-title">Panchina</h3>
      <div class="lineup-bench-grid">
        ${bench.map(p=>`<div class="lineup-bench-player">
          <span class="number-pill">${p.number}</span>
          <div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div>
        </div>`).join('')||'<p class="muted small">Nessun giocatore in panchina.</p>'}
      </div>

      <h3 class="lineup-section-title">Sostituzioni effettuate</h3>
      <div class="substitution-list">
        ${subs.map(ev=>`<div class="substitution-row">
          <strong>${escapeHtml(ev.detail||`${playerNameById(ev.outId)} → ${playerNameById(ev.inId)}`)}</strong>
          <small>${ev.minute!==''?ev.minute+"'":''}</small>
        </div>`).join('')||'<p class="muted small">Nessuna sostituzione registrata.</p>'}
      </div>
    </div>
  </div>`;
}

function changeFormationFromMatchV433(name){
  const e=getCurrentMatchDetails();if(!e)return;
  ensureEventLineup(e);
  e.lineup.formation=name;
  save();
  renderMatchTab('lineup');
}

function renderLiveTabV432(e,host){
  const callups=(e.callups||[]).length;
  const starters=(e.lineup?.starters||[]).length;
  host.innerHTML=`<div class="section-head"><div><h2>Live Match</h2><p class="muted small">Gestisci cronometro ed eventi direttamente dal campo.</p></div></div>
  <div class="summary-counts">
    <div class="summary-count"><strong>${callups}</strong><small>Convocati</small></div>
    <div class="summary-count"><strong>${starters}/11</strong><small>Titolari</small></div>
  </div>
  <button class="primary" style="margin-top:12px" onclick="openCurrentMatchLive()">▶ APRI LIVE MATCH</button>`;
}
function renderManualStatsTabV432(e,host){
  const players=state.players.filter(p=>p.role!=='Allenatore').sort((a,b)=>Number(a.number)-Number(b.number));
  const events=allMatchEvents(e);
  host.innerHTML=`<div class="section-head"><div><h2>Statistiche manuali</h2><p class="muted small">Aggiungi o correggi gli eventi senza utilizzare il Live Match.</p></div></div>
  <div class="match-manual-grid">
    <div class="field"><label>TIPO</label><select id="manualType">
      <option>Gol</option><option>Ammonizione</option><option>Espulsione</option><option>Autogol</option><option>Rigore segnato</option><option>Rigore sbagliato</option><option>Rigore parato</option>
    </select></div>
    <div class="field"><label>GIOCATORE</label><select id="manualPlayer">${players.map(p=>`<option value="${p.id}">#${p.number} ${escapeHtml(p.name)}</option>`).join('')}</select></div>
    <div class="field"><label>MINUTO</label><input id="manualMinute" placeholder="Es. 23"></div>
    <div class="field"><label>NOTA</label><input id="manualNote" placeholder="Facoltativa"></div>
  </div>
  <button class="secondary" onclick="addManualEventV432()">＋ AGGIUNGI EVENTO</button>
  <div class="match-manual-events">${events.map((ev,i)=>`<div class="match-manual-event">
    <div class="summary-event-icon">${eventIconV43(ev.type)}</div>
    <div><strong>${escapeHtml(eventLabelV43(ev))}</strong><small>${escapeHtml(ev.detail||playerNameById(ev.playerId))}${ev.minute!==''?` · ${ev.minute}'`:''}</small></div>
    <button class="mini-danger" onclick="removeManualEventV432(${i})">✕</button>
  </div>`).join('')||'<p class="muted small">Nessun evento registrato.</p>'}</div>
  <div class="match-section-card">
    <h3>Risultato e dati</h3>
    <div class="match-manual-grid">
      <div class="field"><label>GOL CASA</label><input id="detailsHomeScore" type="number" min="0" value="${e.homeScore||0}"></div>
      <div class="field"><label>GOL TRASFERTA</label><input id="detailsAwayScore" type="number" min="0" value="${e.awayScore||0}"></div>
      <div class="field"><label>STATO</label><select id="detailsStatus">${['Da giocare','In corso','Terminata','Rinviata'].map(x=>`<option ${e.status===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>CAMPO</label><input id="detailsVenue" value="${escapeHtml(e.venue||'')}"></div>
    </div>
    <button class="primary" onclick="saveManualMatchDataV432()">SALVA MODIFICHE PARTITA</button>
    <button class="secondary" style="margin-top:8px" onclick="resetCurrentMatchV441(currentMatchDetailsId)">↺ AZZERA PARTITA</button>
    <button class="danger-full" onclick="deleteCurrentMatchV442()">ELIMINA EVENTO</button>
  </div>
  <div class="rating-panel-v433">
    <div class="section-head"><div><h2>Voti giocatori</h2><p class="muted small">Solo titolari e giocatori entrati in campo.</p></div></div>
    ${renderRatingsPanelV433(e)}
    ${renderMvpSelectorV443(e)}
  </div>`;
}

function renderRatingsPanelV433(e){
  const participants=getMatchParticipants(e);
  if(!participants.length)return '<p class="muted small">Non risultano ancora giocatori utilizzati.</p>';
  return `<div class="rating-list">${participants.map(id=>{
    const p=state.players.find(x=>String(x.id)===String(id));if(!p)return '';
    const vote=e.ratings?.[id]??e.ratings?.[String(id)]??'';
    return `<div class="rating-row">
      <div><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${playerMinutesForMatch(e,id)} minuti giocati</small></div>
      <input class="details-rating-input" data-player="${id}" type="number" min="0" max="10" step="0.5" value="${vote}" placeholder="Voto">
    </div>`;
  }).join('')}</div>
  <button class="primary" onclick="saveDetailsRatingsV433()">SALVA VOTI</button>`;
}

function renderMvpSelectorV443(e){
  const participants=getMatchParticipants(e)
    .map(id=>state.players.find(p=>String(p.id)===String(id)))
    .filter(Boolean)
    .sort((a,b)=>roleOrderV44(a.role)-roleOrderV44(b.role)||Number(a.number)-Number(b.number));

  if(!participants.length){
    return '<div class="mvp-select-wrap"><p class="muted small">Nessun giocatore disponibile per l’MVP.</p></div>';
  }

  const current=e.live?.mvpPlayerId||e.mvpPlayerId||'';

  return `<div class="mvp-select-wrap">
    <div class="section-head"><div><h2>Migliore in campo</h2><p class="muted small">Seleziona l’MVP della partita.</p></div></div>
    <select id="matchMvpSelect">
      <option value="">Nessun MVP selezionato</option>
      ${participants.map(p=>`<option value="${p.id}" ${String(current)===String(p.id)?'selected':''}>#${p.number} ${escapeHtml(p.name)}</option>`).join('')}
    </select>
    <button class="primary" style="margin-top:10px" onclick="saveMatchMvpV443()">SALVA MVP</button>
  </div>`;
}
function saveMatchMvpV443(){
  const e=getCurrentMatchDetails();if(!e)return;
  const value=document.getElementById('matchMvpSelect')?.value||'';

  e.live=e.live||{};
  e.live.mvpPlayerId=value?Number(value):null;
  e.mvpPlayerId=value?Number(value):null;

  save();
  alert('Migliore in campo salvato.');
  renderMatchTab('manual');
}

function saveDetailsRatingsV433(){
  const e=getCurrentMatchDetails();if(!e)return;
  e.ratings=e.ratings||{};
  document.querySelectorAll('.details-rating-input').forEach(input=>{
    const value=input.value.trim();
    if(value==='')delete e.ratings[input.dataset.player];
    else e.ratings[input.dataset.player]=Math.max(0,Math.min(10,Number(value)));
  });
  save();
  alert('Voti salvati.');
  renderMatchTab('manual');
}

function addManualEventV432(){
  const e=getCurrentMatchDetails();if(!e)return;
  e.matchEvents=e.matchEvents||[];
  e.matchEvents.push({
    type:document.getElementById('manualType').value,
    playerId:Number(document.getElementById('manualPlayer').value),
    minute:document.getElementById('manualMinute').value.trim(),
    note:document.getElementById('manualNote').value.trim()
  });
  save();renderMatchDetails();currentMatchTab='manual';renderMatchTab('manual');
}
function removeManualEventV432(index){
  const e=getCurrentMatchDetails();if(!e)return;
  const source=e.live?.events?.length?e.live.events:e.matchEvents;
  source.splice(index,1);
  save();renderMatchDetails();currentMatchTab='manual';renderMatchTab('manual');
}

function deleteCurrentMatchV442(){
  const e=getCurrentMatchDetails();if(!e)return;
  if(!confirm(`Eliminare definitivamente la partita contro ${e.opponent||'l’avversario'}?`))return;
  state.events=state.events.filter(x=>String(x.id)!==String(e.id));
  save();
  currentMatchDetailsId=null;
  show('calendar');
  renderEvents();
  renderNextMatch();
  renderDashboard();
}

function saveManualMatchDataV432(){
  const e=getCurrentMatchDetails();if(!e)return;
  e.homeScore=document.getElementById('detailsHomeScore').value;
  e.awayScore=document.getElementById('detailsAwayScore').value;
  e.status=document.getElementById('detailsStatus').value;
  e.venue=document.getElementById('detailsVenue').value.trim();
  save();renderEvents();renderDashboard();renderMatchDetails();alert('Dati partita salvati.');
}
function openCurrentMatchCallups(){renderMatchTab('callups')}
function openCurrentMatchLineup(){
  const e=getCurrentMatchDetails();if(!e)return;
  currentTacticalEventId=e.id;
  ensureEventLineup(e);
  show('tactical');renderTacticalBoard();
}
function openCurrentMatchLive(){
  const e=getCurrentMatchDetails();if(!e)return;
  if((e.callups||[]).length===0){alert('Prima seleziona i convocati.');return}
  if((e.lineup?.starters||[]).length!==11){alert('Prima completa la formazione con 11 titolari.');return}
  startLiveMatch(e.id);
}
function openCurrentMatchManualStats(){renderMatchTab('manual')}

function getClubLogo(){
  return state.branding?.logo||state.society?.logo||'';
}
function clubLogoHtml(teamName){
  const logo=getClubLogo();
  if(logo)return `<div class="match-logo-round"><img src="${logo}" alt="Logo ${escapeHtml(teamName)}"></div>`;
  return `<div class="match-logo-round">${initials(teamName)}</div>`;
}
function getMatchParticipants(e){
  const ids=new Set();
  (e.lineup?.starters||[]).forEach(id=>ids.add(Number(id)));
  Object.keys(e.live?.playerMinutes||{}).forEach(id=>ids.add(Number(id)));
  (e.matchEvents||[]).forEach(ev=>{if(ev.playerId)ids.add(Number(ev.playerId));if(ev.inId)ids.add(Number(ev.inId));if(ev.outId)ids.add(Number(ev.outId))});
  (e.live?.events||[]).forEach(ev=>{if(ev.playerId)ids.add(Number(ev.playerId));if(ev.inId)ids.add(Number(ev.inId));if(ev.outId)ids.add(Number(ev.outId))});
  return [...ids].filter(Boolean);
}
function allMatchEvents(e){
  const source=(e.live?.events?.length?e.live.events:e.matchEvents)||[];
  return source.map(ev=>({
    type:ev.type||'',
    playerId:ev.playerId,
    minute:ev.minute??'',
    note:ev.note||'',
    detail:ev.detail||'',
    label:ev.label||'',
    inId:ev.inId,
    outId:ev.outId
  }));
}
function eventLabelV43(ev){
  const labels={
    goal:'Gol',Gol:'Gol',
    yellow:'Ammonizione',Ammonizione:'Ammonizione',
    red:'Espulsione',Espulsione:'Espulsione',
    ownGoal:'Autogol',Autogol:'Autogol',
    sub:'Sostituzione',Sostituzione:'Sostituzione',
    'Rigore segnato':'Rigore segnato','Rigore sbagliato':'Rigore sbagliato','Rigore parato':'Rigore parato',
    conceded:'Gol subito'
  };
  return labels[ev.type]||ev.label||ev.type||'Evento';
}
function eventIconV43(type){
  return ({goal:'⚽',Gol:'⚽',yellow:'🟨',Ammonizione:'🟨',red:'🟥',Espulsione:'🟥',ownGoal:'🔁',Autogol:'🔁',sub:'🔄',Sostituzione:'🔄','Rigore segnato':'🥅','Rigore sbagliato':'❌','Rigore parato':'🧤'})[type]||'•'
}
function playerNameById(id){
  return state.players.find(p=>String(p.id)===String(id))?.name||'Giocatore';
}
function playerMinutesForMatch(e,id){
  const m=e.live?.playerMinutes?.[id]||e.live?.playerMinutes?.[String(id)];
  return Number(m?.minutes||0);
}
function buildMatchSummaryHtml(e){
  const events=allMatchEvents(e);
  const participants=getMatchParticipants(e);
  const goals=events.filter(ev=>['goal','Gol','Rigore segnato'].includes(ev.type));
  const yellows=events.filter(ev=>['yellow','Ammonizione'].includes(ev.type));
  const reds=events.filter(ev=>['red','Espulsione'].includes(ev.type));
  const subs=events.filter(ev=>['sub','Sostituzione'].includes(ev.type));
  const eventRows=events.map(ev=>{
    let detail=ev.detail||playerNameById(ev.playerId);
    if(['sub','Sostituzione'].includes(ev.type))detail=ev.detail||`${playerNameById(ev.outId)} → ${playerNameById(ev.inId)}`;
    return `<div class="summary-event">
      <div class="summary-event-icon">${eventIconV43(ev.type)}</div>
      <div><strong>${escapeHtml(eventLabelV43(ev))}</strong><small>${escapeHtml(detail)}${ev.note?` · ${escapeHtml(ev.note)}`:''}</small></div>
      <time>${ev.minute!==''?escapeHtml(ev.minute)+"'":''}</time>
    </div>`;
  }).join('');
  const ratingRows=participants.map(id=>{
    const p=state.players.find(x=>String(x.id)===String(id));if(!p)return '';
    const vote=e.ratings?.[id]??e.ratings?.[String(id)]??'';
    return `<div class="rating-row">
      <div><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${playerMinutesForMatch(e,id)} minuti</small></div>
      <input class="match-rating-input" data-player="${id}" type="number" min="0" max="10" step="0.5" value="${vote}" placeholder="Voto">
    </div>`;
  }).join('');
  return `
    <div class="match-section-card">
      <h3>Riepilogo partita</h3>
      <div class="summary-counts">
        <div class="summary-count"><strong>${(e.callups||[]).length}</strong><small>Convocati</small></div>
        <div class="summary-count"><strong>${participants.length}</strong><small>Giocatori utilizzati</small></div>
        <div class="summary-count"><strong>${goals.length}</strong><small>Gol registrati</small></div>
        <div class="summary-count"><strong>${yellows.length}</strong><small>Ammonizioni</small></div>
        <div class="summary-count"><strong>${reds.length}</strong><small>Espulsioni</small></div>
      </div>
    </div>
    <div class="match-section-card">
      <h3>Eventi</h3>
      <div class="summary-list">${eventRows||'<p class="muted small">Nessun evento registrato.</p>'}</div>
    </div>
    <div class="match-section-card">
      <h3>Voti giocatori</h3>
      <div class="rating-list">${ratingRows||'<p class="muted small">Nessun giocatore utilizzato.</p>'}</div>
      <button class="primary" style="margin-top:12px" onclick="saveMatchRatings(${e.id})">SALVA VOTI</button>
    </div>`;
}
function saveMatchRatings(id){
  const e=state.events.find(x=>String(x.id)===String(id));if(!e)return;
  e.ratings=e.ratings||{};
  document.querySelectorAll('.match-rating-input').forEach(input=>{
    const v=input.value.trim();
    if(v==='')delete e.ratings[input.dataset.player];
    else e.ratings[input.dataset.player]=Math.max(0,Math.min(10,Number(v)));
  });
  save();alert('Voti salvati.');
}
function ratingAverageForPlayer(playerId){
  const votes=state.events
    .filter(e=>e.status==='Terminata'&&e.ratings&&(e.ratings[playerId]!==undefined||e.ratings[String(playerId)]!==undefined))
    .map(e=>Number(e.ratings[playerId]??e.ratings[String(playerId)]))
    .filter(Number.isFinite);
  return votes.length?votes.reduce((a,b)=>a+b,0)/votes.length:0;
}


let currentStatsTabV43='appearances';
function aggregatedPlayerStatsV43(){
  const map={};
  state.players.filter(p=>p.role!=='Allenatore').forEach(p=>map[p.id]={
    player:p,appearances:0,minutes:0,goals:0,yellow:0,red:0,ownGoals:0,
    goalsConceded:0,penaltiesSaved:0,rating:ratingAverageForPlayer(p.id),mvp:0
  });
  state.events.filter(e=>e.status==='Terminata').forEach(e=>{
    const participants=getMatchParticipants(e);
    participants.forEach(id=>{if(map[id]){map[id].appearances++;map[id].minutes+=playerMinutesForMatch(e,id)}});
    allMatchEvents(e).forEach(ev=>{
      const s=map[Number(ev.playerId)];if(!s)return;
      if(['goal','Gol','Rigore segnato'].includes(ev.type))s.goals++;
      if(['yellow','Ammonizione'].includes(ev.type))s.yellow++;
      if(['red','Espulsione'].includes(ev.type))s.red++;
      if(['ownGoal','Autogol'].includes(ev.type))s.ownGoals++;
      if(ev.type==='Rigore parato')s.penaltiesSaved++;
    });
    const concededEvents=allMatchEvents(e).filter(ev=>String(ev.type||'').toLowerCase()==='conceded');
    concededEvents.forEach(ev=>{
      const keeperId=Number(ev.playerId);
      if(map[keeperId])map[keeperId].goalsConceded++;
    });

    const ownGoalEvents=allMatchEvents(e).filter(ev=>{
      const type=String(ev.type||'').toLowerCase();
      return type==='owngoal'||type==='autogol';
    });

    const opponentGoals=Number((e.homeAway==='Trasferta'?e.homeScore:e.awayScore)||0);
    const assignedGoals=concededEvents.length+ownGoalEvents.length;
    const remaining=Math.max(0,opponentGoals-assignedGoals);

    if(remaining>0){
      const keepers=participants.filter(id=>(map[id]?.player.role||'').toLowerCase().includes('port'));
      if(keepers.length===1)map[keepers[0]].goalsConceded+=remaining;
    }

    const mvpId=Number(e.live?.mvpPlayerId||e.mvpPlayerId||0);
    if(mvpId&&map[mvpId])map[mvpId].mvp++;
  });
  return Object.values(map);
}
function renderStatisticsV43(tab=currentStatsTabV43){
  currentStatsTabV43=tab;
  const host=document.getElementById('dashboardV07')||document.getElementById('statisticsContent')||document.querySelector('#statistics .content');
  if(!host)return;
  const labels={appearances:'Presenze',minutes:'Minuti',goals:'Marcatori',yellow:'Ammonizioni',red:'Espulsioni',ownGoals:'Autogol',rating:'Media voto',mvp:'MVP',goalkeepers:'Portieri'};
  const data=aggregatedPlayerStatsV43();
  let rows=data;
  if(tab==='goalkeepers')rows=data.filter(x=>(x.player.role||'').toLowerCase().includes('port')).sort((a,b)=>b.penaltiesSaved-a.penaltiesSaved||a.goalsConceded-b.goalsConceded);
  else rows=[...data].sort((a,b)=>(b[tab]||0)-(a[tab]||0));
  host.innerHTML=`<div class="section-head"><div><h2>Statistiche giocatori</h2><p class="muted small">Calcolate dalle partite terminate</p></div></div>
    <div class="stats-tabs-v43">
      <button onclick="renderTeamStatisticsV434()">Squadra</button>
      <button class="active">Giocatori</button>
    </div>
    <div class="stats-tabs-v43">${Object.entries(labels).map(([k,v])=>`<button class="${tab===k?'active':''}" onclick="renderStatisticsV43('${k}')">${v}</button>`).join('')}</div>
    <div class="stats-ranking">${rows.map((x,i)=>{
      let value=x[tab]||0,detail=x.player.role;
      if(tab==='rating')value=x.rating?x.rating.toFixed(2):'—';
      if(tab==='minutes')value=`${x.minutes}'`;
      if(tab==='mvp')value=`⭐ ${x.mvp}`;
      if(tab==='goalkeepers'){value=`${x.goalsConceded} GS`;detail=`${x.penaltiesSaved} rigori parati`}
      return `<div class="stats-row"><div class="stats-rank">${i+1}</div><div><strong>#${x.player.number} ${escapeHtml(x.player.name)}</strong><small>${escapeHtml(detail)}</small></div><div class="stats-value">${value}</div></div>`;
    }).join('')||'<div class="card empty">Nessun dato disponibile.</div>'}</div>`;
}


function teamStatisticsV434(){
  const team=state.profile?.team||state.society?.name||'Maccabi Roma';
  const finished=state.events.filter(e=>e.status==='Terminata');
  const result={
    played:finished.length,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,
    scored:[0,0,0,0],conceded:[0,0,0,0]
  };
  const segmentIndex=minute=>{
    const m=Math.max(0,Number(minute)||0);
    if(m<=20)return 0;
    if(m<=40)return 1;
    if(m<=60)return 2;
    return 3;
  };
  finished.forEach(e=>{
    const away=e.homeAway==='Trasferta';
    const gf=Number(away?e.awayScore:e.homeScore)||0;
    const ga=Number(away?e.homeScore:e.awayScore)||0;
    result.goalsFor+=gf;result.goalsAgainst+=ga;
    if(gf>ga)result.wins++;
    else if(gf<ga)result.losses++;
    else result.draws++;
    allMatchEvents(e).forEach(ev=>{
      const type=String(ev.type||'').toLowerCase();
      const idx=segmentIndex(ev.minute);
      if(type==='goal'||type==='gol'||type==='rigore segnato')result.scored[idx]++;
      if(type==='conceded'||type==='owngoal'||type==='autogol')result.conceded[idx]++;
    });
  });
  return result;
}
function renderTeamStatisticsV434(){
  const s=teamStatisticsV434();
  const host=document.getElementById('dashboardV07')||document.getElementById('statisticsContent')||document.querySelector('#statistics .content');
  if(!host)return;
  const labels=['0–20','21–40','41–60','61–80+'];
  host.innerHTML=`<div class="section-head"><div><h2>Statistiche squadra</h2><p class="muted small">Riepilogo delle partite terminate</p></div></div>
    <div class="summary-counts">
      <div class="summary-count"><strong>${s.played}</strong><small>Partite</small></div>
      <div class="summary-count"><strong>${s.wins}</strong><small>Vittorie</small></div>
      <div class="summary-count"><strong>${s.draws}</strong><small>Pareggi</small></div>
      <div class="summary-count"><strong>${s.losses}</strong><small>Sconfitte</small></div>
      <div class="summary-count"><strong>${s.goalsFor}</strong><small>Gol fatti</small></div>
      <div class="summary-count"><strong>${s.goalsAgainst}</strong><small>Gol subiti</small></div>
    </div>
    <div class="match-section-card">
      <h3>Gol per momento della partita</h3>
      <div class="stats-ranking">${labels.map((label,i)=>`<div class="stats-row">
        <div class="stats-rank">${i+1}</div>
        <div><strong>${label} minuti</strong><small>Segmento di gara</small></div>
        <div class="stats-value">${s.scored[i]} GF · ${s.conceded[i]} GS</div>
      </div>`).join('')}</div>
    </div>
    <div class="match-section-card">
      <div class="stats-tabs-v43">
        <button class="active" onclick="renderTeamStatisticsV434()">Squadra</button>
        <button onclick="renderStatisticsV43('appearances')">Giocatori</button>
      </div>
    </div>`;
}


function exportBackup(){
  try{
    const payload={
      app:'Hank Manager',
      version:'4.0-modern-foundation',
      exportedAt:new Date().toISOString(),
      state
    };
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download='hank-manager-backup-'+new Date().toISOString().slice(0,10)+'.json';
    document.body.appendChild(a);a.click();a.remove();
    URL.revokeObjectURL(url);
  }catch(err){
    alert('Non è stato possibile creare il backup.');
  }
}
function importBackupFile(event){
  const file=event.target.files?.[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const parsed=JSON.parse(reader.result);
      const imported=parsed.state||parsed;
      if(!imported||!Array.isArray(imported.players)||!Array.isArray(imported.events)){
        throw new Error('Formato non valido');
      }
      if(!confirm('Vuoi sostituire i dati attuali con quelli del backup?'))return;
      state=imported;
      save();
      location.reload();
    }catch(err){
      alert('Il file selezionato non è un backup valido di Hank Manager.');
    }finally{
      event.target.value='';
    }
  };
  reader.readAsText(file);
}

function formatDate(s){return new Date(s+'T12:00:00').toLocaleDateString('it-IT',{weekday:'short',day:'numeric',month:'short',year:'numeric'})}
function initials(s){return s.split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase()}
if(state.profile){hello.textContent='Ciao '+state.profile.name.split(' ')[0]+' 👋';show('home');renderBranding();renderNextMatch();renderDashboard()}
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
