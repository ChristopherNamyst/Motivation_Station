import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA7ISL4pAadgOSKnllNKAzp8JARwM2Opw8",
    authDomain: "motivationstation-5e322.firebaseapp.com",
    databaseURL: "https://motivationstation-5e322.firebaseio.com",
    projectId: "motivationstation-5e322",
    storageBucket: "",
    messagingSenderId: "127232835752"
  };

  export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
