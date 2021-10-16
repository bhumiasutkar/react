import * as firebase from 'firebase'
import firebaseDB from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQQrRKZbf1nQWvFsSvJOb6uiTV88z7JyU",
    authDomain: "brandstikautomation.firebaseapp.com",
    projectId: "brandstikautomation",
    storageBucket: "brandstikautomation.appspot.com",
    messagingSenderId: "28480508951",
    appId: "1:28480508951:web:afc3be5077d30d2cea7852"  
}
firebaseDB.initializeApp(firebaseConfig);

export const auth = firebaseDB.auth();
export default firebaseDB.firestore();


