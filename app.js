// Remember a same-tab gallery entrance without intercepting native navigation.
document.querySelectorAll('.gallery-entry, .hero .primary-link').forEach(link => {
  link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    try { sessionStorage.setItem('gallery-entry-at', String(Date.now())); } catch { /* Storage is optional. */ }
  });
});

function revealCase(hash, focus = false) {
  const target = document.getElementById(hash.slice(1));
  if (!(target instanceof HTMLDetailsElement)) return;
  target.open = true;
  if (focus) {
    target.scrollIntoView({ block: 'start' });
    target.querySelector('summary').focus({ preventScroll: true });
  }
}

document.querySelectorAll('.case-jump').forEach(link => {
  link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const hash = link.getAttribute('href');
    if (location.hash !== hash) history.pushState(null, '', hash);
    revealCase(hash, true);
  });
});

// Preserve readable case-study links when opened directly or revisited.
window.addEventListener('hashchange', () => revealCase(location.hash));
revealCase(location.hash);

// Keep the reader at the same case when changing the document language.
const languageLink = document.querySelector('.language-link');
function syncLanguageLink() {
  if (!languageLink) return;
  const destination = new URL(languageLink.href);
  destination.hash = location.hash;
  languageLink.href = destination.pathname + destination.hash;
}
syncLanguageLink();
window.addEventListener('hashchange', syncLanguageLink);
window.addEventListener('popstate', syncLanguageLink);
document.querySelectorAll('.case-jump').forEach(link => link.addEventListener('click', syncLanguageLink));
