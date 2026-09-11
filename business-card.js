(() => {
  const trigger = document.querySelector('.card-trigger');
  if (!trigger || !window.HTMLDialogElement) return;
  const ko = document.documentElement.lang === 'ko';
  const t = (en, kr) => ko ? kr : en;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const dialog = document.createElement('dialog');
  dialog.className = 'club-dialog';
  dialog.setAttribute('aria-labelledby', 'club-title');
  dialog.innerHTML = `<div class="club-shell"><h2 id="club-title">${t('A little something to keep.','제 명함을 건네드립니다.')}</h2>
    <div class="card-table"><div class="card-carrier"><div class="card-hands" aria-hidden="true"><i><b class="wristwatch"></b></i><i></i></div>
      <div class="calling-card"><button class="card-reveal" type="button"><strong>Jisung Woo<span>.</span></strong><small>DATA ENGINEER &amp; AI BUILDER</small><span>${t('Take a closer look ↗','명함 자세히 보기 ↗')}</span></button>
      <div class="card-details" hidden><strong>Jisung Woo<span>.</span></strong><p>DATA ENGINEER &amp; AI BUILDER</p><a href="mailto:jisungwoo9@gmail.com">jisungwoo9@gmail.com ↗</a><a href="https://www.linkedin.com/in/jisung-woo" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://github.com/JisungWoo" target="_blank" rel="noopener">GitHub ↗</a></div></div></div><div class="customer-hands" aria-hidden="true"><i></i><i></i></div></div>
    <div class="club-farewell" hidden><div class="club-street" aria-hidden="true"><div class="street-world"><img src="assets/club-exit-street.svg" alt=""><div class="street-car"></div></div><div class="door-frame"><div class="exit-door"><span></span></div></div></div><h3>${t('Thanks for stopping by.','방문해 주셔서 감사합니다.')}</h3><p>${t('There’s always room for one more.','언제든 다시 들러 주세요.')}</p><button class="club-return" type="button">${t('Come back in','다시 들어가기')} ↗</button></div>
    <div class="club-controls"><button class="card-close" type="button">${t('Back to portfolio','포트폴리오로 돌아가기')}</button><button class="club-leave" type="button">${t('Leave Woo’s Club','클럽 나가기')} ↗</button></div></div>`;
  document.body.append(dialog);
  const table = dialog.querySelector('.card-table');
  const controls = dialog.querySelector('.club-controls');
  const farewell = dialog.querySelector('.club-farewell');
  const reveal = dialog.querySelector('.card-reveal');
  const details = dialog.querySelector('.card-details');
  let timer, busy = false;
  const reset = () => {
    clearTimeout(timer); busy = false;
    dialog.classList.remove('retracting', 'fading', 'departing', 'zoomed', 'collecting', 'returning');
    table.hidden = controls.hidden = false; farewell.hidden = true;
    reveal.hidden = false; details.hidden = true;
  };
  const close = () => {
    clearTimeout(timer); dialog.close(); reset();
    document.body.classList.remove('club-open'); trigger.focus({preventScroll:true});
  };
  const returnInside = () => {
    if (busy) return;
    if (reduced.matches) { close(); return; }
    busy = true;
    // Capture the current frame so an early return does not jump to the end of the exit.
    for (const [selector, key] of [['.door-frame','frame'], ['.street-world','street'], ['.exit-door','door']]) {
      const style = getComputedStyle(dialog.querySelector(selector));
      dialog.style.setProperty('--return-' + key, style.transform);
      if (key === 'frame') dialog.style.setProperty('--return-opacity', style.opacity);
    }
    dialog.classList.add('returning');
    timer = setTimeout(() => {
      dialog.classList.add('fading');
      timer = setTimeout(close, 350);
    }, 2500);
  };
  const withdraw = (leave = false) => {
    if (busy) return;
    if (!farewell.hidden) { returnInside(); return; }
    busy = true; dialog.classList.remove('zoomed'); dialog.classList.add(leave ? 'collecting' : 'retracting');
    const finish = () => {
      if (!leave) { close(); return; }
      table.hidden = controls.hidden = true; farewell.hidden = false;
      dialog.classList.add('departing'); busy = false;
      dialog.querySelector('.club-return').focus({preventScroll:true});
    };
    if (reduced.matches) { finish(); return; }
    timer = setTimeout(() => {
      if (!leave) dialog.classList.add('fading');
      timer = setTimeout(finish, leave ? 0 : 350);
    }, leave ? 2200 : 1400);
  };
  trigger.hidden = false;
  trigger.addEventListener('click', () => { reset(); dialog.showModal(); document.body.classList.add('club-open'); reveal.focus({preventScroll:true}); });
  reveal.addEventListener('click', () => { if(busy) return; dialog.classList.add('zoomed'); reveal.hidden = true; details.hidden = false; details.querySelector('a').focus({preventScroll:true}); });
  dialog.querySelector('.card-close').addEventListener('click', () => withdraw());
  dialog.querySelector('.club-leave').addEventListener('click', () => withdraw(true));
  dialog.querySelector('.club-return').addEventListener('click', returnInside);
  dialog.addEventListener('cancel', event => { event.preventDefault(); withdraw(); });
})();
