import React, {useState, useEffect} from 'react'
import { database, auth } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import SendMessage from './SendMessage';
import SingOut from './SingOut'
import { getDatabase, ref, get } from 'firebase/database'

function ChatComponent() {

  const [messages, setMessages] = useState([]);
  let boolean=false
  useEffect(() => {
    database.collection('messages').orderBy('createdAT').limit(25).onSnapshot( snapshot => {
      setMessages(snapshot.docs.map( doc =>  doc.data() ));
    })
    createCollection()
    
  }, [])

  async function createCollection(){
    const {uid, photoURL, displayName} = auth.currentUser 
    const newCollection = await addDoc(collection(database, displayName), {
      displayName,
    });
  
  }
  

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