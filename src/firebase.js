import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZJBiqV0H-ZbHmtkvd5nYQeE06PfkrD6o",
    authDomain: "latihan-alif-reactjs.firebaseapp.com",
    databaseURL: "https://latihan-alif-reactjs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "latihan-alif-reactjs",
    storageBucket: "latihan-alif-reactjs.appspot.com",
    messagingSenderId: "786849906467",
    appId: "1:786849906467:web:2701435586e87e2df35696"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;