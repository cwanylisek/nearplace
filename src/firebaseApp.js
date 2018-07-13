import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyA-5LvFfN91oZhJPtRgW37EcZjuwe-Xf-k",
    authDomain: "nearplace-4209b.firebaseapp.com",
    databaseURL: "https://nearplace-4209b.firebaseio.com",
    projectId: "nearplace-4209b",
    storageBucket: "nearplace-4209b.appspot.com",
    messagingSenderId: "272953188985"
  };

export const firebaseApp =  firebase.initializeApp(config);
