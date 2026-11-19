/* Install experience only. The existing training content stays unchanged. */
(() => {
  let installPrompt = null;
  const btn = document.getElementById('pwaInstallButton');
  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(err => {
        console.warn('Mode hors ligne indisponible :', err);
      });
    });
  }
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installPrompt = event;
    if (btn && !isStandalone()) btn.classList.add('visible');
  });
  if (btn) btn.addEventListener('click', async () => {
    if (!installPrompt) return;
    btn.classList.remove('visible');
    await installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
  });
  window.addEventListener('appinstalled', () => {
    if (btn) btn.classList.remove('visible');
    installPrompt = null;
  });
})();
