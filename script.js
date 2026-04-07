const SERVICES=[
  {id:'aadhaar',cat:'identity',icon:'fa-id-card',col:'#ff6b00',ib:'rgba(255,107,0,.12)',title:'Aadhaar Card',pill:'Live',pt:'p-live',desc:'Apply, update name/address/mobile or download e-Aadhaar instantly.',url:'https://uidai.gov.in/',site:'uidai.gov.in'},
  {id:'pan',cat:'tax',icon:'fa-credit-card',col:'#22c55e',ib:'rgba(34,197,94,.12)',title:'PAN Card',pill:'Fast',pt:'p-fast',desc:'Apply new PAN, correction, reprint or link PAN with Aadhaar.',url:'https://onlineservices.proteantech.in/paam/endUserRegisterContact.html',site:'proteantech.in'},
  {id:'voter',cat:'identity',icon:'fa-vote-yea',col:'#3b82f6',ib:'rgba(59,130,246,.12)',title:'Voter ID (EPIC)',pill:'Live',pt:'p-live',desc:'New registration, correction, address change or download e-EPIC.',url:'https://voters.eci.gov.in/',site:'voters.eci.gov.in'},
  {id:'passport',cat:'travel',icon:'fa-passport',col:'#6366f1',ib:'rgba(99,102,241,.12)',title:'Passport',pill:'Live',pt:'p-live',desc:'Apply new, re-issue or Tatkal passport and book appointment.',url:'https://www.passportindia.gov.in/',site:'passportindia.gov.in'},
  {id:'dl',cat:'transport',icon:'fa-car',col:'#f59e0b',ib:'rgba(245,158,11,.12)',title:'Driving Licence',pill:'New',pt:'p-new',desc:"Learner's Licence, permanent DL, renewal or duplicate DL.",url:'https://sarathi.parivahan.gov.in/',site:'sarathi.parivahan.gov.in'},
  {id:'rc',cat:'transport',icon:'fa-motorcycle',col:'#0ea5e9',ib:'rgba(14,165,233,.12)',title:'Vehicle RC',pill:'Live',pt:'p-live',desc:'Register vehicle, renew RC, transfer ownership or get NOC.',url:'https://vahan.parivahan.gov.in/',site:'vahan.parivahan.gov.in'},
  {id:'itr',cat:'tax',icon:'fa-file-invoice',col:'#f97316',ib:'rgba(249,115,22,.12)',title:'Income Tax (ITR)',pill:'Live',pt:'p-live',desc:'File ITR online, check refund status, view Form 26AS.',url:'https://www.incometax.gov.in/',site:'incometax.gov.in'},
  {id:'gst',cat:'tax',icon:'fa-receipt',col:'#10b981',ib:'rgba(16,185,129,.12)',title:'GST Registration',pill:'Live',pt:'p-live',desc:'Register for GST, file returns or check GST number status.',url:'https://www.gst.gov.in/',site:'gst.gov.in'},
  {id:'digilocker',cat:'identity',icon:'fa-folder-open',col:'#8b5cf6',ib:'rgba(139,92,246,.12)',title:'DigiLocker',pill:'Free',pt:'p-free',desc:'Store DL, RC, Aadhaar, marksheets digitally — government-issued.',url:'https://www.digilocker.gov.in/',site:'digilocker.gov.in'},
  {id:'epf',cat:'welfare',icon:'fa-piggy-bank',col:'#6366f1',ib:'rgba(99,102,241,.12)',title:'EPF / PF',pill:'Live',pt:'p-live',desc:'Check PF balance, UAN activation, withdrawal or transfer claim.',url:'https://unifiedportal-mem.epfindia.gov.in/',site:'epfindia.gov.in'},
  {id:'ration',cat:'welfare',icon:'fa-box-open',col:'#16a34a',ib:'rgba(22,163,74,.12)',title:'Ration Card',pill:'Live',pt:'p-live',desc:'Apply, add members or check status on national food portal.',url:'https://nfsa.gov.in/',site:'nfsa.gov.in'},
  {id:'ayushman',cat:'welfare',icon:'fa-hospital',col:'#ef4444',ib:'rgba(239,68,68,.12)',title:'Ayushman Bharat',pill:'Free',pt:'p-free',desc:'Check eligibility, enroll and get health card for ₹5 Lakh coverage.',url:'https://pmjay.gov.in/',site:'pmjay.gov.in'},
  {id:'scholarship',cat:'welfare',icon:'fa-graduation-cap',col:'#a78bfa',ib:'rgba(167,139,250,.12)',title:'Scholarships (NSP)',pill:'New',pt:'p-new',desc:'Central & state scholarships for SC/ST/OBC/Minority students.',url:'https://scholarships.gov.in/',site:'scholarships.gov.in'},
  {id:'pmkisan',cat:'welfare',icon:'fa-seedling',col:'#22c55e',ib:'rgba(34,197,94,.12)',title:'PM Kisan',pill:'Free',pt:'p-free',desc:'Register, check payment status for ₹6000/year farmer benefit.',url:'https://pmkisan.gov.in/',site:'pmkisan.gov.in'},
  {id:'eshram',cat:'welfare',icon:'fa-hard-hat',col:'#fb923c',ib:'rgba(251,146,60,.12)',title:'e-Shram Card',pill:'Free',pt:'p-free',desc:'Register as unorganized worker and get e-Shram UAN card.',url:'https://eshram.gov.in/',site:'eshram.gov.in'},
  {id:'apsrtc',cat:'travel',icon:'fa-bus',col:'#0ea5e9',ib:'rgba(14,165,233,.12)',title:'APSRTC Bus Pass',pill:'Live',pt:'p-live',desc:'Book APSRTC tickets or apply for student/senior concession pass.',url:'https://www.apsrtconline.in/oprs-web/guest/home.do?h=1',site:'apsrtconline.in'},
  {id:'tgsrtc',cat:'travel',icon:'fa-bus',col:'#f59e0b',ib:'rgba(245,158,11,.12)',title:'TGSRTC Bus Pass',pill:'Live',pt:'p-live',desc:'Book Telangana RTC tickets or apply for concession bus pass.',url:'https://www.tgsrtcbus.in/',site:'tgsrtcbus.in'},
  {id:'umang',cat:'identity',icon:'fa-mobile-alt',col:'#14b8a6',ib:'rgba(20,184,166,.12)',title:'UMANG Portal',pill:'Free',pt:'p-free',desc:'Access 2500+ government services in one app — PF, Aadhaar & more.',url:'https://web.umang.gov.in/',site:'umang.gov.in'},
  {id:'cowin',cat:'welfare',icon:'fa-syringe',col:'#ef4444',ib:'rgba(239,68,68,.12)',title:'CoWIN Vaccination',pill:'Free',pt:'p-free',desc:'Book vaccination slot or download your vaccination certificate.',url:'https://www.cowin.gov.in/',site:'cowin.gov.in'},
  {id:'birth',cat:'civil',icon:'fa-baby',col:'#ec4899',ib:'rgba(236,72,153,.12)',title:'Birth Certificate',pill:'Live',pt:'p-live',desc:'Apply for new birth certificate or duplicate via civil registration.',url:'https://crsorgi.gov.in/',site:'crsorgi.gov.in'},
  /* ── Travel ── */
  {id:'irctc',cat:'travel',icon:'fa-train',col:'#0ea5e9',ib:'rgba(14,165,233,.12)',title:'IRCTC Rail Booking',pill:'Live',pt:'p-live',desc:'Book train tickets, check PNR status, cancel or reschedule journeys.',url:'https://www.irctc.co.in/',site:'irctc.co.in'},
  {id:'ttd',cat:'travel',icon:'fa-place-of-worship',col:'#f97316',ib:'rgba(249,115,22,.12)',title:'TTD Tirumala ',pill:'Live',pt:'p-live',desc:'Book Tirumala darshan slots, accommodation and prasadam online.',url:'https://ttdevasthanams.ap.gov.in/home/dashboard',site:'tirupatibalaji.ap.gov.in'},
  /* ── Gas ── */
  {id:'hpgas',cat:'gas',icon:'fa-fire-flame-curved',col:'#f97316',ib:'rgba(249,115,22,.12)',title:'HP Gas',pill:'Live',pt:'p-live',desc:'Book HP LPG cylinder refill, new connection or check subsidy status.',url:'https://hindustanpetroleum.com/hpgas',site:'hindustanpetroleum.com'},
  {id:'bharatgas',cat:'gas',icon:'fa-fire-flame-curved',col:'#ef4444',ib:'rgba(239,68,68,.12)',title:'Bharat Gas',pill:'Live',pt:'p-live',desc:'Book Bharat Gas cylinder, apply new connection or track subsidy.',url:'https://my.bharatgas.com/',site:'my.bharatgas.com'},
  {id:'indane',cat:'gas',icon:'fa-fire-flame-curved',col:'#f59e0b',ib:'rgba(245,158,11,.12)',title:'Indian Gas (IOC)',pill:'Live',pt:'p-live',desc:'Book Indane LPG refill, new connection or check delivery status.',url:'https://cx.indianoil.in/civicportal/faces/Login.jspx',site:'indianoil.in'},
  /* ── Power ── */
  {id:'apspdcl',cat:'power',icon:'fa-bolt',col:'#facc15',ib:'rgba(250,204,21,.12)',title:'APSPDCL (AP South)',pill:'Live',pt:'p-live',desc:'Pay AP Southern Power Distribution electricity bill and check status.',url:'https://www.apspdcl.in/',site:'apspdcl.in'},
  {id:'apepdcl',cat:'power',icon:'fa-bolt',col:'#eab308',ib:'rgba(234,179,8,.12)',title:'APEPDCL (AP East)',pill:'Live',pt:'p-live',desc:'Pay AP Eastern Power Distribution electricity bill online.',url:'https://www.apeasternpower.com/',site:'apeasternpower.com'},
  {id:'tsspdcl',cat:'power',icon:'fa-bolt',col:'#10b981',ib:'rgba(16,185,129,.12)',title:'TSSPDCL (TG)',pill:'Live',pt:'p-live',desc:'Pay Telangana Southern electricity bill, check outage or new connection.',url:'https://tgsouthernpower.org/',site:'tgsouthernpower.org'},
  
  /* ── Welfare ── */
  {id:'skillindia',cat:'welfare',icon:'fa-tools',col:'#8b5cf6',ib:'rgba(139,92,246,.12)',title:'Skill India',pill:'Free',pt:'p-free',desc:'Find skill development courses, certified training centers nationwide.',url:'https://www.skillindia.gov.in/',site:'skillindia.gov.in'},
  /* ── Civil ── */
  {id:'meebhoomi',cat:'civil',icon:'fa-map',col:'#16a34a',ib:'rgba(22,163,74,.12)',title:'MeeBhoomi (AP)',pill:'Live',pt:'p-live',desc:'Check AP land records, Adangal, 1-B and pahani details online.',url:'https://meebhoomi.ap.gov.in/',site:'meebhoomi.ap.gov.in'},
  {id:'dharani',cat:'civil',icon:'fa-map-marked-alt',col:'#10b981',ib:'rgba(16,185,129,.12)',title:'Dharani (Telangana)',pill:'Live',pt:'p-live',desc:'Check Telangana land records, registration and mutation details.',url:'https://dharani.telangana.gov.in/',site:'dharani.telangana.gov.in'},
  {id:'apseva',cat:'civil',icon:'fa-hands-helping',col:'#f59e0b',ib:'rgba(245,158,11,.12)',title:'AP Seva Portal',pill:'Live',pt:'p-live',desc:'Access AP government services — certificates, welfare schemes and more.',url:'https://vswsonline.ap.gov.in/#/home',site:'vswsonline.ap.gov.in'},
  /* ── Jobs / Exams ── */
  {id:'sscgd',cat:'jobs',icon:'fa-shield-alt',col:'#3b82f6',ib:'rgba(59,130,246,.12)',title:'SSC GD Constable',pill:'New',pt:'p-new',desc:'Apply for SSC GD Constable exam, download admit card or check results.',url:'https://ssc.gov.in/',site:'ssc.gov.in'},
  {id:'rrb',cat:'jobs',icon:'fa-train',col:'#6366f1',ib:'rgba(99,102,241,.12)',title:'RRB Railway Jobs',pill:'New',pt:'p-new',desc:'Apply for RRB NTPC, Group D, ALP and other railway recruitment exams.',url:'https://www.rrbapply.gov.in/',site:'rrbapply.gov.in'},
  {id:'gds',cat:'jobs',icon:'fa-envelope-open-text',col:'#f59e0b',ib:'rgba(245,158,11,.12)',title:'India Post GDS',pill:'New',pt:'p-new',desc:'Apply for Gramin Dak Sevak recruitment — check eligibility and apply.',url:'https://indiapost.gov.in/gdsonlineengagement',site:'indiapost.gov.in'},
  {id:'apdet',cat:'jobs',icon:'fa-briefcase',col:'#0ea5e9',ib:'rgba(14,165,233,.12)',title:'AP Employment (DET)',pill:'Live',pt:'p-live',desc:'Register as job seeker with AP Directorate of Employment & Training.',url:'https://employment.ap.gov.in/LoginPage.aspx',site:'employment.ap.gov.in'},
  
];


