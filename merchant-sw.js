// merchant-sw.js — Dedicated Service Worker for KSINDO Merchant App
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');
importScripts('firebase-config.js');

if (self.KSINDO_FIREBASE_CONFIG && !firebase.apps.length) {
    firebase.initializeApp(self.KSINDO_FIREBASE_CONFIG);
}

const messaging = firebase.messaging();

// फोन लॉक या ऐप बंद होने पर भी नोटिफ़िकेशन दिखाने वाला हैंडलर
messaging.onBackgroundMessage(function(payload) {
    const title = (payload.notification && payload.notification.title) || (payload.data && payload.data.title) || "🛎️ Naya Order Aaya Hai!";
    const body = (payload.notification && payload.notification.body) || (payload.data && payload.data.body) || "KSINDO Merchant App kholkar order accept karein.";

    return self.registration.showNotification(title, {
        body: body,
        icon: "https://poddar977.github.io/jaynagarbazar/logo.png",
        badge: "https://poddar977.github.io/jaynagarbazar/logo.png",
        vibrate: [500, 200, 500, 200, 800],
        requireInteraction: true,
        renotify: true,
        tag: "ksindo-merchant-urgent-order",
        data: { url: "./merchant.html" }
    });
});

// नोटिफ़िकेशन पर क्लिक करते ही सीधे Merchant App खुले
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url.includes('merchant.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('./merchant.html');
            }
        })
    );
});

self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
