importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA7f9PWSyws4XkzKq077sNdlF0J33DSVSo",
    authDomain: "jaynagar-srote.firebaseapp.com",
    projectId: "jaynagar-srote",
    storageBucket: "jaynagar-srote.firebasestorage.app",
    messagingSenderId: "820632565818",
    appId: "1:820632565818:web:0b2f4676cecd799a801d03"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload.notification?.title || "ksindo Alert";
    const notificationOptions = {
        body: payload.notification?.body || "Aapke liye naya offer ya order update hai!",
        icon: 'ksindo-icon.svg',
        badge: 'ksindo-icon.svg',
        vibrate: [200, 100, 200],
        sound: 'default'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
