import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SendMessage from './SendMessage';
import DialogoEditar from './DialogoEditar';
import '../style/chatcomponent.css'

//firebase
import { database, auth } from '../firebaseConfig';
import firebase from "../../node_modules/firebase/compat"; 
//import DragDropCOmponent from './DragDropCOmponent';
import MediaImg from './MediaImg';
import MediaAudio from './MediaAudio';
import MediaVideo from './MediaVideo';
import MediaText from './MediaText';
import { Modal } from 'react-bootstrap';


//CryptoJS
import CryptoJS from 'crypto-js';

const ChatComponent = ({idConversation}) =>{

  const [modalShow, setModalShow] = React.useState(false);

  const [messages, setMessages] = useState([]);
  const [docsName, setDocsName] = useState([]);
  const [doc, setDoc] = useState([]);

  function getMessage(createdAt){ 
      database.collection('conversaciones/'+idConversation+'/messages').where("createdAt","==",createdAt).onSnapshot( snapshot => {
        snapshot.docs.map( item =>   deleteMessage(item.id) )
      })
  }

  function deleteMessage(id){
    database.collection('conversaciones/'+idConversation+'/messages').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    
  }
  function getMessageUpdate(createdAt){
    database.collection('conversaciones/'+idConversation+'/messages').where("createdAt","==",createdAt).onSnapshot( snapshot => {
      snapshot.docs.map( item =>   updateMessage(item.id) )
    })
  }

  const cifrar=(texto)=>{
    var textocifrado = CryptoJS.AES.encrypt(texto, 'ConejitosTraviesos').toString();
    return textocifrado;
  }

  function updateMessage(id, message){

    var MessageRef = database.collection('conversaciones/'+idConversation+'/messages').doc(id);
    console.log(MessageRef);

    var update = MessageRef.update({
      text: cifrar(message),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(update);

  }
  useEffect(() => { 
    database.collection('conversaciones/'+idConversation+'/messages').orderBy('createdAt').onSnapshot( snapshot => {
      setMessages(snapshot.docs.map( doc =>  doc.data() ));
    })
    
  }, [])

  const onSubmitHandler = (evento) => {
    evento.preventDefault();
  };
  return (
    <div>
      <div className='messages'>
        {messages.map( ({id,text, photoURL, uid, media, typeFile, createdAt }) => (
          <div>
            {
              <div className={`message ${uid === auth.currentUser.uid ? 'sent': 'received'}` } key={id}>
                <div className='boxMessages'>{id}
                <img className="photoURL" src={photoURL}></img> 
                  {(() => {
                          switch (typeFile) {
                            case "image":  return <MediaImg   media={media}  />;
                            case "video":  return <MediaVideo media={media}  />;
                            case "audio":  return <MediaAudio media={media}  />;
                            default:       return <MediaText  text={text}    />;
                          }
                        })()
                  }
                  <div className='botonesMensajes'>
                    <input type="button" value={"Editar"} onClick={() => setModalShow(true)}/>
                    <input type="button" value={"Eliminar"} onClick={()=>getMessage(createdAt)} onSubmit={onSubmitHandler}/>
                  </div>
                  <DialogoEditar
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            }
          </div>
        ))}
      </div>
      <SendMessage idConversation={idConversation} key={idConversation}/>
    </div>
  )
}

ChatComponent.propTypes = {
  idConversation: PropTypes.string
}

export default ChatComponent