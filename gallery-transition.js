// Run in the head so pagereveal is observed before the first paint.
(() => {
  let enteredAt = 0;
  try {
    enteredAt = Number(sessionStorage.getItem('gallery-entry-at'));
    sessionStorage.removeItem('gallery-entry-at');
  } catch { /* Native transitions still work without storage. */ }
  if (!enteredAt || Date.now() - enteredAt > 8000) return;

  let nativeTransition = false;
  function unfold() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || document.hidden) return;
    document.documentElement.classList.add('gallery-arriving');
  }
  window.addEventListener('pagereveal', event => {
    if (!event.viewTransition) return;
    nativeTransition = true;
    // Browsers can decline a cross-document transition even after opting in.
    event.viewTransition.ready.catch(unfold);
  }, { once: true });
  window.addEventListener('pageshow', () => {
    if (!nativeTransition) unfold();
  }, { once: true });
  document.addEventListener('animationend', event => {
    if (event.animationName === 'gallery-arrive-map') {
      document.documentElement.classList.remove('gallery-arriving');
    }
  });
})();
