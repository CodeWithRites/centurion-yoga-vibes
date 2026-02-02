import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChAub64t-mH0nkCghvtSl41Z270hxuWlc",
  authDomain: "centurion-yoga-vibes.firebaseapp.com",
  projectId: "centurion-yoga-vibes",
  storageBucket: "centurion-yoga-vibes.appspot.com", // ✅ FIXED
  messagingSenderId: "848612030232",
  appId: "1:848612030232:web:7d61d14af570bbcb5b106d",
};

const app = initializeApp(firebaseConfig);

// ✅ EXPORT EVERYTHING YOU ACTUALLY USE
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
