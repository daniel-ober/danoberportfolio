// client/src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFunctions } from "firebase/functions";

/**
 * CRA ENV VARS (must start with REACT_APP_)
 * Put these in client/.env and restart npm start.
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Functions (callable)
export const functions = getFunctions(app, "us-central1");