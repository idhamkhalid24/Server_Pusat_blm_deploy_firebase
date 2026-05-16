// firebase-messaging-sw.js — optional service worker for GitHub Pages/PWA notification support.
// File ini aman dibiarkan ada di root repository.
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAqmTEKnLKOXcmOoR9RrXksNe5_Fix42w8",
  authDomain: "rocky-fd14b.firebaseapp.com",
  projectId: "rocky-fd14b",
  storageBucket: "rocky-fd14b.firebasestorage.app",
  messagingSenderId: "861954349314",
  appId: "1:861954349314:web:bb8384825daedb8d34ca1b"
});

try {
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(function(payload) {
    const title = (payload.notification && payload.notification.title) || 'Rocky Hijab';
    const options = {
      body: (payload.notification && payload.notification.body) || 'Ada notifikasi baru',
      icon: './icon-192.png'
    };
    self.registration.showNotification(title, options);
  });
} catch (err) {
  console.log('Firebase messaging service worker nonaktif:', err && err.message ? err.message : err);
}
