document.documentElement.classList.add('js');
// Cursor: dot follows instantly, ring follows with delay
const cd=document.querySelector('.cd'),cr=document.querySelector('.cr');let mx=0,my=0,rx=0,ry=0;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cd.style.transform=`translate(${mx}px,${my}px)`});
(function l(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;cr.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(l)})();
// Typing
const R=['a Problem Solver','an ML Enthusiast','a Python Developer'];let ri=0,ci=0,del=0;const ty=document.getElementById('ty');
(function t(){const w=R[ri];ci+=del?-1:1;ty.textContent=w.slice(0,ci);let s=del?55:110;
if(!del&&ci==w.length){del=1;s=1800}else if(del&&ci==0){del=0;ri=(ri+1)%R.length;s=500}setTimeout(t,s)})();
// Certificates (add images as certs/1.png, certs/2.png ...)
const C=[['fa-briefcase','Software Engineering Job Simulation','JPMorgan Chase & Co. (Forage)'],['fa-building','Technology Job Simulation','Deloitte (Forage)'],['fa-database','Introduction to Data Science Job Simulation','Commonwealth Bank (Forage)'],['fa-brands fa-google','Google AI Essentials','Google, Coursera','https://www.credly.com/badges/55d2793c-3941-48ed-9a39-5656b44621db/linked_in?t=tfrz62'],['fa-robot','What Is Generative AI?','LinkedIn Learning'],['fa-brands fa-kaggle','Python (Kaggle Course)','Kaggle'],['fa-brands fa-java','Java (Basic)','HackerRank'],['fa-chart-line','Data Analytics Job Simulation','Deloitte (Forage)']];
const fb=(i)=>`<img src="certs/${i}.png" onerror="this.replaceWith(Object.assign(document.createElement('p'),{textContent:'Certificate coming soon'}))">`;
trk.innerHTML=C.map((c,i)=>`<div class="fl"${c[3]?` onclick="window.open('${c[3]}','_blank')" title="Click to verify"`:''}><div class="fi"><div class="ff"><i class="fa ${c[0]}"></i><h4>${c[1]}</h4><p>${c[2]}</p><span>Hover to View</span></div><div class="fk">${fb(i+1)}</div></div></div>`).join('');
const pages=Math.ceil(C.length/3);let pg=0;dots.innerHTML='<b></b>'.repeat(pages);
function go(p){pg=(p+pages)%pages;if(innerWidth>900)trk.style.transform=`translateX(calc(${-pg}*(100% + 24px)))`;[...dots.children].forEach((d,i)=>d.className=i==pg?'on':'')}
pv.onclick=()=>go(pg-1);nx.onclick=()=>go(pg+1);go(0);setInterval(()=>go(pg+1),6000);
// Skills
const S=[['python','Python','My go-to for building ML models and developing backend APIs for my projects.'],['java','Java','Applied OOP principles for competitive programming and building robust applications.'],['html5','HTML5','Built the structure and foundation for all my web-based projects.'],['css3','CSS3','Created responsive, modern, and animated user interfaces for web apps.'],['javascript','JavaScript','Used for creating dynamic and interactive front-end experiences for web applications.'],['git','Git','Managing all my projects with version control for seamless collaboration and tracking.'],['github','GitHub','Hosting my code and deploying websites with GitHub Pages.'],['vscode','VS Code','My main editor for writing and debugging code every day.']];
sk.innerHTML=S.map(s=>`<div class="fl"><div class="fi"><div class="ff"><img src="images/skills/${s[0]}.svg" ${s[0]=='github'?'style="filter:invert(1)"':''}><h4>${s[1]}</h4></div><div class="fk"><div><h4>${s[1]}</h4><p>${s[2]}</p></div></div></div></div>`).join('');
// Reveal + active nav
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.15});document.querySelectorAll('.rv,.tl').forEach(x=>io.observe(x));
const links=[...document.querySelectorAll('nav ul a')];const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle('act',a.getAttribute('href')=='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section').forEach(s=>so.observe(s));
document.querySelectorAll('nav ul a').forEach(a=>a.onclick=()=>document.querySelector('nav ul').classList.remove('o'));
f.onsubmit=e=>{e.preventDefault();location.href=`mailto:m.vamsidhar20061@gmail.com?subject=Portfolio message from ${encodeURIComponent(n.value)}&body=${encodeURIComponent(m.value+'\n\nFrom: '+e2())}`};const e2=()=>document.getElementById('e').value;
// Count-up for total problems solved
document.querySelectorAll('.num').forEach(el=>new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();const to=+el.dataset.to;let c=0;const t=setInterval(()=>{el.textContent=++c;if(c>=to)clearInterval(t)},60)}},{threshold:.5}).observe(el));
// headings: observer with threshold 0 (clipped text has tiny visible area)
document.querySelectorAll('h2.t.rv').forEach(t=>new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){t.classList.add('in');o.disconnect()}},{threshold:0,rootMargin:'0px 0px -15% 0px'}).observe(t));
// Popup viewer for certificates and resume: fits the screen, click anywhere to close
const lb=document.createElement('div');lb.id='lb';lb.innerHTML='<button class="x" aria-label="Close">&times;</button><img alt=""><a class="btn bf lbd" download="Vamsidhar_Reddy_Resume.pdf"><i class="fa fa-download"></i> Download PDF</a><p>Click anywhere to close</p>';document.body.appendChild(lb);
const lbi=lb.querySelector('img'),lbd=lb.querySelector('.lbd'),pdfHref=()=>typeof RES!=='undefined'?RES:'Vamsidhar_Reddy_Resume.pdf';
const openLb=(s,res)=>{lbi.src=s;lbd.style.display=res?'inline-flex':'none';if(res)lbd.href=pdfHref();lb.classList.add('on');document.body.style.overflow=document.documentElement.style.overflow='hidden'};
const closeLb=()=>{lb.classList.remove('on');document.body.style.overflow=document.documentElement.style.overflow=''};
lb.onclick=closeLb;lbd.onclick=e=>e.stopPropagation();addEventListener('keydown',e=>e.key==='Escape'&&closeLb());
document.querySelectorAll('[data-c]').forEach(a=>a.onclick=e=>{e.preventDefault();const k=a.dataset.c,res=k==='resume';
openLb((typeof CI!=='undefined'&&CI[k])||(res?'images/resume.png':'certs/'+k+'.png'),res);
if(res){const d=document.createElement('a');d.href=pdfHref();d.download='Vamsidhar_Reddy_Resume.pdf';document.body.appendChild(d);d.click();d.remove()}});

