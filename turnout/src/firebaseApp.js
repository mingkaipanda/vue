import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBfDXfNwPIPf-XYoDhFjezgEBlcOu7W1U8",
    authDomain: "turnout-7fdc9.firebaseapp.com",
    databaseURL: "https://turnout-7fdc9.firebaseio.com",
    projectId: "turnout-7fdc9",
    storageBucket: "turnout-7fdc9.appspot.com",
    messagingSenderId: "210014496603",
    appId: "1:210014496603:web:18c29d4f1427fb8f6e1c7e",
    measurementId: "G-HP78RPVKF2"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig)
