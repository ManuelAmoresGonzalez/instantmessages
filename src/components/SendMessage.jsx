import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../style/chatcomponent.css'
import DragDropCOmponent from './DragDropCOmponent';

//material UI
import {Button, Input} from '@mui/material'
//firebase
import { database, auth } from '../firebaseConfig';
import firebase from "../../node_modules/firebase/compat"; 
//CryptoJS
import CryptoJS from 'crypto-js'

const SendMessage= ({idConversation}) => {
  const [message, setMessage] = useState('');

  async function sendMessage(e){
    e.preventDefault()
    console.log("Entre al componente 1")
    const {uid, photoURL} = auth.currentUser
    
    const cifrar=(texto)=>{
      var textocifrado = CryptoJS.AES.encrypt(texto, 'ConejitosTraviesos').toString();
      return textocifrado;
    }
    
    const descifrar=(texto)=>{
      var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
      var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
      return textoDescifrado; 
    }
    
    await database.collection('conversaciones/'+ idConversation +'/messages').add({
      text: cifrar(message),
      photoURL ,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage('');
  }

  return (
    <div className='inputs'>
        <form onSubmit={sendMessage}>
          <Input  style={{width:'65%', marginLeft:'10px', marginBottom:'4px'}} value={message} onChange={ (event) => setMessage(event.target.value) }  placeholder='Escriba su mensaje...'  />
          <Button style={{backgroundColor:'#4d4dff', color:'white', marginLeft:'5px'}} type='submit' >Enviar mensaje</Button>
          <DragDropCOmponent idConversation={idConversation} />
        </form>
    </div>
  )
}
SendMessage.propTypes = {
  idConversation: PropTypes.string
}

export default SendMessage