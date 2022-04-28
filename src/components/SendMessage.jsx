import React, {useState} from 'react'
import PropTypes from 'prop-types'

//material UI
import {Button, Input} from '@mui/material'
//firebase
import { database, auth } from '../firebaseConfig';
import firebase from "../../node_modules/firebase/compat"; 

const SendMessage= ({idConversation}) => {
  const [message, setMessage] = useState('');

  async function sendMessage(e){
    e.preventDefault()
    console.log("Entre al componente 1")
    const {uid, photoURL} = auth.currentUser  
    await database.collection('conversaciones/'+ idConversation +'/messages').add({
      text: message,
      photoURL ,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage('');
  }

  async function createMessageFile(){
    const {uid, photoURL} = auth.currentUser  
    console.log("Entre al componente 2")
    await database.collection('conversaciones/'+ idConversation +'/messages').add({
      text: message,
      photoURL ,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessage('');
  }

  return (
    <div>
        <form onSubmit={sendMessage}>
          <Input value={message} onChange={ (event) => setMessage(event.target.value) }  placeholder='Escriba su mensaje...'  />
          <Button type='submit' >Enviar mensaje</Button>
        </form>
    </div>
  )
}
SendMessage.propTypes = {
  idConversation: PropTypes.string
}

export default SendMessage