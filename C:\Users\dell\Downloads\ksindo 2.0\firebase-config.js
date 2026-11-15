/* KSINDO Firebase web configuration.
 * Firebase Web API keys are public identifiers, not passwords or server secrets.
 * Protect data with Firebase Auth + Firestore/Storage Security Rules and restrict
 * this key to your production HTTP referrers in Google Cloud Console.
 * Never put service-account JSON, private keys, payment secrets, or admin tokens here.
 */
(function (root) {
  'use strict';
  var config = Object.freeze({
    apiKey: 'AIzaSyA7f9PWSyws4XkzKq077sNdlF0J33DSVSo',
    authDomain: 'jaynagar-srote.firebaseapp.com',
    projectId: 'jaynagar-srote',
    storageBucket: 'jaynagar-srote.firebasestorage.app',
    messagingSenderId: '820632565818',
    appId: '1:820632565818:web:0b2f4676cecd799a801d03'
  });
  root.KSINDO_FIREBASE_CONFIG = config;
})(typeof self !== 'undefined' ? self : window);
