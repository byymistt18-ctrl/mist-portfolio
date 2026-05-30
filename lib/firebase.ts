import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  increment,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADyNFxe-6-a8oulu4wUtY81KnxoCQ1a2I",
  authDomain: "bymist-bio.firebaseapp.com",
  projectId: "bymist-bio",
  storageBucket: "bymist-bio.firebasestorage.app",
  messagingSenderId: "13385612654",
  appId: "1:13385612654:web:2330e8e77307f4e28c957f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  increment,
};