let currentCat='all',pendingUrl='',pendingColor='#ff6b00';

/* ── RENDER ── */
function render(list){
  const g=document.getElementById('grid');
  if(!list.length){g.innerHTML=`<div class="no-res"><i class="fas fa-search"></i><p>No services found. Try a different keyword.</p></div>`;return;}
  g.innerHTML=list.map((s,i)=>`
    <div class="card" style="animation-delay:${i*.04}s" onclick="openPop('${s.id}')">
      <div class="card-top">
        <div class="c-icon" style="background:${s.ib}"><i class="fas ${s.icon}" style="color:${s.col};font-size:1.15rem"></i></div>
        <span class="c-pill ${s.pt}">${s.pill}</span>
      </div>
      <h3>${s.title}</h3>
      <p class="card-desc">${s.desc}</p>
      <div class="card-footer">
        <span class="c-site"><i class="fas fa-link"></i>${s.site}</span>
        <span class="c-arrow"><i class="fas fa-arrow-right" style="font-size:.65rem"></i></span>
      </div>
    </div>`).join('');
}

function applyFilters(){
  const q=document.getElementById('search').value.toLowerCase();
  let list=SERVICES;
  if(currentCat!=='all') list=list.filter(s=>s.cat===currentCat);
  if(q) list=list.filter(s=>s.title.toLowerCase().includes(q)||s.desc.toLowerCase().includes(q)||s.site.toLowerCase().includes(q));
  render(list);
}

