import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4XYSOhS-yxs7gwGe099fGFBG8WoR1vTw",
  authDomain: "house-marketplace-app-c7349.firebaseapp.com",
  projectId: "house-marketplace-app-c7349",
  storageBucket: "house-marketplace-app-c7349.appspot.com",
  messagingSenderId: "646990431608",
  appId: "1:646990431608:web:dc6a97c962239fd478b48d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()