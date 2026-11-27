// menu mobilne
(function(){
  var head=document.querySelector('.head'),b=document.querySelector('.burger');
  if(b){b.addEventListener('click',function(){var o=head.classList.toggle('otwarte');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');});
  document.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',function(){head.classList.remove('otwarte');b.setAttribute('aria-expanded','false');});});}
})();
// przewijanie palcem i myszą, strzałki
(function(){
  document.querySelectorAll('.tor,.okazje-lista').forEach(function(t){
    var x0=0,s0=0,ruch=false,wcisk=false;
    t.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;wcisk=true;ruch=false;x0=e.clientX;s0=t.scrollLeft;});
    window.addEventListener('pointermove',function(e){if(!wcisk)return;var dx=e.clientX-x0;if(Math.abs(dx)>5){ruch=true;t.classList.add('ciagnie');}if(ruch){t.scrollLeft=s0-dx;e.preventDefault();}});
    window.addEventListener('pointerup',function(){if(!wcisk)return;wcisk=false;setTimeout(function(){t.classList.remove('ciagnie');},30);});
    t.addEventListener('click',function(e){if(ruch){e.preventDefault();e.stopPropagation();ruch=false;}},true);
    t.addEventListener('dragstart',function(e){e.preventDefault();});
  });
  var tor=document.querySelector('.tor'),w=document.querySelector('.wstecz'),d=document.querySelector('.dalej');
  if(!tor||!w)return;
  function krok(){var k=tor.querySelector('.produkt');return k?k.getBoundingClientRect().width+20:300;}
  function stan(){w.disabled=tor.scrollLeft<5;d.disabled=tor.scrollLeft+tor.clientWidth>tor.scrollWidth-5;}
  w.addEventListener('click',function(){tor.scrollBy({left:-krok(),behavior:'smooth'});});
  d.addEventListener('click',function(){tor.scrollBy({left:krok(),behavior:'smooth'});});
  tor.addEventListener('scroll',stan,{passive:true});stan();
})();
