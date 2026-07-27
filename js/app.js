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
  notes:e.notes||'',
  matchMinutes:Number(e.matchMinutes||90)
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
    playerMinutes:{},
    phase:'not_started',
    period:0
  }
}));

state.events=state.events.map(e=>({
  ...e,
  matchMinutes:Number(e.matchMinutes||90),
  live:{
    ...(e.live||{}),
    phase:e.live?.phase||(e.live?.finished?'finished':e.live?.elapsedSeconds>=(Number(e.matchMinutes||90)*30)?'second_half':'not_started'),
    period:Number(e.live?.period||0)
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

let currentLiveEventId=null;
let liveTimerInterval=null;



let currentFilter='Tutti';

function save(){localStorage.setItem('hank_v04',JSON.stringify(state))}
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));
  const inside=['home','squad','calendar','tactical'].includes(id);
  topbar.classList.toggle('hidden',!inside);
  nav.classList.toggle('hidden',!inside);
  fab.classList.toggle('hidden',!['squad','calendar'].includes(id));
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
  const arr=state.players.filter(p=>(currentFilter==='Tutti'||p.role===currentFilter)&&p.name.toLowerCase().includes(q));
  playerList.innerHTML=arr.map(p=>`<div class="player" onclick="openPlayer(${p.id})"><div class="player-left"><div class="avatar">${initials(p.name)}</div><div style="min-width:0"><div class="pname">${p.name}</div><div class="prole">${p.role} · Piede ${p.foot}</div></div></div><div class="number">${p.number}</div></div>`).join('')||'<div class="card empty">Nessun giocatore trovato.</div>';
}
function openPlayer(id){
  const p=state.players.find(x=>x.id===id);
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">SCHEDA GIOCATORE</p><h2>${p.name}</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="hero" style="margin:12px 0"><div style="display:flex;align-items:center;gap:14px"><div class="avatar" style="width:64px;height:64px;font-size:22px">${initials(p.name)}</div><div><div class="badge">#${p.number} · ${p.role}</div><p class="muted small" style="margin-top:8px">Piede preferito: ${p.foot}</p></div></div></div>
  <div class="stats"><div class="stat"><strong>${p.apps}</strong><span>Presenze</span></div><div class="stat"><strong>${p.goals}</strong><span>Gol</span></div><div class="stat"><strong>${p.assists}</strong><span>Assist</span></div></div>`;
  modal.classList.add('open');
}
function closeModal(){modal.classList.remove('open')}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()})
function fabAction(){if(document.getElementById('squad').classList.contains('active'))openAddPlayer();else openAddEvent()}
function openAddPlayer(){
  sheet.innerHTML=`<div class="sheet-head"><h2>Nuovo giocatore</h2><button class="close" onclick="closeModal()">✕</button></div>
  <div class="field"><label>NOME E COGNOME</label><input id="pn"></div>
  <div class="field"><label>NUMERO</label><input id="pnum" type="number"></div>
  <div class="field"><label>RUOLO</label><select id="prole"><option>Portiere</option><option>Difensore</option><option>Terzino</option><option>Centrocampista</option><option>Attaccante</option></select></div>
  <button class="primary" onclick="addPlayer()">SALVA GIOCATORE</button>`;modal.classList.add('open');
}
function addPlayer(){
  if(!pn.value.trim()||!pnum.value)return alert('Inserisci nome e numero');
  state.players.push({id:Date.now(),name:pn.value.trim(),role:prole.value,number:pnum.value,foot:'Destro',apps:0,goals:0,assists:0});
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
    <div class="field"><label>DURATA PARTITA</label><select id="ematchminutes"><option value="40">2 × 20 minuti</option><option value="50">2 × 25 minuti</option><option value="60">2 × 30 minuti</option><option value="70">2 × 35 minuti</option><option value="80">2 × 40 minuti</option><option value="90" selected>2 × 45 minuti</option></select></div>
  </div>
  <div class="field"><label>DATA</label><input id="edate" type="date"></div>
  <div class="field"><label>ORA</label><input id="etime" type="time"></div>
  <div class="field"><label>CAMPO / LUOGO</label><input id="evenue"></div>
  <button class="primary" onclick="addEvent()">SALVA EVENTO</button>`;
  modal.classList.add('open');
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
    callups:[],scorers:[],matchEvents:[],availability:{},homeScore:'',awayScore:'',notes:'',
    matchMinutes:isMatch?Number(document.getElementById('ematchminutes').value||90):0});
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
    return `<div class="match-card clickable" onclick="openMatchDetails(${e.id})">
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
  <button class="primary" onclick="saveSimpleEvent(${id})">SALVA MODIFICHE</button>`;
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
  const team=state.profile?.team||'Maccabi Roma';
  const isAway=e.homeAway==='Trasferta';
  const home=isAway?e.opponent:team;
  const away=isAway?team:e.opponent;
  const teamLogo=state.branding?.logo||'';
  const homeVisual=!isAway&&teamLogo?`<img class="mc-logo" src="${teamLogo}">`:`<div class="mc-badge">${initials(home)}</div>`;
  const awayVisual=isAway&&teamLogo?`<img class="mc-logo" src="${teamLogo}">`:`<div class="mc-badge">${initials(away)}</div>`;
  const selected=new Set(e.callups||[]);
  const players=state.players.filter(p=>p.role!=='Allenatore').sort((a,b)=>Number(a.number)-Number(b.number));
  const playerOptions=players.map(p=>`<option value="${p.id}">#${p.number} ${escapeHtml(p.name)}</option>`).join('');
  const timeline=[...(e.matchEvents||[])].sort((a,b)=>(Number(a.minute)||999)-(Number(b.minute)||999)).map((ev,i)=>{
    const p=state.players.find(x=>String(x.id)===String(ev.playerId));
    return `<div class="timeline-event">
      <div class="event-icon">${eventIcon(ev.type)}</div>
      <div><div class="event-title">${escapeHtml(ev.type)} · ${p?escapeHtml(p.name):escapeHtml(ev.playerName||'Avversario')}</div><div class="event-note">${escapeHtml(ev.note||'')}</div></div>
      <div><div class="event-minute">${ev.minute?escapeHtml(ev.minute)+"'":''}</div><button class="mini-danger" onclick="removeMatchEvent(${id},${i})">✕</button></div>
    </div>`;
  }).join('');
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">MATCH CENTER · v0.8</p><h2>${escapeHtml(e.round||'Partita')}</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="match-center-head">
    <div class="mc-competition">${escapeHtml(e.competition==='Personalizza'?(e.customCompetition||'Personalizzata'):(e.competition||'Partita'))}</div>
    <div class="mc-score">
      <div class="mc-team">${homeVisual}<span>${escapeHtml(home)}</span></div>
      <div class="score-box">${e.homeScore!==''?e.homeScore:'-'} : ${e.awayScore!==''?e.awayScore:'-'}</div>
      <div class="mc-team">${awayVisual}<span>${escapeHtml(away)}</span></div>
    </div>
    <div class="muted small">${formatDate(e.date)} ${e.time||'· Orario da definire'}<br>${escapeHtml(e.venue||'Campo da definire')}</div>
  </div>

  <div id="liveMatchBox">${renderLiveMatchBox(e)}</div>
  <div class="match-flow"><button>Convocati</button><button onclick="openMatchTactical(${id})">Formazione</button><button onclick="document.getElementById('matchEventType')?.scrollIntoView({behavior:'smooth'})">Eventi</button><button onclick="document.getElementById('mcHomeScore')?.scrollIntoView({behavior:'smooth'})">Risultato</button><button onclick="finishMatch(${id})">Fine</button></div>
  <div class="section-head"><div><h2>Dati partita</h2></div></div>
  <div class="field"><label>STATO</label><select id="mcStatus">
    ${['Da giocare','In corso','Terminata','Rinviata'].map(x=>`<option ${e.status===x?'selected':''}>${x}</option>`).join('')}
  </select></div>
  <div class="field"><label>DURATA PARTITA</label><select id="mcMatchMinutes">${[40,50,60,70,80,90].map(x=>`<option value="${x}" ${Number(e.matchMinutes||90)===x?'selected':''}>2 × ${x/2} minuti</option>`).join('')}</select></div>
  <div class="form-grid">
    <div class="field"><label>DATA</label><input id="mcDate" type="date" value="${e.date||''}"></div>
    <div class="field"><label>ORA</label><input id="mcTime" type="time" value="${e.time||''}"></div>
  </div>
  <div class="field"><label>CAMPO</label><input id="mcVenue" value="${escapeHtml(e.venue||'')}"></div>
  <div class="form-grid">
    <div class="field"><label>GOL CASA</label><input id="mcHomeScore" type="number" min="0" value="${e.homeScore}"></div>
    <div class="field"><label>GOL TRASFERTA</label><input id="mcAwayScore" type="number" min="0" value="${e.awayScore}"></div>
  </div>

  <div class="section-head"><div><h2>Disponibilità e convocazioni</h2><p class="muted small">${selected.size} convocati</p></div></div>
  <div class="callups">${players.map(p=>{
    const av=(e.availability||{})[p.id]||'Disponibile';
    return `<div class="callup-row"><label><input class="callupCheck" type="checkbox" value="${p.id}" ${selected.has(p.id)||selected.has(String(p.id))?'checked':''}><span class="number-pill">${p.number}</span><span><strong>${escapeHtml(p.name)}</strong><br><span class="muted small">${p.role}</span></span></label>
      <select class="availability-select" data-player="${p.id}">
      ${['Disponibile','Assente','Infortunato','Squalificato','In ritardo','Da confermare'].map(x=>`<option ${av===x?'selected':''}>${x}</option>`).join('')}
      </select></div>`;
  }).join('')}</div>

  <button class="primary" style="margin-top:14px" onclick="openMatchTactical(${id})">⚽ PREPARA FORMAZIONE</button>
  <p class="muted small" style="margin-top:7px">Prima salva i convocati: nel campo tattico compariranno soltanto loro.</p>

  <div class="section-head" style="margin-top:18px"><div><h2>Eventi partita</h2><p class="muted small">Gol, assist, cartellini e autogol</p></div></div>
  <div class="field"><label>TIPO EVENTO</label><select id="matchEventType" onchange="toggleEventPlayerMode()">
    <option>Gol</option><option>Assist</option><option>Ammonizione</option><option>Espulsione</option><option>Autogol</option><option>Rigore segnato</option><option>Rigore sbagliato</option><option>Rigore parato</option>
  </select></div>
  <div class="form-grid">
    <div class="field"><label>GIOCATORE</label><select id="matchEventPlayer">${playerOptions}</select></div>
    <div class="field"><label>MINUTO</label><input id="matchEventMinute" placeholder="Es. 23"></div>
  </div>
  <div class="field"><label>NOTA FACOLTATIVA</label><input id="matchEventNote" placeholder="Es. secondo giallo, assist di tacco..."></div>
  <button class="secondary" onclick="addMatchEvent(${id})">＋ AGGIUNGI EVENTO</button>
  <div id="matchTimeline">${timeline||'<p class="muted small" style="margin-top:10px">Nessun evento inserito.</p>'}</div>

  <div class="field" style="margin-top:18px"><label>NOTE DEL MISTER</label><textarea id="mcNotes" placeholder="Indicazioni, analisi e commenti...">${escapeHtml(e.notes||'')}</textarea></div>
  <button class="primary" onclick="saveMatchCenter(${id})">SALVA SCHEDA PARTITA</button>
  <button class="danger-full" onclick="deleteEvent(${id})">ELIMINA PARTITA</button>`;
  modal.classList.add('open');
}
function collectMatchForm(e){
  e.status=document.getElementById('mcStatus').value;
  e.matchMinutes=Number(document.getElementById('mcMatchMinutes')?.value||e.matchMinutes||90);
  e.date=document.getElementById('mcDate').value;
  e.time=document.getElementById('mcTime').value;
  e.venue=document.getElementById('mcVenue').value.trim();
  e.homeScore=document.getElementById('mcHomeScore').value;
  e.awayScore=document.getElementById('mcAwayScore').value;
  e.notes=document.getElementById('mcNotes').value.trim();
  e.callups=[...document.querySelectorAll('.callupCheck:checked')].map(x=>Number(x.value));
  e.availability={};
  document.querySelectorAll('.availability-select').forEach(x=>e.availability[x.dataset.player]=x.value);
}
function saveMatchCenter(id){
  const e=state.events.find(x=>x.id===id);if(!e)return;
  collectMatchForm(e);
  save();closeModal();renderEvents();renderNextMatch();renderDashboard();
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
  return ({'Gol':'⚽','Assist':'🎯','Ammonizione':'🟨','Espulsione':'🟥','Autogol':'🔁','Rigore segnato':'🥅','Rigore sbagliato':'❌','Rigore parato':'🧤'})[type]||'•';
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
  state.players.forEach(p=>map[p.id]={player:p,goals:0,assists:0,yellow:0,red:0,ownGoals:0,apps:0});
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
  show('home');setTimeout(()=>{document.getElementById('dashboardV07')?.scrollIntoView({behavior:'smooth'})},50);
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
function backToMatchCenter(){const id=currentTacticalEventId;show('calendar');if(id)openMatchCenter(id)}
function renderTacticalBoard(){
const pitch=document.getElementById('cleanPitch');if(!pitch)return;const e=getTacticalEvent();if(!e){pitch.innerHTML='<div class="empty-tactical">Apri una partita dal calendario.</div>';return}
ensureEventLineup(e);document.getElementById('formationSelect').value=e.lineup.formation;document.getElementById('tacticalMatchTitle').textContent=`${state.profile?.team||'Maccabi Roma'} · ${e.opponent}`;document.getElementById('tacticalMatchSubtitle').textContent=`${e.round||''} · ${formatDate(e.date)} ${e.time||''}`;document.getElementById('lineupCounter').textContent=`${e.lineup.starters.length} titolari · ${e.lineup.reserves.length} riserve`;
pitch.innerHTML='<div class="pitch-line half"></div><div class="pitch-line circle"></div><div class="pitch-line box-top"></div><div class="pitch-line box-bottom"></div><div class="pitch-line six-top"></div><div class="pitch-line six-bottom"></div>';
(FORMATION_PRESETS[e.lineup.formation]||FORMATION_PRESETS['4-3-3']).forEach((s,i)=>{const pid=e.lineup.slotAssignments[i],p=state.players.find(x=>String(x.id)===String(pid)),el=document.createElement('div');el.className='formation-slot';el.style.left=s[0]+'%';el.style.top=s[1]+'%';el.innerHTML=`<button class="slot-button ${p?'filled':''}" onclick="openSlotPicker(${i},'${s[2]}')">${p?p.number:'+'}</button><span class="slot-name">${p?escapeHtml(p.name.split(' ').slice(-1)[0]):s[2]}</span><div class="slot-role">${s[2]}</div>`;pitch.appendChild(el)});renderReserves()}
function openSlotPicker(i,r){const e=getTacticalEvent(),used=new Set(Object.values(e.lineup.slotAssignments||{}).map(String)),cur=String(e.lineup.slotAssignments?.[i]||'');const ps=(e.callups||[]).map(id=>state.players.find(p=>String(p.id)===String(id))).filter(Boolean).filter(p=>!used.has(String(p.id))||String(p.id)===cur).sort((a,b)=>a.role.localeCompare(b.role)||Number(a.number)-Number(b.number));sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">POSIZIONE ${r}</p><h2>Scegli il giocatore</h2></div><button class="close" onclick="closeModal()">✕</button></div><div class="player-picker">${ps.map(p=>`<button class="picker-row" onclick="assignPlayerToSlot(${i},${p.id})"><div><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div><span>＋</span></button>`).join('')}${cur?`<button class="danger-full" onclick="clearSlot(${i})">RIMUOVI</button>`:''}</div>`;modal.classList.add('open')}
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
  if((e.lineup?.starters||[]).length!==11){alert('Devi inserire 11 titolari prima di iniziare.');return}
  e.live=e.live||{};
  e.live.active=true;
  e.live.running=false;
  e.live.startedAt=null;
  e.live.elapsedSeconds=Number(e.live.elapsedSeconds||0);
  e.live.homeScore=Number(e.live.homeScore??e.homeScore??0);
  e.live.awayScore=Number(e.live.awayScore??e.awayScore??0);
  e.live.events=Array.isArray(e.live.events)?e.live.events:[];
  e.live.onField={...(e.lineup.slotAssignments||{})};
  e.live.bench=[...(e.lineup.reserves||[])];
  e.live.playerMinutes=e.live.playerMinutes&&typeof e.live.playerMinutes==='object'?e.live.playerMinutes:{};
  e.live.phase=e.live.phase||'not_started';
  e.live.period=Number(e.live.period||0);
  Object.values(e.live.onField).forEach(pid=>{
    if(!e.live.playerMinutes[pid])e.live.playerMinutes[pid]={startedAt:Math.floor(getLiveElapsed(e)/60),endedAt:null,minutes:0,starter:true};
  });
  save();currentLiveEventId=id;closeModal();show('liveMatch');renderLiveMatch();
}
function openLiveMatch(id){currentLiveEventId=id;show('liveMatch');renderLiveMatch()}
function exitLiveMatch(){clearInterval(liveTimerInterval);show('calendar');renderEvents()}
function getLiveEvent(){return state.events.find(e=>String(e.id)===String(currentLiveEventId))}
function getLiveElapsed(e){
  const l=e.live||{};let s=Number(l.elapsedSeconds||0);
  if(l.running&&l.startedAt)s+=Math.floor((Date.now()-Number(l.startedAt))/1000);
  return Math.max(0,s)
}
function getLivePhaseLabel(e){
  const phase=e.live?.phase||'not_started';
  return {not_started:'PRONTA PER INIZIARE',first_half:e.live?.running?'1° TEMPO IN CORSO':'1° TEMPO IN PAUSA',halftime:'INTERVALLO',second_half:e.live?.running?'2° TEMPO IN CORSO':'2° TEMPO IN PAUSA',finished:'PARTITA TERMINATA'}[phase]||'LIVE MATCH';
}
function renderLiveMatch(){
  const e=getLiveEvent();if(!e)return;
  const l=e.live;
  const half=Number(e.matchMinutes||90)/2;
  document.getElementById('liveMatchTitle').textContent=`${state.profile?.team||'Maccabi Roma'} vs ${e.opponent}`;
  document.getElementById('liveHomeName').textContent=state.profile?.team||'Maccabi Roma';
  document.getElementById('liveAwayName').textContent=e.opponent;
  document.getElementById('liveHomeScore').textContent=l.homeScore||0;
  document.getElementById('liveAwayScore').textContent=l.awayScore||0;
  document.getElementById('liveClock').textContent=formatClock(getLiveElapsed(e));
  const phaseLabel=document.getElementById('livePhaseLabel');if(phaseLabel)phaseLabel.textContent=getLivePhaseLabel(e);
  const durationLabel=document.getElementById('liveDurationLabel');if(durationLabel)durationLabel.textContent=`2 × ${half} minuti · Totale ${e.matchMinutes||90}'`;
  const play=document.getElementById('livePlayPause');
  if(play){
    if(l.running)play.textContent='⏸ PAUSA';
    else if(l.phase==='halftime')play.textContent='▶ INIZIA 2° TEMPO';
    else if(l.phase==='second_half')play.textContent='▶ RIPRENDI 2° TEMPO';
    else if(l.phase==='first_half')play.textContent='▶ RIPRENDI 1° TEMPO';
    else play.textContent='▶ INIZIA PARTITA';
    play.disabled=l.phase==='finished';
  }
  const halfBtn=document.getElementById('liveHalfTime');
  if(halfBtn)halfBtn.classList.toggle('hidden',!['first_half'].includes(l.phase));
  renderLivePitch();renderLiveBench();renderLiveEvents();
  if(l.running)startLiveClock();
}
function renderLivePitch(){
  const e=getLiveEvent(),pitch=document.getElementById('livePitch');if(!e||!pitch)return;
  pitch.innerHTML='<div class="pitch-line half"></div><div class="pitch-line circle"></div><div class="pitch-line box-top"></div><div class="pitch-line box-bottom"></div><div class="pitch-line six-top"></div><div class="pitch-line six-bottom"></div>';
  const slots=FORMATION_PRESETS[e.lineup.formation]||FORMATION_PRESETS['4-3-3'];
  slots.forEach((s,i)=>{
    const pid=e.live.onField?.[i],p=state.players.find(x=>String(x.id)===String(pid));
    if(!p)return;
    const el=document.createElement('div');el.className='live-player';el.style.left=s[0]+'%';el.style.top=s[1]+'%';
    el.innerHTML=`<button class="live-player-btn" onclick="openLivePlayerMenu(${p.id},${i})">${p.number}</button><span class="live-player-name">${escapeHtml(p.name.split(' ').slice(-1)[0])}</span>`;
    pitch.appendChild(el);
  })
}
function renderLiveBench(){
  const e=getLiveEvent(),host=document.getElementById('liveBench');if(!e||!host)return;
  host.innerHTML=(e.live.bench||[]).map(id=>{const p=state.players.find(x=>String(x.id)===String(id));return p?`<div class="reserve-row"><span class="number-pill">${p.number}</span><div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div></div>`:''}).join('')||'<div class="empty-tactical">Panchina vuota.</div>'
}
function renderLiveEvents(){
  const e=getLiveEvent(),host=document.getElementById('liveEvents');if(!e||!host)return;
  host.innerHTML=[...(e.live.events||[])].reverse().map(ev=>`<div class="live-event-row"><div><strong>${escapeHtml(ev.label)}</strong><small>${escapeHtml(ev.detail||'')}</small></div><span>${ev.minute}'</span></div>`).join('')||'<div class="empty-tactical">Nessun evento.</div>'
}
function toggleLiveTimer(){
  const e=getLiveEvent();if(!e)return;
  const l=e.live;
  if(l.phase==='finished')return;
  if(l.running){
    l.elapsedSeconds=getLiveElapsed(e);l.running=false;l.startedAt=null;
  }else{
    if(l.phase==='not_started'){l.phase='first_half';l.period=1;}
    else if(l.phase==='halftime'){
      l.elapsedSeconds=Math.max(Number(l.elapsedSeconds||0),Number(e.matchMinutes||90)*30);
      l.phase='second_half';l.period=2;
    }
    l.running=true;l.startedAt=Date.now();e.status='In corso';
  }
  save();renderLiveMatch();
}
function endFirstHalf(){
  const e=getLiveEvent();if(!e)return;
  const l=e.live;
  if(l.phase!=='first_half')return;
  if(!confirm('Confermi la fine del primo tempo?'))return;
  l.elapsedSeconds=Number(e.matchMinutes||90)*30;
  l.running=false;l.startedAt=null;l.phase='halftime';l.period=1;
  l.events.push({id:Date.now(),type:'period',minute:Number(e.matchMinutes||90)/2,label:'⏸ Fine primo tempo',detail:'Intervallo'});
  save();clearInterval(liveTimerInterval);renderLiveMatch();
}
function startLiveClock(){
  clearInterval(liveTimerInterval);
  liveTimerInterval=setInterval(()=>{
    const e=getLiveEvent(),el=document.getElementById('liveClock');
    if(!e||!el){clearInterval(liveTimerInterval);return}
    const elapsed=getLiveElapsed(e);el.textContent=formatClock(elapsed);
    const phaseLabel=document.getElementById('livePhaseLabel');if(phaseLabel)phaseLabel.textContent=getLivePhaseLabel(e);
    if(!e.live.running)clearInterval(liveTimerInterval);
  },1000)
}
function editLiveMinute(){
  const e=getLiveEvent();if(!e)return;
  const current=Math.floor(getLiveElapsed(e)/60);
  const v=prompt('Da quale minuto vuoi partire?',String(current));
  if(v===null)return;
  const m=Math.max(0,Number(v)||0);
  e.live.elapsedSeconds=m*60;e.live.startedAt=e.live.running?Date.now():null;save();renderLiveMatch()
}
function openLivePlayerMenu(playerId,slotIndex){
  const p=state.players.find(x=>String(x.id)===String(playerId));if(!p)return;
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">EVENTO GIOCATORE</p><h2>#${p.number} ${escapeHtml(p.name)}</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="live-event-grid">
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'goal')">⚽ Gol</button>
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'assist')">🎯 Assist</button>
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'yellow')">🟨 Ammonizione</button>
    <button class="live-event-btn" onclick="addLivePlayerEvent(${playerId},'red')">🟥 Espulsione</button>
    <button class="live-event-btn" onclick="openSubstitutionPicker(${playerId},${slotIndex})">🔄 Sostituzione</button>
    <button class="live-event-btn" onclick="closeModal()">✕ Annulla</button>
  </div>`;
  modal.classList.add('open')
}
function addLivePlayerEvent(playerId,type){
  const e=getLiveEvent(),p=state.players.find(x=>String(x.id)===String(playerId));if(!e||!p)return;
  const minute=Math.floor(getLiveElapsed(e)/60);
  const map={goal:['Gol','⚽'],assist:['Assist','🎯'],yellow:['Ammonizione','🟨'],red:['Espulsione','🟥']};
  const [label,icon]=map[type];
  const ev={id:Date.now(),type,playerId,minute,label:`${icon} ${label}`,detail:p.name};
  e.live.events.push(ev);
  if(type==='goal'){e.live.homeScore=Number(e.live.homeScore||0)+1;e.homeScore=e.live.homeScore}
  p.stats=p.stats||{};
  const key={goal:'goals',assist:'assists',yellow:'yellowCards',red:'redCards'}[type];
  p.stats[key]=Number(p.stats[key]||0)+1;
  save();closeModal();renderLiveMatch()
}
function openSubstitutionPicker(outPlayerId,slotIndex){
  const e=getLiveEvent();if(!e)return;
  const bench=(e.live.bench||[]).map(id=>state.players.find(p=>String(p.id)===String(id))).filter(Boolean);
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">SOSTITUZIONE</p><h2>Scegli chi entra</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="player-picker">${bench.map(p=>`<button class="picker-row" onclick="makeLiveSubstitution(${outPlayerId},${p.id},${slotIndex})"><div><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></div><span>ENTRA</span></button>`).join('')||'<div class="empty-tactical">Nessun giocatore disponibile.</div>'}</div>`;
  modal.classList.add('open')
}
function makeLiveSubstitution(outId,inId,slotIndex){
  const e=getLiveEvent();if(!e)return;
  const minute=Math.floor(getLiveElapsed(e)/60),outP=state.players.find(p=>String(p.id)===String(outId)),inP=state.players.find(p=>String(p.id)===String(inId));
  e.live.onField[slotIndex]=inId;
  e.live.bench=e.live.bench.filter(id=>String(id)!==String(inId));
  e.live.bench.push(outId);
  e.live.playerMinutes[outId]=e.live.playerMinutes[outId]||{startedAt:0,starter:true};
  e.live.playerMinutes[outId].endedAt=minute;
  e.live.playerMinutes[outId].minutes=Math.max(0,minute-Number(e.live.playerMinutes[outId].startedAt||0));
  e.live.playerMinutes[inId]={startedAt:minute,endedAt:null,minutes:0,starter:false};
  e.live.events.push({id:Date.now(),type:'sub',minute,label:'🔄 Sostituzione',detail:`${outP?.name||''} → ${inP?.name||''}`,outId,inId,slotIndex});
  save();closeModal();renderLiveMatch()
}
function finishLiveMatch(){
  const e=getLiveEvent();if(!e||!confirm('Terminare la partita e salvare tutte le statistiche?'))return;
  const minute=Math.floor(getLiveElapsed(e)/60);
  if(e.live.running){e.live.elapsedSeconds=getLiveElapsed(e);e.live.running=false;e.live.startedAt=null}
  Object.values(e.live.onField||{}).forEach(pid=>{
    e.live.playerMinutes[pid]=e.live.playerMinutes[pid]||{startedAt:0,starter:true};
    if(e.live.playerMinutes[pid].endedAt==null){
      e.live.playerMinutes[pid].endedAt=minute;
      e.live.playerMinutes[pid].minutes=Math.max(0,minute-Number(e.live.playerMinutes[pid].startedAt||0))
    }
  });
  Object.entries(e.live.playerMinutes||{}).forEach(([pid,m])=>{
    const p=state.players.find(x=>String(x.id)===String(pid));if(!p)return;
    p.stats=p.stats||{};
    p.stats.appearances=Number(p.stats.appearances||0)+1;
    p.stats.minutes=Number(p.stats.minutes||0)+Number(m.minutes||0);
    if(m.starter)p.stats.starts=Number(p.stats.starts||0)+1;
    else p.stats.subAppearances=Number(p.stats.subAppearances||0)+1;
  });
  e.homeScore=e.live.homeScore;e.awayScore=e.live.awayScore;e.status='Terminata';e.live.active=false;e.live.finished=true;e.live.phase='finished';e.live.period=2;
  save();clearInterval(liveTimerInterval);alert('Partita terminata e statistiche aggiornate.');show('calendar');renderEvents();renderDashboard()
}
function undoLastLiveEvent(){
  const e=getLiveEvent();if(!e||!(e.live.events||[]).length)return;
  const ev=e.live.events.pop();
  if(ev.type==='goal'){e.live.homeScore=Math.max(0,Number(e.live.homeScore||0)-1);e.homeScore=e.live.homeScore}
  if(['goal','assist','yellow','red'].includes(ev.type)){
    const p=state.players.find(x=>String(x.id)===String(ev.playerId));if(p){p.stats=p.stats||{};const key={goal:'goals',assist:'assists',yellow:'yellowCards',red:'redCards'}[ev.type];p.stats[key]=Math.max(0,Number(p.stats[key]||0)-1)}
  }
  if(ev.type==='sub'){
    e.live.onField[ev.slotIndex]=ev.outId;
    e.live.bench=e.live.bench.filter(id=>String(id)!==String(ev.outId));
    e.live.bench.push(ev.inId);
    delete e.live.playerMinutes[ev.inId];
    if(e.live.playerMinutes[ev.outId]){e.live.playerMinutes[ev.outId].endedAt=null;e.live.playerMinutes[ev.outId].minutes=0}
  }
  save();renderLiveMatch()
}


