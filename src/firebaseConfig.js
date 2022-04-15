import firebase from "../node_modules/firebase/compat"; 


import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyDhm6P4PeXjTxnZe5oh536l-1rbSuyYdfg",
      authDomain: "instant-messages-d505a.firebaseapp.com",
      databaseURL: "https://instant-messages-d505a-default-rtdb.firebaseio.com",
      projectId: "instant-messages-d505a",
      storageBucket: "instant-messages-d505a.appspot.com",
      messagingSenderId: "214407567324",
      appId: "1:214407567324:web:6c11acb082fbd5e38fa119",
      measurementId: "G-925KMZ7PLD"
    }
  );

const database = firebaseApp.firestore();

const auth = firebase.auth();

export {database, auth};