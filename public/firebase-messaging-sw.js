importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDE02J6KFJ4cd5Z6h6msAmhU_Pdx2p1yaE",
    authDomain: "proskill39-b6065.firebaseapp.com",
    projectId: "proskill39-b6065",
    storageBucket: "proskill39-b6065.appspot.com",
    messagingSenderId: "1066238862519",
    appId: "1:1066238862519:web:cf4102ba06a06e4365d932",
    measurementId: "G-4E8NE8S6ZY",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/firebase-logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
