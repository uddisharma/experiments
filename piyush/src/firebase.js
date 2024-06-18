// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
 const firebaseConfig = {
    apiKey: "AIzaSyBzzCQYRjvEg0h2lyuDHzNE4WniAdRi0_0",
    authDomain: "push-notificaion-bcd52.firebaseapp.com",
    projectId: "push-notificaion-bcd52",
    storageBucket: "push-notificaion-bcd52.appspot.com",
    messagingSenderId: "501081669935",
    appId: "1:501081669935:web:d3a2d779c3d65764c3a1da",
    measurementId: "G-VPH3EFEWL6"
};

// export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);







// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    new Notification(notificationTitle, notificationOptions);
});

export { messaging };

