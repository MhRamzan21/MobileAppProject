
import {initializeApp} from "firebase/app"
import {getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCxdWOYKH61jD3TI-MzR255EmlwuoFv7_Q",
  authDomain: "mobile-app-920ba.firebaseapp.com",
  projectId: "mobile-app-920ba",
  storageBucket: "mobile-app-920ba.appspot.com",
  messagingSenderId: "254490551973",
  appId: "1:254490551973:web:836f7cb33adfa597418f4c"
};

const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
export const db = getFirestore(app);
