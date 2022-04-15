import React, {useState} from 'react'

//material UI
import {Button, Input} from '@mui/material'
//firebase
import { database, auth } from '../firebaseConfig';
import firebase from "../../node_modules/firebase/compat"; 

function SendMessage() {
  const [message, setMessage] = useState('');

  async function sendMessage(e){
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser  
    await database.collection('messages').add({
      text: message,
      photoURL ,
      uid,
      createdAT: firebase.firestore.FieldValue.serverTimestamp()
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

export default SendMessage