function setCat(cat,el){
  currentCat=cat;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

/* ── SERVICE POPUP ── */
function openPop(id){
  const s=SERVICES.find(x=>x.id===id);if(!s) return;
  pendingUrl=s.url; pendingColor=s.col;
  const wrap=document.getElementById('pIconWrap');
  wrap.style.background=s.ib;wrap.style.borderRadius='18px';
  document.getElementById('pIcon').className=`fas ${s.icon}`;
  document.getElementById('pIcon').style.color=s.col;
  document.getElementById('pIcon').style.fontSize='1.7rem';
  document.getElementById('pTitle').textContent=s.title;
  document.getElementById('pDesc').textContent=`You'll be redirected to the official government website for ${s.title}.`;
  document.getElementById('pUrl').textContent='🌐 '+s.url;
  document.getElementById('overlay').classList.add('show');
}
function doGo(){window.open(pendingUrl,'_blank');closePopBtn();toast('✅ Redirecting to official site…');}
function closePopBtn(){document.getElementById('overlay').classList.remove('show');pendingUrl='';}
function closePop(e){if(e.target===document.getElementById('overlay')) closePopBtn();}

/* ── TOAST ── */
function toast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);
}

/* ── CLOCK ── */
function updateClock(){
  const now=new Date();
  const d=now.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});
  const ti=now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  document.getElementById('clock').innerHTML=`⏰ ${d} &nbsp;|&nbsp; ${ti}`;
}
setInterval(updateClock,1000);updateClock();

