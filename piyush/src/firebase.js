// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
 const firebaseConfig : {
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

