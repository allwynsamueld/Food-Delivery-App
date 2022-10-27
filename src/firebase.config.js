import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4mAY1Xwt_OMWgfeDiTGqUGmB18n0mzYY",
  authDomain: "delivery-app-53de9.firebaseapp.com",
  databaseURL: "https://delivery-app-53de9-default-rtdb.firebaseio.com",
  projectId: "delivery-app-53de9",
  storageBucket: "delivery-app-53de9.appspot.com",
  messagingSenderId: "85819043664",
  appId: "1:85819043664:web:00f021b9029f2574850655",
};

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
