import { getApp, getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyADMHLcw-sWFt_DQrAuQVCyDQMjucf35GQ",
    authDomain:  "musicapp-e2b28.firebaseapp.com",
    projectId: "musicapp-e2b28",
    storageBucket:"musicapp-e2b28.appspot.com",
    messagingSenderId: "406357930432",
    appId:"1:406357930432:web:6f78b9f140c75d10fc1825"
};
  
const app = getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export{app, storage}