// Establish fragment position before the cross-document snapshot is painted.
(() => {
  const root = document.documentElement;
  const isSection = url => url.origin === location.origin &&
    ['', 'index.html', 'ko.html'].includes(url.pathname.slice(url.pathname.lastIndexOf('/') + 1)) &&
    ['#experience', '#about', '#contact'].includes(url.hash);
  const arriving = isSection(new URL(location.href));
  let nativeTransition = false;
  let shown = false;
  const clear = () => root.classList.remove('section-arrival');
  const position = () => {
    if (!arriving || shown || window.navigation?.activation?.navigationType === 'traverse') return;
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' });
  };
  if (arriving) root.classList.add('section-arrival');
  document.addEventListener('DOMContentLoaded', position, { once: true });
  window.addEventListener('pageswap', event => {
    const destination = event.activation?.entry?.url;
    root.classList.toggle('section-arrival', !!destination && isSection(new URL(destination)));
  });
  window.addEventListener('pagereveal', event => {
    nativeTransition = false;
    if (!arriving) return;
    root.classList.add('section-arrival');
    position();
    if (event.viewTransition) {
      nativeTransition = true;
      event.viewTransition.ready.catch(() => {});
      event.viewTransition.finished.then(clear, clear);
    }
  });
  window.addEventListener('pageshow', () => {
    position();
    if (!nativeTransition) {
      requestAnimationFrame(clear);
    }
    shown = true;
  });
})();
