const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const h = document.getElementById('headline');
h.innerHTML = h.textContent.trim().split(' ').map(w=>`<span class="w"><span>${w}</span></span>`).join(' ');
if (!reduced && window.gsap){
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('h1 .w > span',{y:0,duration:.9,ease:'power3.out',stagger:.07,delay:.2});
  gsap.to('.hero-img img',{yPercent:8,ease:'none',scrollTrigger:{trigger:'header',start:'top top',end:'bottom top',scrub:true}});
  gsap.utils.toArray('.rv').forEach(el=>{
    gsap.to(el,{opacity:1,y:0,duration:.48,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 85%'}});
  });
  gsap.utils.toArray('#gal figure').forEach((f,i)=>{
    gsap.fromTo(f,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:.7,ease:'power3.out',delay:(i%4)*.1,scrollTrigger:{trigger:f,start:'top 88%'}});
  });
} else {
  document.querySelectorAll('.rv').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
  document.querySelectorAll('h1 .w > span').forEach(s=>s.style.transform='none');
}

if (matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('mousemove',e=>{
      const r=c.getBoundingClientRect();
      c.style.setProperty('--mx',(e.clientX-r.left)+'px');
      c.style.setProperty('--my',(e.clientY-r.top)+'px');
    });
  });
}

const lb=document.getElementById('lb'),lbimg=document.getElementById('lbimg');
document.querySelectorAll('#gal img').forEach(img=>{
  img.closest('figure').addEventListener('click',()=>{lbimg.src=img.src;lbimg.alt=img.alt;lb.showModal()});
});
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});

const form=document.getElementById('leadform');
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const btn=form.querySelector('button');btn.disabled=true;btn.textContent='Enviando…';
  try{
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
    if(res.ok){form.querySelector('#formok').style.display='block';form.reset();btn.textContent='Enviado';}
    else throw 0;
  }catch{btn.disabled=false;btn.textContent='Quiero más información';alert('No se pudo enviar. Escríbenos por WhatsApp: 477 406 4268');}
});
