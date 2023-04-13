import { initializeApp, getApps, getApp } from "firebase/app";
import localforage from "localforage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyDE02J6KFJ4cd5Z6h6msAmhU_Pdx2p1yaE",
  authDomain: "proskill39-b6065.firebaseapp.com",
  projectId: "proskill39-b6065",
  storageBucket: "proskill39-b6065.appspot.com",
  messagingSenderId: "1066238862519",
  appId: "1:1066238862519:web:cf4102ba06a06e4365d932",
  measurementId: "G-4E8NE8S6ZY",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    const token = await localforage.getItem("fcm_token");
    return token;
  },
  onMessage: async () => {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      const { title, body } = payload.notification;
      return {
        titlemsg: title,
        bodymsg: body,
      };
    });
  },

  init: async function () {
    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }
      const messaging = getMessaging(app);
      await Notification.requestPermission();
      getToken(messaging, {
        vapidKey:
          "BB7YkuLm1I_k-qKouOXPzkVZO-NPXNrUr_Xs1_hyP6mldGjX_w6ADDc_WpatcfLbkE0a6Fbc63TeyCZ2OacR8Q0",
      })
        .then((currentToken) => {
          if (currentToken) {
            localforage.setItem("fcm_token", currentToken);
          } else {
            // Show permission request UI
            console.log(
              "NOTIFICACION, No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log(
            "NOTIFICACION An error occurred while retrieving token . " +
              err.message
          );
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };
