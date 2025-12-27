import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  apiKey: "AIzaSyDSjB9QZ0rP-y_dqqu2-tSQAQQKrwuPNLc",
  authDomain: "p-test-a2aaa.firebaseapp.com",
  databaseURL: "https://p-test-a2aaa-default-rtdb.firebaseio.com",
  projectId: "p-test-a2aaa",
  storageBucket: "p-test-a2aaa.firebasestorage.app",
  messagingSenderId: "141360280556",
  appId: "1:141360280556:web:2137da22cbf445940346c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