function renderSociety(){
  const s=state.society||{};
  const team=s.name||state.profile?.team||'Hank Manager FC';
  const el=id=>document.getElementById(id);
  if(el('societyTeamName'))el('societyTeamName').textContent=team;
  if(el('societyFounded'))el('societyFounded').textContent=s.founded?`Fondata nel ${s.founded}`:'Società sportiva dilettantistica';
  if(el('clubLogoPreview'))el('clubLogoPreview').textContent=(team.match(/\b\w/g)||['H','M']).slice(0,2).join('').toUpperCase();
  const general=[
    ['Ragione sociale',s.legalName],['Categoria',s.category],['Girone',s.group],
    ['Campo di casa',s.homeGround],['Indirizzo',s.address],['Colori sociali',s.colors],
    ['Codice fiscale',s.fiscalCode],['Partita IVA',s.vatNumber]
  ];
  const contacts=[
    ['Presidente',s.president],['Allenatore',s.coach],['Vice allenatore',s.assistantCoach],
    ['Dirigente',s.manager],['Telefono',s.phone],['Email',s.email]
  ];
  const rows=a=>a.map(([k,v])=>`<div class="info-row-modern"><span>${k}</span><strong>${escapeHtml(v||'Non inserito')}</strong></div>`).join('');
  if(el('societyGeneral'))el('societyGeneral').innerHTML=rows(general);
  if(el('societyContacts'))el('societyContacts').innerHTML=rows(contacts);
  if(el('societyNotes'))el('societyNotes').textContent=s.notes||'Nessuna nota inserita.';
}
function openSocietyEditor(){
  const s=state.society||{};
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">DATI CLUB</p><h2>Modifica società</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <div class="form-grid">
    ${societyField('Nome squadra','name',s.name)}
    ${societyField('Ragione sociale','legalName',s.legalName)}
    ${societyField('Anno di fondazione','founded',s.founded)}
    ${societyField('Categoria','category',s.category)}
    ${societyField('Girone','group',s.group)}
    ${societyField('Campo di casa','homeGround',s.homeGround)}
    ${societyField('Indirizzo','address',s.address)}
    ${societyField('Colori sociali','colors',s.colors)}
    ${societyField('Presidente','president',s.president)}
    ${societyField('Allenatore','coach',s.coach)}
    ${societyField('Vice allenatore','assistantCoach',s.assistantCoach)}
    ${societyField('Dirigente','manager',s.manager)}
    ${societyField('Telefono','phone',s.phone)}
    ${societyField('Email','email',s.email)}
    ${societyField('Codice fiscale società','fiscalCode',s.fiscalCode)}
    ${societyField('Partita IVA','vatNumber',s.vatNumber)}
    <label class="field full"><span>Note</span><textarea id="soc_notes">${escapeHtml(s.notes||'')}</textarea></label>
  </div>
  <button class="primary full-btn" onclick="saveSociety()">SALVA SOCIETÀ</button>`;
  modal.classList.add('open')
}
function societyField(label,key,value){return `<label class="field"><span>${label}</span><input id="soc_${key}" value="${escapeHtml(value||'')}"></label>`}
function saveSociety(){
  const keys=['name','legalName','founded','category','group','homeGround','address','colors','president','coach','assistantCoach','manager','phone','email','fiscalCode','vatNumber'];
  keys.forEach(k=>state.society[k]=(document.getElementById('soc_'+k)?.value||'').trim());
  state.society.notes=(document.getElementById('soc_notes')?.value||'').trim();
  state.profile=state.profile||{};state.profile.team=state.society.name||state.profile.team;
  save();closeModal();renderSociety();renderDashboard()
}


function openMatchDetails(id){
  currentMatchDetailsId=id;
  const e=state.events.find(x=>String(x.id)===String(id));if(!e)return;
  show('matchDetails');renderMatchDetails();
}
function getCurrentMatchDetails(){return state.events.find(x=>String(x.id)===String(currentMatchDetailsId))}
function renderMatchDetails(){
  const e=getCurrentMatchDetails();if(!e)return;
  ensureEventLineup(e);
  const team=state.society?.name||state.profile?.team||'Maccabi Roma';
  const txt=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v};
  txt('matchCompetition',e.competition||e.type||'Campionato');
  txt('matchCompetitionLabel',(e.competition||e.type||'Campionato').toUpperCase());
  txt('matchHomeTeam',team);txt('matchAwayTeam',e.opponent||'Avversario');
  txt('matchMainScore',`${Number(e.homeScore||0)} - ${Number(e.awayScore||0)}`);
  txt('matchDate',e.date||'Data non inserita');txt('matchTime',e.time||'Orario non inserito');txt('matchVenue',e.venue||e.field||'Campo non inserito');
  const callups=(e.callups||[]).length,starters=(e.lineup?.starters||[]).length;
  const ready=starters===11;
  const host=document.getElementById('matchPreparationSummary');
  if(host)host.innerHTML=`
    <div class="preparation-item"><strong>${callups}</strong><small>Convocati</small></div>
    <div class="preparation-item"><strong>${starters}/11</strong><small>Titolari scelti</small></div>
    <div class="preparation-item"><strong>${ready?'Pronta':'Da completare'}</strong><small>Live Match</small></div>`;
}
function openCurrentMatchCallups(){const e=getCurrentMatchDetails();if(e)openMatchCenter(e.id,'callups')}
function openCurrentMatchLineup(){const e=getCurrentMatchDetails();if(e)openMatchCenter(e.id,'lineup')}
function openCurrentMatchLive(){
  const e=getCurrentMatchDetails();if(!e)return;
  if((e.callups||[]).length===0){alert('Prima seleziona i convocati.');return}
  if((e.lineup?.starters||[]).length!==11){alert('Prima completa la formazione con 11 titolari.');return}
  startLiveMatch(e.id)
}
function openCurrentMatchManualStats(){
  const e=getCurrentMatchDetails();if(!e)return;
  sheet.innerHTML=`<div class="sheet-head"><div><p class="muted small">INSERIMENTO MANUALE</p><h2>Statistiche partita</h2></div><button class="close" onclick="closeModal()">✕</button></div>
  <p class="muted">Questa sezione permetterà di inserire risultato, marcatori, assist, ammonizioni, espulsioni e sostituzioni anche senza utilizzare il Live Match.</p>
  <button class="primary full-btn" onclick="closeModal()">OK</button>`;
  modal.classList.add('open')
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
