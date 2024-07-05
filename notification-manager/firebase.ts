import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig: any = {
  apiKey: null,
  authDomain: null,
  projectId: null,
  storageBucket: null,
  messagingSenderId: null,
  appId: null,
  measurementId: null
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};



export const fetchToken = async () => {
  try {

    const fcmMessaging: any = await messaging();

    if (fcmMessaging) {
      try {
        const token = await getToken(fcmMessaging, {
          vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
        });

        // console.log("token", token);
        return token;
      } catch (error) {
        console.log(error)
      }
    }
  } catch (error) {
    console.error("Error retrieving token:", error);
  }
};

export { app, messaging };
