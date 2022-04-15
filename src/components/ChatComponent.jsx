import React, {useState, useEffect} from 'react'
import { database, auth } from '../firebaseConfig';
import SendMessage from './SendMessage';
import SingOut from './SingOut'

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    database.collection('messages').orderBy('createdAT').limit(25).onSnapshot( snapshot => {
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