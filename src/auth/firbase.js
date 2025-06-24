
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1ztE2PQ0ustvFfuDJfGtJGtjYNlsdyDw",
  authDomain: "inventory-a9b10.firebaseapp.com",
  projectId: "inventory-a9b10",
  storageBucket: "inventory-a9b10.firebasestorage.app",
  messagingSenderId: "431011159990",
  appId: "1:431011159990:web:21cb2e7b2860c703b12b17",
  measurementId: "G-X44BDYBRZR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
