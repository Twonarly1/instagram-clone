// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQSNMuYos-XsGYnL0DVA08MKsXeRbsG10",
  authDomain: "insta-2-yt-73141.firebaseapp.com",
  projectId: "insta-2-yt-73141",
  storageBucket: "insta-2-yt-73141.appspot.com",
  messagingSenderId: "337045604549",
  appId: "1:337045604549:web:9eb24358a230fdcd7608ac",
  measurementId: "G-1EL3KF5JXJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };