/* Hank Manager 5.4 – template social dinamici. Non modifica lo stato né la sincronizzazione. */
(function(){
'use strict';
const W=1080,H=1920,ACC='#5aff88',CYAN='#80e8ff',WHITE='#f9fcff';
const FONT='"Arial Narrow",Impact,"Arial Black",Arial,sans-serif';
function font(c,size,weight=800){c.font=`${weight} ${size}px ${FONT}`;}
function text(c,s,x,y,size=30,color=WHITE,align='left',max=900,weight=800){
  c.fillStyle=color;c.textAlign=align;c.textBaseline='middle';font(c,size,weight);
  c.fillText(String(s??''),x,y,max);
}
function line(c,x,y,x2,y2,color='rgba(90,255,136,.6)',lw=2){c.beginPath();c.strokeStyle=color;c.lineWidth=lw;c.moveTo(x,y);c.lineTo(x2,y2);c.stroke();}
function rounded(c,x,y,w,h,r=16,fill='rgba(1,15,27,.85)',stroke=null){
  c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();
  if(stroke){c.strokeStyle=stroke;c.lineWidth=2;c.stroke();}
}
async function picture(src){
  if(!src)return null;
  // Reuse the existing safe loader: CORS failure yields null rather than tainting PNG.
  return await hmLoadImageV52(src);
}
function imageFit(c,img,x,y,w,h){
  if(!img)return;
  const ratio=Math.min(w/img.width,h/img.height),iw=img.width*ratio,ih=img.height*ratio;
  c.drawImage(img,x+(w-iw)/2,y+(h-ih)/2,iw,ih);
}
function initialsV54(name){return String(name||'?').split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();}
async function crest(c,src,name,cx,cy,size){
  const img=await picture(src);
  if(img){
    c.save();c.shadowColor='rgba(0,0,0,.48)';c.shadowBlur=16;
    imageFit(c,img,cx-size/2,cy-size/2,size,size);c.restore();
  }else{
    c.beginPath();c.arc(cx,cy,size*.46,0,Math.PI*2);c.fillStyle='#0a2435';c.fill();
    c.strokeStyle=ACC;c.lineWidth=5;c.stroke();
    text(c,initialsV54(name),cx,cy,size*.29,WHITE,'center',size*.8);
  }
}
async function backdrop(c){
  const img=await picture('assets/social/stadium-clean-v54.jpg');
  if(img)c.drawImage(img,0,0,W,H);
  else {let g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,'#031527');g.addColorStop(.7,'#0b3553');g.addColorStop(1,'#063626');c.fillStyle=g;c.fillRect(0,0,W,H);}
  // stadium glow and fine diagonal stripes from approved blue/green design
  c.save();c.globalAlpha=.10;c.fillStyle=ACC;
  c.beginPath();c.moveTo(0,0);c.lineTo(34,0);c.lineTo(0,96);c.fill();
  c.restore();
  line(c,22,0,22,H,ACC,3);line(c,W-22,0,W-22,H,ACC,3);
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'rgba(0,10,21,.13)');g.addColorStop(.48,'rgba(0,9,23,.15)');g.addColorStop(1,'rgba(0,9,20,.3)');c.fillStyle=g;c.fillRect(0,0,W,H);
}
async function header(c,e){
  const logo=await picture('assets/brand/icon-512.png');
  if(logo)imageFit(c,logo,70,40,106,106);
  else{rounded(c,70,43,100,100,16,'#0e3c2e',ACC);text(c,'HM',120,93,45,ACC,'center');}
  text(c,'HANK',198,80,62,WHITE,'left',390,900);
  text(c,'MANAGER',414,80,62,ACC,'left',500,900);
  text(c,'GESTISCI · ALLENA · VINCI',200,128,23,'#f5f9ff','left',620,700);
  const competition=((e.competition==='Personalizza'?e.customCompetition:e.competition)||e.type||'PARTITA').toUpperCase();
  text(c,competition,540,195,27,'#f4faff','center',900,800);
  const date=e.date?formatDate(e.date).toUpperCase():'DATA DA DEFINIRE';
  text(c,`${date}${e.time?'   ◷ '+e.time:''}`,540,238,31,WHITE,'center',900,800);
  text(c,`⌖  ${(e.venue||e.field||'CAMPO DA DEFINIRE').toUpperCase()}`,540,281,26,WHITE,'center',900,800);
}
function title(c,s,y,size=89){
  c.save();c.shadowColor='rgba(0,0,0,.65)';c.shadowBlur=13;c.shadowOffsetY=5;
  text(c,s,540,y,size,WHITE,'center',1000,900);c.restore();
}
async function versus(c,e,top=495,score=null){
  const names=teamDisplayNamesV52(e);
  const homeLogo=getClubLogo();
  const oppLogo=getOpponentLogo(e.opponent||'')||getOpponentLogoV52(e.opponent||'');
  await crest(c,homeLogo,names.home,207,top+86,138);
  await crest(c,oppLogo,names.away,874,top+86,138);
  if(score===null){text(c,'VS',540,top+85,52,ACC,'center',180,900);}
  else{text(c,score,540,top+100,128,ACC,'center',430,900);}
  text(c,names.home.toUpperCase(),207,top+195,33,WHITE,'center',360,900);
  text(c,names.away.toUpperCase(),874,top+195,33,WHITE,'center',360,900);
  line(c,94,top+240,986,top+240,'rgba(92,255,140,.5)',2);
}
function sponsorLayout(sponsors){
  if(!sponsors.length)return {top:1845,height:0,rows:0,perRow:4};
  const perRow=4,rows=Math.ceil(sponsors.length/perRow);
  const cellH=rows>3?75:95;
  const height=36+rows*cellH;
  return {top:H-height-24,height,rows,perRow,cellH};
}
async function sponsors(c){
  const items=Array.isArray(state.branding?.sponsors)?state.branding.sponsors:[];
  const b=sponsorLayout(items);if(!items.length)return b;
  rounded(c,40,b.top,1000,b.height,17,'rgba(1,11,18,.94)');
  line(c,64,b.top,1016,b.top,ACC,2);
  const logos=await Promise.all(items.map(s=>picture(s.logo)));
  for(let r=0;r<b.rows;r++){
    const row=items.slice(r*4,r*4+4),cellW=220,gap=12;
    const start=(W-(row.length*cellW+(row.length-1)*gap))/2;
    for(let i=0;i<row.length;i++){
      const s=row[i],x=start+i*(cellW+gap),y=b.top+14+r*b.cellH;
      const img=logos[r*4+i];
      if(img)imageFit(c,img,x+75,y+1,70,b.cellH*.49);
      else {text(c,'◆',x+110,y+28,32,ACC,'center',160);}
      text(c,String(s.name||'SPONSOR').toUpperCase(),x+110,y+b.cellH-26,17,WHITE,'center',208,700);
    }
  }
  return b;
}
function surname(p){return String(p?.name||'').trim().split(/\s+/).slice(-1)[0].toUpperCase()||'GIOCATORE';}
function roster(c,e,sponsorTop){
  const players=sortedCallupPlayersV52(e),start=760,stop=sponsorTop-40;
  const n=Math.ceil(players.length/2);
  if(!players.length){text(c,'Convocazioni non ancora inserite',540,960,35,WHITE,'center');return;}
  const available=stop-start, rowH=Math.min(66,available/Math.max(1,n));
  rounded(c,70,start-20,940,Math.min(available+20,n*rowH+36),20,'rgba(0,16,26,.82)','rgba(90,255,136,.6)');
  line(c,540,start,540,start+n*rowH-3,'rgba(90,255,136,.42)',2);
  players.forEach((p,i)=>{
    const col=i<n?0:1,row=i<n?i:i-n,x=100+col*480,y=start+row*rowH;
    if(row)line(c,x,y-4,x+430,y-4,'rgba(255,255,255,.13)',1);
    rounded(c,x,y+3,58,rowH-9,8,'rgba(0,117,72,.72)');
    text(c,p.number||'–',x+29,y+rowH/2,Math.min(30,rowH*.53),ACC,'center',54,900);
    text(c,surname(p),x+79,y+rowH/2,Math.min(31,rowH*.52),WHITE,'left',345,800);
  });
}
function pitch(c,x,y,w,h){
  let g=c.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#124c35');g.addColorStop(.5,'#0c633c');g.addColorStop(1,'#063721');
  rounded(c,x,y,w,h,12,g,'rgba(150,255,176,.55)');
  c.save();c.beginPath();c.rect(x,y,w,h);c.clip();
  for(let i=0;i<10;i++){c.fillStyle=i%2?'rgba(255,255,255,.02)':'rgba(0,0,0,.07)';c.fillRect(x,y+i*h/10,w,h/10);}
  c.strokeStyle='rgba(225,255,238,.75)';c.lineWidth=3;
  c.strokeRect(x+15,y+15,w-30,h-30);
  line(c,x+15,y+h/2,x+w-15,y+h/2,'rgba(225,255,238,.75)',3);
  c.beginPath();c.arc(x+w/2,y+h/2,83,0,Math.PI*2);c.stroke();
  c.strokeRect(x+w*.27,y+15,w*.46,h*.17);
  c.strokeRect(x+w*.27,y+h*.83-15,w*.46,h*.17);
  c.restore();
}
function shirt(c,x,y,number,gk=false){
  c.save();c.translate(x,y);
  c.shadowColor='rgba(0,0,0,.65)';c.shadowBlur=9;
  c.beginPath();c.moveTo(-25,-27);c.lineTo(-45,-18);c.lineTo(-53,8);c.lineTo(-37,19);c.lineTo(-28,7);c.lineTo(-28,34);c.lineTo(28,34);c.lineTo(28,7);c.lineTo(37,19);c.lineTo(53,8);c.lineTo(45,-18);c.lineTo(25,-27);c.quadraticCurveTo(0,-14,-25,-27);c.closePath();
  c.fillStyle=gk?'#d9b22e':'#052a22';c.fill();c.strokeStyle=ACC;c.lineWidth=3;c.stroke();
  c.shadowBlur=0;text(c,number||'–',0,6,31,WHITE,'center',65,900);c.restore();
}
function formation(c,e,sponsorTop){
  ensureEventLineup(e);
  const formationName=e.lineup?.formation||'4-3-3';
  rounded(c,400,742,280,52,14,ACC);
  text(c,'MODULO '+formationName,540,768,31,'#021825','center',260,900);
  const py=815,ph=Math.min(680,sponsorTop-1170),px=68,pw=944;
  pitch(c,px,py,pw,ph);
  const slots=FORMATION_PRESETS[formationName]||FORMATION_PRESETS['4-3-3'];
  const assigned=e.lineup?.slotAssignments||{};
  let count=0;
  slots.forEach((slot,i)=>{
    const p=state.players.find(p=>String(p.id)===String(assigned[i]));if(!p)return;
    count++;
    const x=px+75+(pw-150)*slot[0]/100;
    const y=py+65+(ph-145)*slot[1]/100;
    shirt(c,x,y,p.number,i===0);
    rounded(c,x-81,y+43,162,32,5,'rgba(0,12,19,.96)');
    text(c,surname(p),x,y+59,19,WHITE,'center',152,900);
  });
  if(!count)text(c,'FORMAZIONE NON ANCORA INSERITA',540,py+ph/2,30,WHITE,'center',850);
  const boxY=py+ph+22,boxH=Math.max(110,sponsorTop-boxY-24);
  rounded(c,68,boxY,944,boxH,12,'rgba(0,11,21,.93)','rgba(90,255,136,.4)');
  text(c,'TITOLARI',105,boxY+34,29,ACC,'left',400);
  text(c,'RISERVE',576,boxY+34,29,CYAN,'left',400);
  line(c,539,boxY+15,539,boxY+boxH-15,'rgba(90,255,136,.35)');
  const {starters,bench}=lineupPlayersV52(e);
  function names(players,x,y,width,height){
    const n=Math.ceil(players.length/2),maxRows=Math.max(1,n),step=Math.min(36,(height-60)/maxRows);
    players.forEach((p,i)=>{
      const col=i<n?0:1,row=i<n?i:i-n,cx=x+col*(width/2),cy=y+60+row*step;
      text(c,p.number||'–',cx,cy,19,ACC,'left',32,900);
      text(c,surname(p),cx+37,cy,19,WHITE,'left',width/2-46,700);
    });
  }
  names(starters,105,boxY,412,boxH);names(bench,576,boxY,405,boxH);
}
function goalGroups(e){
  const all=allMatchEvents(e).filter(ev=>['goal','gol','rigore segnato'].includes(String(ev.type||'').toLowerCase()));
  const groups=new Map();
  all.forEach(ev=>{
    const id=String(ev.playerId??'')||'unknown',name=playerNameById(ev.playerId);
    const key=id==='unknown'?name:id;
    if(!groups.has(key))groups.set(key,{name,minutes:[],count:0});
    const g=groups.get(key);g.count++;
    if(ev.minute!==undefined && String(ev.minute).trim()!=='')g.minutes.push(String(ev.minute).trim().replace(/'+$/,'')+"'");
  });
  return [...groups.values()].sort((a,b)=>{
    const av=parseInt(a.minutes[0],10),bv=parseInt(b.minutes[0],10);
    return (Number.isFinite(av)?av:999)-(Number.isFinite(bv)?bv:999);
  });
}
function goals(c,e,sponsorTop){
  const groups=goalGroups(e),top=850,bottom=sponsorTop-30;
  rounded(c,86,top,908,bottom-top,16,'rgba(0,12,23,.87)','rgba(90,255,136,.35)');
  text(c,'MARCATORI',540,top+45,37,ACC,'center',800,900);
  line(c,122,top+81,958,top+81,'rgba(90,255,136,.55)');
  if(!groups.length){text(c,'Nessun marcatore registrato',540,top+180,31,WHITE,'center',790);return;}
  const avail=bottom-top-112;
  const cols=groups.length>12?2:1;
  const perCol=Math.ceil(groups.length/cols);
  const rowH=Math.min(71,avail/perCol);
  const size=Math.min(30,rowH*.47);
  groups.forEach((g,i)=>{
    const col=Math.floor(i/perCol),row=i%perCol,baseX=cols===1?130:116+col*460;
    const y=top+115+row*rowH,blockW=cols===1?820:424;
    if(row)line(c,baseX,y-8,baseX+blockW,y-8,'rgba(255,255,255,.14)',1);
    const minute=g.minutes.join(' ');
    const minuteW=cols===1?245:165;
    text(c,minute||'⚽',baseX,y+rowH/2,Math.min(size,27),ACC,'left',minuteW,900);
    const count=g.count>1?'  ×'+g.count:'';
    text(c,g.name.toUpperCase()+count,baseX+minuteW,y+rowH/2,size,WHITE,'left',blockW-minuteW-8,800);
  });
}
async function create(type,e){
  const canvas=document.createElement('canvas');canvas.width=W*2;canvas.height=H*2;
  const c=canvas.getContext('2d');c.scale(2,2);
  await backdrop(c);await header(c,e);
  const s=sponsorLayout(Array.isArray(state.branding?.sponsors)?state.branding.sponsors:[]);
  if(type==='callups'){
    title(c,'CONVOCATI',385,112);
    await versus(c,e,475);
    roster(c,e,s.top);
  }else if(type==='lineup'){
    title(c,'FORMAZIONE UFFICIALE',370,75);
    await versus(c,e,433);
    formation(c,e,s.top);
  }else if(type==='result'){
    title(c,'RISULTATO FINALE',385,90);
    const isAway=e.homeAway==='Trasferta';
    const score=`${Number(isAway?e.awayScore:e.homeScore)||0} - ${Number(isAway?e.homeScore:e.awayScore)||0}`;
    await versus(c,e,480,score);
    goals(c,e,s.top);
  }else throw new Error('Template social non valido');
  await sponsors(c);
  return canvas;
}
window.createShareCanvasV52=create;
window.HankSocialV54={create,goalGroups,sponsorLayout};
})();
