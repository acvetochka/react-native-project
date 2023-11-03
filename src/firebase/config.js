import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAJsz264IqZjfMGIiBZ5YyHwjQDLP0vdtY',
  authDomain: 'imagesocial-7c628.firebaseapp.com',
  projectId: 'imagesocial-7c628',
  storageBucket: 'imagesocial-7c628.appspot.com',
  messagingSenderId: '697360740166',
  appId: '1:697360740166:web:8257a924ba6cdb1f3dbf47',
  measurementId: 'G-XR9B5LKRRZ',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
