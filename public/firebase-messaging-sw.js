importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyCBbx1m0WSRdXaftcFgI4DoJVHcWuDQsBA",
    authDomain: "proskills39-ccc37.firebaseapp.com",
    projectId: "proskills39-ccc37",
    storageBucket: "proskills39-ccc37.appspot.com",
    messagingSenderId: "424188212449",
    appId: "1:424188212449:web:1e8a6443e6fd27301c73a0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
