import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SendMessage from './SendMessage';
import '../style/chatcomponent.css'


//firebase
import { database, auth } from '../firebaseConfig';
import DragDropCOmponent from './DragDropCOmponent';
import MediaImg from './MediaImg';
import MediaAudio from './MediaAudio';
import MediaVideo from './MediaVideo';
import MediaText from './MediaText';



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
      <div className='messages'>
        {messages.map( ({id,text, photoURL, uid, media, typeFile }) => (
          <div>
            {
              <div className={`message ${uid === auth.currentUser.uid ? 'sent': 'received'}` } key={id}>
                <div className='boxMessages'>
                <img className="photoURL" src={photoURL}></img> 
                  {(() => {
                          switch (typeFile) {
                            case "image":  return <MediaImg   media={media}  />;
                            case "video":  return <MediaVideo media={media}  />;
                            case "audio":  return <MediaAudio media={media}  />;
                            default:       return <MediaText  text={text}    />;
                          }
                        })()

                    //typeFile === 'image' ? <MediaImg /> : <MediaVideo />
                  }
                             
                {/* <p>{text}</p> */}
                </div>
                
              </div>
            }
          </div>
        ))}
      </div>
      <div class="inputs">
        <DragDropCOmponent idConversation={idConversation} />
        <SendMessage idConversation={idConversation} />
      </div>

    </div>
  )
}

ChatComponent.propTypes = {
  idConversation: PropTypes.string
}

export default ChatComponent