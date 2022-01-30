import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_KEY_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_KEY_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_KEY_APPID,
};

const FireBaseApp = initializeApp(firebaseConfig);

export default FireBaseApp;
