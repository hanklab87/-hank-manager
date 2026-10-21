/* Hank Manager v5.3.12 — registrazione una tantum della gara del 21 ottobre 2026.
 * Si applica alla gara Atletico Vermicino esistente, anche se parzialmente compilata.
 * NON cancella altri incontri, movimenti manuali, quote o impostazioni finanziarie.
 */
(function registerVermicino20261021(){
  'use strict';
  if(typeof state==='undefined'||!Array.isArray(state.events)||!Array.isArray(state.players)||
     typeof financeInit!=='function'||typeof save!=='function')return;
  state.migrations=state.migrations||{};
  const migrationKey='vermicino20261021V5312';
  if(state.migrations[migrationKey])return;
  const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');
  const player=fullName=>state.players.find(p=>norm(p.name)===norm(fullName));
  const names={
    tommaso:'Tommaso Maroder',fortes:'Luca Fortes',diCastro:'Samuel Di Castro',
    spagnoletto:'Stefano Spagnoletto',pavoncello:'Gavriel Pavoncello',
    gabbani:'Alessandro Gabbani',fellah:'Rahmin Fellah',gioia:'Alessio Gioia',
    francesco:'Francesco Araujo',gianni:'Gianni Araujo',venturi:'Silvio Venturi',
    gazzo:'Alessandro Gazzo',sabia:'Salvatore Sabia',fiorentini:'Marco Fiorentini',
    edoardo:'Edoardo Maroder'
  };
  const ids={};
  for(const [key,name] of Object.entries(names)){
    const found=player(name);
    // Non scrivere dati con giocatori mancanti o ID indovinati.
    if(!found)return;
    ids[key]=found.id;
  }
  const isVermicino=e=>e.type==='Partita'&&norm(e.opponent).includes('atleticovermicino');
  let match=state.events.find(e=>isVermicino(e)&&e.date==='2026-10-21');
  // Il calendario originale prevedeva il 19/10; riutilizziamo quella gara anche
  // se il Live è già stato avviato. Mai creare una seconda partita per lo stesso turno.
  if(!match){
    const scheduled=state.events.find(e=>isVermicino(e)&&e.date==='2026-10-19');
    if(scheduled)match=scheduled;
  }
  // Prima di sostituire i soli dati di questa gara, conserviamo la versione
  // precedente per poterla recuperare dal backup locale/cloud, se necessario.
  if(match){
    state.matchMigrationBackups=state.matchMigrationBackups||{};
    if(!state.matchMigrationBackups[migrationKey])
      state.matchMigrationBackups[migrationKey]=JSON.parse(JSON.stringify(match));
  }
  if(!match){
    const maxId=state.events.reduce((max,e)=>Math.max(max,Number(e.id)||0),2000);
    match={id:maxId+1,type:'Partita',competition:'Super Champions',
      customCompetition:'',round:'Fase Super Champions',homeAway:'Trasferta',
      opponent:'Atletico Vermicino',date:'2026-10-21',time:'21:15',
      venue:'Bettini',status:'Da giocare'};
    state.events.push(match);
  }
  const initial={0:ids.tommaso,1:ids.pavoncello,2:ids.spagnoletto,
    3:ids.diCastro,4:ids.fortes,5:ids.fellah,6:ids.gabbani,
    7:ids.gioia,8:ids.francesco,9:ids.venturi,10:ids.gianni};
  const final={0:ids.tommaso,1:ids.fiorentini,2:ids.gazzo,
    3:ids.diCastro,4:ids.fortes,5:ids.edoardo,6:ids.gioia,
    7:ids.sabia,8:ids.pavoncello,9:ids.venturi,10:ids.fellah};
  const starters=Object.values(initial);
  const bench=[ids.gazzo,ids.sabia,ids.fiorentini,ids.edoardo];
  match.date='2026-10-21';
  match.opponent='Atletico Vermicino';
  match.type='Partita';
  match.status='Terminata';
  match.callups=[...starters,...bench];
  match.lineup={...(match.lineup||{}),formation:'4-3-3',
    starters,reserves:bench,slotAssignments:initial,
    positions:match.lineup?.positions||{}};
  const away=match.homeAway==='Trasferta';
  match.homeScore=away?0:6;
  match.awayScore=away?6:0;
  const goal=(minute,scorer,assist)=>({
    id:`vm-20261021-g${minute}`,type:'Gol',label:'Gol',minute,
    displayMinute:String(minute),playerId:ids[scorer],
    ...(assist?{assistPlayerId:ids[assist]}:{}),
    detail:names[scorer]+(assist?' · Assist: '+names[assist]:''),note:''
  });
  const substitution=(minute,out,inPlayer,notes)=>({
    id:`vm-20261021-s${minute}-${out}`,type:'Sostituzione',label:'Sostituzione',
    minute,displayMinute:minute===45?'Intervallo':String(minute),
    outId:ids[out],inId:ids[inPlayer],
    detail:names[out]+' → '+names[inPlayer],note:notes
  });
  const events=[
    goal(16,'francesco','gioia'),goal(24,'venturi'),goal(42,'venturi','gabbani'),
    substitution(45,'spagnoletto','gazzo','Intervallo'),
    substitution(45,'gioia','sabia','Intervallo'),
    substitution(45,'pavoncello','fiorentini','Intervallo'),
    substitution(45,'fellah','edoardo','Intervallo'),
    substitution(65,'gabbani','gioia','20° secondo tempo'),
    substitution(65,'francesco','pavoncello','20° secondo tempo'),
    substitution(65,'gianni','fellah','20° secondo tempo'),
    {id:'vm-20261021-yellow67',type:'Ammonizione',label:'Ammonizione',
      minute:67,displayMinute:'67',playerId:ids.diCastro,detail:names.diCastro,note:''},
    goal(70,'edoardo'),goal(74,'venturi','gazzo'),goal(80,'venturi','fortes')
  ];
  // Una sola fonte degli eventi: Live e Statistiche leggono live.events.
  match.matchEvents=[];
  match.scorers=events.filter(x=>x.type==='Gol').map(x=>({
    playerId:x.playerId,minute:x.minute,...(x.assistPlayerId?{assistPlayerId:x.assistPlayerId}:{})
  }));
  const votes={tommaso:7,diCastro:7,spagnoletto:7,fortes:7.5,
    fellah:7,gabbani:8,gioia:7.5,francesco:7.5,venturi:8,
    gianni:6.5,gazzo:7,sabia:7,fiorentini:6,edoardo:7.5,pavoncello:7};
  match.ratings={...(match.ratings||{})};
  for(const [key,vote] of Object.entries(votes))match.ratings[ids[key]]=vote;
  // I tre rientri al 65' producono due intervalli di gioco per ciascun giocatore.
  // L'app conserva i minuti aggregati nel campo "minutes".
  const minutes={tommaso:90,fortes:90,diCastro:90,spagnoletto:45,
    pavoncello:70,gabbani:65,fellah:70,gioia:70,francesco:65,
    gianni:65,venturi:90,gazzo:45,sabia:45,fiorentini:45,edoardo:45};
  const playerMinutes={};
  for(const [key,played] of Object.entries(minutes)){
    const starter=starters.some(id=>String(id)===String(ids[key]));
    playerMinutes[ids[key]]={minutes:played,starter,
      startedAtOfficialMinute:starter?0:45,
      endedAtOfficialMinute:90};
  }
  match.live={...(match.live||{}),active:false,running:false,finished:true,
    phase:'finished',periodLength:45,periodElapsedSeconds:2700,
    totalPlayingSeconds:5400,elapsedSeconds:5400,
    periodStartedAt:null,playingStartedAt:null,startedAt:null,
    homeScore:match.homeScore,awayScore:match.awayScore,
    events,onField:final,bench:[ids.spagnoletto,ids.gabbani,ids.francesco,ids.gianni],
    playerMinutes,mvpPlayerId:ids.venturi};
  match.mvpPlayerId=ids.venturi;
  match.statsFinalized=true;
  match.statsApplied=true;
  match.timer={...(match.timer||{}),running:false,startedAt:null,
    elapsedSeconds:5400,finished:true};
  // Le finanze sono calcolate da un solo incontro "Terminata".
  // Applica 160 € + 10 € a questa gara soltanto; non cambia le altre tariffe.
  const previousFinanceSeason=financeActiveSeason;
  financeActiveSeason='2026/27';
  const financeData=financeInit();
  const automatic=financeAutomaticSettings(financeData);
  const existing=automatic.matchOverrides[String(match.id)]||{};
  automatic.matchOverrides[String(match.id)]={
    ...existing,
    matchCents:Number.isSafeInteger(existing.matchCents)?existing.matchCents:16000,
    laundryCents:Number.isSafeInteger(existing.laundryCents)?existing.laundryCents:1000
  };
  financeActiveSeason=previousFinanceSeason;
  state.migrations[migrationKey]=true;
  save();
  if(typeof renderNextMatch==='function')renderNextMatch();
  if(typeof renderDashboard==='function')renderDashboard();
})();
