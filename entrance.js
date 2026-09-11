const enter = document.querySelector('.enter');
const motion = document.querySelector('.motion');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const ko = document.documentElement.lang === 'ko';
let timer;
motion.hidden = false;
document.body.classList.add('animated');
motion.addEventListener('click', () => {
  const paused = document.body.classList.toggle('paused');
  motion.setAttribute('aria-pressed', String(paused));
  motion.textContent = paused ? (ko ? '움직임 다시 보기' : 'Resume animation') : (ko ? '움직임 멈추기' : 'Pause animation');
});
enter.addEventListener('click', event => {
  if(event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || reduced.matches) return;
  event.preventDefault();
  if(timer) return;
  document.body.classList.add('entering');
  timer = setTimeout(() => location.assign(enter.href), 1900);
});
window.addEventListener('pageshow', () => {
  clearTimeout(timer);
  timer = undefined;
  document.body.classList.remove('entering');
});
