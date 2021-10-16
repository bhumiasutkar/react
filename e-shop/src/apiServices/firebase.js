import firebase from 'firebase';
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJWQ_MmWWWcS0RK5w_xMn8CApDuW0-shM",
    authDomain: "eshop-c1845.firebaseapp.com",
    databaseURL: "https://eshop-c1845.firebaseio.com",
    projectId: "eshop-c1845",
    storageBucket: "eshop-c1845.appspot.com",
    messagingSenderId: "808016265904",
    appId: "1:808016265904:web:1336569b01900f397fb175",
    measurementId: "G-QEXTZZ4J3F"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
export default fire;