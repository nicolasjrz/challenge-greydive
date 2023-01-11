import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHrACP6a5p8D1WQMrR6jSC4ycTAfTkAcg",
  authDomain: "challenge-greydive-3a99c.firebaseapp.com",
  projectId: "challenge-greydive-3a99c",
  storageBucket: "challenge-greydive-3a99c.appspot.com",
  messagingSenderId: "962319741540",
  appId: "1:962319741540:web:473d174b4534a1ffcf2571",
  measurementId: "G-N9BCD8SREX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export default app;
