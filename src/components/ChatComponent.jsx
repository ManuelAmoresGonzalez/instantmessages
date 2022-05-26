import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import SendMessage from './SendMessage';
import '../style/chatcomponent.css'

// Dialogo
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


//firebase
import { database, auth } from '../firebaseConfig';
//import DragDropCOmponent from './DragDropCOmponent';
import MediaImg from './MediaImg';
import MediaAudio from './MediaAudio';
import MediaVideo from './MediaVideo';
import MediaText from './MediaText';



const ChatComponent = ({idConversation}) =>{

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [messages, setMessages] = useState([]);
  //let boolean=false
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
                  <div className='botonesMensajes'>
                    <input type="button" value={"Editar"} onClick={handleClickOpen}/>
                    <input type="button" value={"Eliminar"}/>
                  </div>

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Editar mensaje</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Mensaje editado"
                        type="email"
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancelar</Button>
                      <Button onClick={handleClose}>Editar</Button>
                    </DialogActions>
                  </Dialog>
                  
                </div>
                
              </div>
            }
          </div>
        ))}
      </div>
      {/* <DragDropCOmponent idConversation={idConversation} /> */}

      <SendMessage idConversation={idConversation} />


    </div>
  )
}

ChatComponent.propTypes = {
  idConversation: PropTypes.string
}

export default ChatComponent