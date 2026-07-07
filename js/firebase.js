//Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3GEQn7fTlR-zC_XSKFQR6mwE9_nCx-pQ",
  authDomain: "fminai4dand54on20260501-d8325.firebaseapp.com",
  projectId: "fminai4dand54on20260501-d8325",
  storageBucket: "fminai4dand54on20260501-d8325.firebasestorage.app",
  messagingSenderId: "1011726413129",
  appId: "1:1011726413129:web:1f850bc949a9da292ffe98"
};

//Firebase初期化
const app = initializeApp(firebaseConfig);

//Firestore取得
const db = getFirestore(app);

//他のJSから使えるようにする。
export { db };


