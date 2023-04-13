import "firebase/messaging";
import firebase, { initializeApp } from "firebase/app";
import localforage from "localforage";
import { getAnalytics } from 'firebase/analytics';

const firebaseCloudMessaging = {
    init: async () => {
        if (!firebase?.apps?.length) {
            // Initialize the Firebase app with the credentials
            const firebaseConfig = {
                apiKey: "AIzaSyDE02J6KFJ4cd5Z6h6msAmhU_Pdx2p1yaE",
                authDomain: "proskill39-b6065.firebaseapp.com",
                projectId: "proskill39-b6065",
                storageBucket: "proskill39-b6065.appspot.com",
                messagingSenderId: "1066238862519",
                appId: "1:1066238862519:web:cf4102ba06a06e4365d932",
                measurementId: "G-4E8NE8S6ZY"
            }
            
            
            try {
                const app = initializeApp(firebaseConfig);
                console.log(app)
            
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    },
};
export { firebaseCloudMessaging };

