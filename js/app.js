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
    callups:[],scorers:[],matchEvents:[],availability:{},homeScore:'',awayScore:'',notes:''});
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
    return `<div class="match-card clickable" onclick="openMatchCenter(${e.id})">
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

  <div class="section-head"><div><h2>Dati partita</h2></div></div>
  <div class="field"><label>STATO</label><select id="mcStatus">
    ${['Da giocare','In corso','Terminata','Rinviata'].map(x=>`<option ${e.status===x?'selected':''}>${x}</option>`).join('')}
  </select></div>
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
  '4-3-3':[
    [50,91],[18,73],[39,77],[61,77],[82,73],[28,54],[50,59],[72,54],[20,27],[50,21],[80,27]
  ],
  '4-2-3-1':[
    [50,91],[18,73],[39,77],[61,77],[82,73],[38,58],[62,58],[20,39],[50,36],[80,39],[50,19]
  ],
  '4-4-2':[
    [50,91],[18,73],[39,77],[61,77],[82,73],[18,51],[39,56],[61,56],[82,51],[37,25],[63,25]
  ],
  '3-5-2':[
    [50,91],[27,75],[50,79],[73,75],[12,50],[32,57],[50,61],[68,57],[88,50],[37,24],[63,24]
  ],
  '3-4-2-1':[
    [50,91],[27,75],[50,79],[73,75],[15,52],[38,58],[62,58],[85,52],[35,34],[65,34],[50,17]
  ],
  '3-4-3':[
    [50,91],[27,75],[50,79],[73,75],[17,53],[40,59],[60,59],[83,53],[20,27],[50,20],[80,27]
  ],
  '4-3-1-2':[
    [50,91],[18,73],[39,77],[61,77],[82,73],[28,55],[50,60],[72,55],[50,39],[37,22],[63,22]
  ]
};
let tacticalDrag=null;

function tacticalPlayers(){
  return state.players.filter(p=>p.role!=='Allenatore').sort((a,b)=>Number(a.number)-Number(b.number));
}
function roleClass(role){
  const r=(role||'').toLowerCase();
  if(r.includes('port'))return 'gk';
  if(r.includes('dif')||r.includes('terz'))return 'def';
  if(r.includes('cent'))return 'mid';
  if(r.includes('att'))return 'att';
  return '';
}
function defaultTacticalIds(){
  const ps=tacticalPlayers();
  const selected=[];
  const take=(filter,n)=>ps.filter(filter).slice(0,n).forEach(p=>{if(!selected.includes(p.id))selected.push(p.id)});
  take(p=>(p.role||'').toLowerCase().includes('port'),1);
  take(p=>/difensore|terzino/i.test(p.role||''),4);
  take(p=>/centrocampista/i.test(p.role||''),3);
  take(p=>/attaccante/i.test(p.role||''),3);
  ps.forEach(p=>{if(selected.length<11&&!selected.includes(p.id))selected.push(p.id)});
  return selected.slice(0,11);
}
function ensureTacticalSetup(){
  state.tactical=state.tactical||{currentFormation:'4-3-3',onField:[],positions:{},saved:[]};
  if(!state.tactical.onField.length){
    state.tactical.onField=defaultTacticalIds();
    const preset=FORMATION_PRESETS[state.tactical.currentFormation]||FORMATION_PRESETS['4-3-3'];
    state.tactical.positions={};
    state.tactical.onField.forEach((id,i)=>state.tactical.positions[id]={x:preset[i]?.[0]||50,y:preset[i]?.[1]||50});
    save();
  }
}
function renderTacticalBoard(){
  const pitch=document.getElementById('tacticalPitch');if(!pitch)return;
  ensureTacticalSetup();
  document.getElementById('formationSelect').value=state.tactical.currentFormation||'4-3-3';
  pitch.querySelectorAll('.tactical-player').forEach(x=>x.remove());
  state.tactical.onField.forEach(id=>{
    const p=state.players.find(x=>String(x.id)===String(id));if(!p)return;
    const pos=state.tactical.positions[id]||{x:50,y:50};
    const el=document.createElement('div');
    el.className='tactical-player';
    el.dataset.player=id;
    el.style.left=pos.x+'%';el.style.top=pos.y+'%';
    el.innerHTML=`<div class="player-token ${roleClass(p.role)}">${p.number}</div><span class="token-name">${escapeHtml(p.name.split(' ').slice(-1)[0])}</span>`;
    el.addEventListener('pointerdown',startTacticalDrag);
    el.addEventListener('dblclick',()=>togglePlayerOnPitch(id));
    pitch.appendChild(el);
  });
  renderBench();
  renderSavedLineups();
}
function startTacticalDrag(ev){
  ev.preventDefault();
  const el=ev.currentTarget,pitch=document.getElementById('tacticalPitch');
  tacticalDrag={el,pitch,id:Number(el.dataset.player)};
  el.classList.add('dragging');el.setPointerCapture?.(ev.pointerId);
  el.addEventListener('pointermove',moveTacticalDrag);
  el.addEventListener('pointerup',endTacticalDrag,{once:true});
  el.addEventListener('pointercancel',endTacticalDrag,{once:true});
}
function moveTacticalDrag(ev){
  if(!tacticalDrag)return;
  const rect=tacticalDrag.pitch.getBoundingClientRect();
  let x=((ev.clientX-rect.left)/rect.width)*100;
  let y=((ev.clientY-rect.top)/rect.height)*100;
  x=Math.max(6,Math.min(94,x));y=Math.max(5,Math.min(95,y));
  tacticalDrag.el.style.left=x+'%';tacticalDrag.el.style.top=y+'%';
  state.tactical.positions[tacticalDrag.id]={x:+x.toFixed(2),y:+y.toFixed(2)};
}
function endTacticalDrag(ev){
  if(!tacticalDrag)return;
  tacticalDrag.el.classList.remove('dragging');
  tacticalDrag.el.removeEventListener('pointermove',moveTacticalDrag);
  tacticalDrag=null;save();
}
function renderBench(){
  const host=document.getElementById('benchList');if(!host)return;
  const on=new Set(state.tactical.onField.map(String));
  host.innerHTML=tacticalPlayers().map(p=>`<button class="bench-chip ${on.has(String(p.id))?'on-field':''}" onclick="togglePlayerOnPitch(${p.id})"><strong>#${p.number} ${escapeHtml(p.name)}</strong><small>${escapeHtml(p.role)}</small></button>`).join('');
}
function togglePlayerOnPitch(id){
  const idx=state.tactical.onField.findIndex(x=>String(x)===String(id));
  if(idx>=0){
    state.tactical.onField.splice(idx,1);delete state.tactical.positions[id];
  }else{
    if(state.tactical.onField.length>=11){alert('Sul campo possono esserci al massimo 11 giocatori.');return}
    state.tactical.onField.push(id);
    const preset=FORMATION_PRESETS[state.tactical.currentFormation]||FORMATION_PRESETS['4-3-3'];
    const i=state.tactical.onField.length-1;
    state.tactical.positions[id]={x:preset[i]?.[0]||50,y:preset[i]?.[1]||50};
  }
  save();renderTacticalBoard();
}
function applyFormation(name){
  state.tactical.currentFormation=name;
  const preset=FORMATION_PRESETS[name]||FORMATION_PRESETS['4-3-3'];
  if(!state.tactical.onField.length)state.tactical.onField=defaultTacticalIds();
  state.tactical.onField.slice(0,11).forEach((id,i)=>state.tactical.positions[id]={x:preset[i][0],y:preset[i][1]});
  save();renderTacticalBoard();
}
function resetFormation(){applyFormation(state.tactical.currentFormation||'4-3-3')}
function clearPitch(){
  if(!confirm('Vuoi rimuovere tutti i giocatori dal campo?'))return;
  state.tactical.onField=[];state.tactical.positions={};save();renderTacticalBoard();
}
function saveCurrentLineup(){
  ensureTacticalSetup();
  const input=document.getElementById('lineupName');
  const name=(input.value||'').trim()||`${state.tactical.currentFormation} · ${new Date().toLocaleDateString('it-IT')}`;
  state.tactical.saved=state.tactical.saved||[];
  state.tactical.saved.unshift({
    id:Date.now(),name,formation:state.tactical.currentFormation,
    onField:[...state.tactical.onField],
    positions:JSON.parse(JSON.stringify(state.tactical.positions)),
    createdAt:new Date().toISOString()
  });
  save();input.value='';renderSavedLineups();
}
function loadLineup(id){
  const l=(state.tactical.saved||[]).find(x=>x.id===id);if(!l)return;
  state.tactical.currentFormation=l.formation||'4-3-3';
  state.tactical.onField=[...(l.onField||[])];
  state.tactical.positions=JSON.parse(JSON.stringify(l.positions||{}));
  save();renderTacticalBoard();
}
function deleteLineup(id){
  if(!confirm('Eliminare questa formazione salvata?'))return;
  state.tactical.saved=(state.tactical.saved||[]).filter(x=>x.id!==id);save();renderSavedLineups();
}
function renderSavedLineups(){
  const host=document.getElementById('savedLineupsList');if(!host)return;
  const rows=(state.tactical.saved||[]).map(l=>{
    const names=(l.onField||[]).map(id=>state.players.find(p=>String(p.id)===String(id))?.name).filter(Boolean);
    return `<div class="saved-lineup-card"><div><strong>${escapeHtml(l.name)}</strong><small>${escapeHtml(l.formation||'')} · ${names.length} giocatori</small></div><div class="saved-lineup-buttons"><button onclick="loadLineup(${l.id})">APRI</button><button onclick="deleteLineup(${l.id})">✕</button></div></div>`;
  }).join('');
  host.innerHTML=rows||'<p class="muted small">Nessuna formazione salvata.</p>';
}


function exportBackup(){
  try{
    const payload={
      app:'Hank Manager',
      version:'2.0-beta',
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
