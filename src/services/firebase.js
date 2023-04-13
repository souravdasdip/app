// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC99gu7O3-5gZIvz1HKqSFiUtQRBY634jk",
    authDomain: "task-93146.firebaseapp.com",
    projectId: "task-93146",
    storageBucket: "task-93146.appspot.com",
    messagingSenderId: "605909625205",
    appId: "1:605909625205:web:740e722bec46a4377c0b3c"
};

//email verification link send config
export const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/",
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: "com.example.ios",
    // },
    // android: {
    //   packageName: "com.podium.tasks",
    //   installApp: true,
    //   minimumVersion: "12",
    // },
    // dynamicLinkDomain: "https://podiumpro-9cc8e.firebaseapp.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
