import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './config';

// Firebaseアプリを初期化する
const app = initializeApp(firebaseConfig);

// Firestoreインスタンスを取得する
export const db = getFirestore(app);
