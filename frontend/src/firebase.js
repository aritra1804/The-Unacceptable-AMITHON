import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDXkYpcLQTUayGmccdN-4UuNc8kI-xyeeI",
    authDomain: "starx-company.firebaseapp.com",
    projectId: "starx-company",
    storageBucket: "starx-company.appspot.com",
    messagingSenderId: "1021623321448",
    appId: "1:1021623321448:web:f796eb617211025fdaccdd",
    measurementId: "G-S7YRQNZ70W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db  };