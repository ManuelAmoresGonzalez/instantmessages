import React, {useState, useEffect} from 'react'
import SendMessage from './SendMessage';
import SingOut from './SingOut'


//firebase
import { database, auth } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, get } from 'firebase/database'
import { doc, getDoc } from "firebase/firestore";
import {query, where, getDocs } from "firebase/firestore";


function ChatComponent() {

  const [messages, setMessages] = useState([]);
  let boolean=false
  useEffect(() => {
    database.collection('conversaciones/conversacion1/messages').orderBy('createdAt').limit(100).onSnapshot( snapshot => {
      setMessages(snapshot.docs.map( doc =>  doc.data() ));
    })
    
  }, [])


  return (
    <div>
      <SingOut />
      <div className='messages'>
        {messages.map( ({id,text, photoURL, uid }) => (
          <div>
            <div className={`message ${uid === auth.currentUser.uid ? 'sent': 'received'}`} key={id}>
              <img src={photoURL}></img>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <SendMessage />
    </div>
  )
}

export default ChatComponent