import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD917feNFbb3c-Pv56WxUEy-LzFMnk9eTo",
  authDomain: "myreactapp-b95aa.firebaseapp.com",
  projectId: "myreactapp-b95aa",
  storageBucket: "myreactapp-b95aa.firebasestorage.app",
  messagingSenderId: "608880796580",
  appId: "1:608880796580:web:860c6d36a8f1b0eaa99731",
  measurementId: "G-S1JZJMLSG6"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
