Nombre: service-worker.js

Código a pegar:
// Service Worker simple
self.addEventListener('install', function(e) {
  console.log('App instalada');
});

self.addEventListener('fetch', function(e) {
  // Permite funcionar offline
});
