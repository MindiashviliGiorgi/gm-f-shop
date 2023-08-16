import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV2PxILW_jILsdgtI6s9OtJxY9_u2xbWs",
  authDomain: "gmf-shop.firebaseapp.com",
  projectId: "gmf-shop",
  storageBucket: "gmf-shop.appspot.com",
  messagingSenderId: "232180651814",
  appId: "1:232180651814:web:db2db40fb879b2151e13e7"
};

export const firebase = initializeApp(firebaseConfig);