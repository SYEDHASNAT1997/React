import firebase from 'firebase';
import '@firebase/firestore';
const firebaseConfig =firebase.initializeApp( {
    apiKey: "AIzaSyBnDnbhzqFStpIn1tYv21bcHMX9FfpFChQ",
    authDomain: "instagram-85874.firebaseapp.com",
    databaseURL: "https://instagram-85874-default-rtdb.firebaseio.com",
    projectId: "instagram-85874",
    storageBucket: "instagram-85874.appspot.com",
    messagingSenderId: "325968591725",
    appId: "1:325968591725:web:67fd983cd9969d7e5cf864",
    measurementId: "G-FRBPCT1KS5"
});
const db=firebase.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

 export {db,auth,storage};
