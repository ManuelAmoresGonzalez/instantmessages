
import './App.css';
//import ChatsComponent from './components/ChatsComponent';
//import SpecificChat from './components/SpecificChat';


import 'firebase/firestore'
import 'firebase/auth'

//FIREBASE



import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth'


import { useState } from 'react';
import { Button } from 'bootstrap';



// Initialize Firebase
firebase.initializeApp(
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

const auth = firebase.auth();
const firestore = firebase.firestore();

 

function App() {
  const [user] = useState(auth);
  return (
    <div className="App ">  
      <section>
        {user ? <ChatRoom/>: <SigIn/> }
      </section>    
    </div>
  );
}

function SigIn(){
  const SignInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.SignInWithPopup(provider);
  }

  return(
    <Button onClick={SignInWithGoogle} > iniciar sesion con Google</Button>
  )
}


function SignOut(){
  return auth.currentUser && (
    <button onClick={ () => auth.SignOut()}>Desconectar</button>
  )
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return(
      <div>
        {messages}
      </div>
  )
}


function ChatMessage(props){
  const {text, uid} = props.message;
  return (
    <p>{text}</p>
  )
}

export default App;
