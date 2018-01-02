import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBcsdZbMgJ1bvs8msTINyYpQWRbjHvhC5c",
    authDomain: "motivationstation-36fee.firebaseapp.com",
    databaseURL: "https://motivationstation-36fee.firebaseio.com",
    projectId: "motivationstation-36fee",
    storageBucket: "motivationstation-36fee.appspot.com",
    messagingSenderId: "713163355180"
  };

  export const firebaseApp = firebase.initializeApp(config);
