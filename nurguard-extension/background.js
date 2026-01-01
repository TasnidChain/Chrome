// NurGuard background service worker (minimal)
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  self.clients && self.clients.claim && self.clients.claim();
});