// ===== v2 polish =====
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
// background: soft red particle network (reacts to mouse, pauses when tab is hidden)
(()=>{const cv=document.getElementById('bg'),x=cv.getContext('2d');if(rm)return;let w,h,P=[],m={x:-999,y:-999};
const init=()=>{const d=devicePixelRatio||1;w=innerWidth;h=innerHeight;cv.width=w*d;cv.height=h*d;x.setTransform(d,0,0,d,0,0);
P=Array.from({length:Math.min(60,Math.floor(w/26))},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};
addEventListener('resize',init);addEventListener('mousemove',e=>{m.x=e.clientX;m.y=e.clientY});init();
(function f(){if(!document.hidden){x.clearRect(0,0,w,h);P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
x.fillStyle='rgba(229,9,20,.55)';x.beginPath();x.arc(p.x,p.y,1.5,0,7);x.fill();
for(let k=i+1;k<P.length;k++){const q=P[k],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<125){x.strokeStyle=`rgba(229,9,20,${(1-d/125)*.22})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}
const dm=Math.hypot(p.x-m.x,p.y-m.y);if(dm<150){x.strokeStyle=`rgba(255,106,61,${(1-dm/150)*.4})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}})}requestAnimationFrame(f)})()})();
// scroll progress, header shrink, back-to-top
const pr=document.querySelector('.prog'),hd=document.querySelector('header'),tp=document.getElementById('top');
const onS=()=>{const s=scrollY,m=document.documentElement.scrollHeight-innerHeight;pr.style.width=(m>0?s/m*100:0)+'%';hd.classList.toggle('sc',s>40);tp.classList.toggle('show',s>600)};
addEventListener('scroll',onS,{passive:true});onS();tp.onclick=()=>scrollTo({top:0,behavior:'smooth'});
// 3D tilt + red spotlight on project and stat cards
if(!rm&&matchMedia('(pointer:fine)').matches)document.querySelectorAll('.pj,.st a').forEach(c=>{
c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
c.style.setProperty('--mx',px*100+'%');c.style.setProperty('--my',py*100+'%');c.style.transform=`perspective(900px) rotateX(${(.5-py)*5}deg) rotateY(${(px-.5)*5}deg) scale(1.015)`});
c.addEventListener('mouseleave',()=>{c.style.transform=''})});
// magnetic buttons
if(!rm&&matchMedia('(pointer:fine)').matches)document.querySelectorAll('.cta .btn,.soc a').forEach(b=>{
b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});
b.addEventListener('mouseleave',()=>{b.style.transform=''})});
// hero stats count-up
document.querySelectorAll('.hs b').forEach(el=>new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();const to=+el.dataset.to,s=el.dataset.s||'';let c=0;const t=setInterval(()=>{el.textContent=++c+(c>=to?s:'');if(c>=to)clearInterval(t)},90)}},{threshold:.5}).observe(el));
// profile photo: click = pop with glow and ripple, mouse = soft 3D tilt
(()=>{const w=document.querySelector('.phw'),p=w&&w.querySelector('.ph');if(!w)return;let t;
w.addEventListener('click',()=>{w.classList.remove('pop');void w.offsetWidth;w.classList.add('pop');clearTimeout(t);t=setTimeout(()=>w.classList.remove('pop'),1000)});
if(!rm&&matchMedia('(pointer:fine)').matches){w.addEventListener('mousemove',e=>{const r=w.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.setProperty('--ry',x*4+'deg');p.style.setProperty('--rx',-y*4+'deg')});
w.addEventListener('mouseleave',()=>{p.style.setProperty('--rx','0deg');p.style.setProperty('--ry','0deg')})}})();
