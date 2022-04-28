import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SendMessage from './SendMessage';
import SingOut from './SingOut'
import '../style/chatcomponent.css'


//firebase
import { database, auth } from '../firebaseConfig';
import DragDropCOmponent from './DragDropCOmponent';


const ChatComponent = ({idConversation}) =>{

  const [messages, setMessages] = useState([]);
  let boolean=false
  useEffect(() => {
    database.collection('conversaciones/'+idConversation+'/messages').orderBy('createdAt').limit(100).onSnapshot( snapshot => {
      setMessages(snapshot.docs.map( doc =>  doc.data() ));
    })
    
  }, [])


  return (
    <div>
      <SingOut />
      <div className='messages'>
        {messages.map( ({id,text, photoURL, uid, media, typeFile }) => (
          <div className='boxMessages'>
            {
              <div className={`message ${uid === auth.currentUser.uid ? 'sent': 'received'}` } key={id}>
                <div className='boxMessages'>
                <img className="photoURL" src={photoURL}></img>              
                <p>{text}</p>
                </div>
                
              </div>
            }
          </div>
        ))}
      </div>
      <DragDropCOmponent idConversation={idConversation} />
      <SendMessage idConversation={idConversation} />
    </div>
  )
}

ChatComponent.propTypes = {
  idConversation: PropTypes.string
}

export default ChatComponent