// EIFA CalcioElite: official public team-logo URLs, accessed 2026-10-16.
// These are presentation assets only: no edits to localStorage, player data, or Supabase.
const HANK_DEFAULT_CLUB_LOGO='./assets/logos/maccabi-roma.png';
const HANK_EIFA_LOGO_BASE='https://gmfakkwwunygcsvtkfun.supabase.co/storage/v1/object/public/team-logos/';
const HANK_EIFA_TEAM_LOGOS={
  "atletico smistamento": "atletico-smistamento/logo-1785280521271.png",
  "atletico vermicino": "atletico-vermicino/logo-1785442685299.png",
  "borgorosso": "borgorosso-fc/logo-1784159320266.png",
  "crc": "crc/logo-1789464853230.webp",
  "fc palocco": "fc-palocco-2026/logo-1785282284484.png",
  "grifone": "grifone-legends/logo-1785281153916.png",
  "lokomotiv": "lokomotiv-roma/logo-1784451077889.webp",
  "milani": "milani-calcio/logo-1785281602189.png",
  "montagnola": "montagnola/logo-1785281773597.png",
  "real baseggio": "real-baseggio/logo-1787517586605.webp",
  "real macane": "real-macane/logo-1785284262336.png",
  "unicum": "unicum/logo-1785284975518.png",
  "union fb": "union-fb/logo-1785285099700.png"
};
function hankNormalizedTeamName(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase().replace(/\s+/g,' ');
}
function hankOpponentLogoUrl(name){
  const norm=hankNormalizedTeamName(name);
  if(!norm||norm==='da definire')return '';
  // Aliases reflect the opponent names recorded in the 2026/27 Hank calendar.
  const aliases={
    'fc palocco 2026':'fc palocco',
    'lokomotiv roma':'lokomotiv',
    'grifone legends':'grifone',
    'milani calcio':'milani',
    'borgorosso fc':'borgorosso'
  };
  const slug=HANK_EIFA_TEAM_LOGOS[aliases[norm]||norm];
  return slug?HANK_EIFA_LOGO_BASE+slug:'';
}