/* ── ALERT BANNER ── */
function closeAlert(){
  const b=document.getElementById('alertBanner');
  b.style.transition='max-height .3s ease,opacity .3s ease,padding .3s ease';
  b.style.maxHeight='0';b.style.opacity='0';b.style.padding='0';
  setTimeout(()=>b.style.display='none',320);
}

/* ── NAVBAR ── */
function toggleNav(){
  const m=document.getElementById('navMenu');
  const h=document.getElementById('hamburger');
  m.classList.toggle('open');
  h.classList.toggle('open');
}
function navClick(el){
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  el.classList.add('active');
  const m=document.getElementById('navMenu');
  const h=document.getElementById('hamburger');
  if(m.classList.contains('open')){m.classList.remove('open');h.classList.remove('open');}
}

/* ── MAP ── */
function loadMap(type,btn){
  document.querySelectorAll('.map-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('mapFrame').src=`https://maps.google.com/maps?q=${type}+near+Hyderabad&output=embed`;
}

/* ── SOS ── */
function openSOS(){document.getElementById('sosOverlay').classList.add('show');}
function closeSOS(e){if(!e||e.target===document.getElementById('sosOverlay')) document.getElementById('sosOverlay').classList.remove('show');}

/* ── VOLUNTEER POPUP ── */
function openVolunteer(){document.getElementById('volunteerOverlay').classList.add('show');}
function closeVolPop(e){if(!e||e.target===document.getElementById('volunteerOverlay')) document.getElementById('volunteerOverlay').classList.remove('show');}
function submitVol(){
  const n=document.getElementById('volName').value.trim();
  const p=document.getElementById('volPhone').value.trim();
  if(!n||!p){toast('⚠️ Please fill Name and Phone');return;}
  document.getElementById('volunteerOverlay').classList.remove('show');
  toast('✅ Thank you! We\'ll contact you soon.');
  document.getElementById('volName').value='';document.getElementById('volPhone').value='';
  document.getElementById('volCity').value='';document.getElementById('volSkill').value='';
}

/* ── REPORT POPUP ── */
function openReport(){document.getElementById('reportOverlay').classList.add('show');}
function closeReportPop(e){if(!e||e.target===document.getElementById('reportOverlay')) document.getElementById('reportOverlay').classList.remove('show');}
function submitReport(){
  const s=document.getElementById('repService').value.trim();
  const i=document.getElementById('repIssue').value.trim();
  if(!s||!i){toast('⚠️ Please fill Service and Issue fields');return;}
  document.getElementById('reportOverlay').classList.remove('show');
  toast('🚩 Issue reported. Thank you!');
  document.getElementById('repService').value='';document.getElementById('repIssue').value='';
  document.getElementById('repEmail').value='';
}

/* ── ANIMATED STATS COUNTER ── */
function animateCounters(){
  document.querySelectorAll('.stat .n[data-target]').forEach(el=>{
    const target=parseInt(el.dataset.target);
    if(!target) return;
    const suffix=el.dataset.suffix||'';
    let start=0;
    const step=Math.ceil(target/40);
    const interval=setInterval(()=>{
      start+=step;
      if(start>=target){start=target;clearInterval(interval);}
      el.textContent=start+suffix;
    },35);
  });
}

/* ── INIT ── */
render(SERVICES);

// Trigger counter animation when hero is visible
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){animateCounters();observer.disconnect();}});
},{threshold:0.3});
const statsEl=document.getElementById('statsSection');
if(statsEl) observer.observe(statsEl);


/* sos */

function openSOS(){document.getElementById('sosOverlay').classList.add('show');}
function closeSOS(e){if(!e||e.target===document.getElementById('sosOverlay')) document.getElementById('sosOverlay').classList.remove('show');}