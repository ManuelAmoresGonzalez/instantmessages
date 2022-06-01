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
import PageClima from './PageClima';
import Dictaphone from './Dictaphone';

const SendMessage= ({idConversation}) => {
  const [message, setMessage] = useState('');
  const [clima,setClima] = useState(false);
  const [voz,setVoz] = useState(false);

  async function sendMessage(e){
    e.preventDefault()
    const {uid, photoURL} = auth.currentUser
    
    const cifrar=(texto)=>{
      var textocifrado = CryptoJS.AES.encrypt(texto, 'ConejitosTraviesos').toString();
      return textocifrado;
    }

    const deleteDoc=(id)=>{
      console.log(id)
      database.collection('recordatorios').doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
    }

    const UpdateDoc=(doc,date, descripcion)=>{
      console.log(doc)
      var docRef = database.collection('recordatorios').doc(doc);

      var document = docRef.update({
        description: descripcion,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        executeIt: date
      });
    }
    
    const descifrar=(texto)=>{
      var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
      var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
      return textoDescifrado; 
    }

    if(message.includes('///Clima')){
      if(clima){
        setClima(false)
      }else{
        setClima(true)
      }
    }else if(message.includes('///reminder')){ // message llega = ///reminder-id-fechaDeEjecución-descripcion
      const values = message.split("-");
      console.log(values[0], "=> " , values[1])
      console.log(values[2], "=> " , values[3])
      let id = values[1];
      let date = new Date(values[2])
      let description = values[3]
      await database.collection('recordatorios/').add({
        description: description,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        executeIt: date,
        id:id
      })
    }else if(message.includes('///deleteReminder')){ // message llega = ///deleteReminder-id
      const values = message.split("-");
      database.collection('recordatorios').where("id","==" ,values[1],).onSnapshot( snapshot => {
        console.log("dentro de la consulta")
        snapshot.docs.map( item =>   deleteDoc(item.id) )
      })
    }else if(message.includes('///updateReminder')){ // ///updateReminder-id-fecha-description 
      const values = message.split("-");
      let id = values[1];
      let date = new Date(values[2])
      let description = values[3]
      console.log(values[1], "=> " , values[2])
      database.collection('recordatorios').where("id","==",id).onSnapshot( snapshot => {
        snapshot.docs.map( item =>   UpdateDoc(item.id, date, description) )
      })
      
    }else if(message.includes('///Voz')){
      if(voz){
        setVoz(false)
      }else{
        setVoz(true)
      }
    }else{
      await database.collection('conversaciones/'+ idConversation +'/messages').add({
        text: cifrar(message),
        photoURL ,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      setMessage('');
    }    
  }

  return (
    <div className='inputs'>
      <div>
        <form onSubmit={sendMessage}>
          <Input  style={{width:'65%', marginLeft:'10px', marginBottom:'4px'}} value={message} onChange={ (event) => setMessage(event.target.value) }  placeholder='Escriba su mensaje...'  />
          <Button style={{backgroundColor:'#4d4dff', color:'white', marginLeft:'5px'}} type='submit' >Enviar mensaje</Button>
          <DragDropCOmponent idConversation={idConversation} />
        </form>
      </div>
      <div>
      {clima ? <PageClima clima={setClima}/>: null} 
      {voz ? <Dictaphone voz={setMessage} vozState= {setVoz}/>: null} 
      </div>
        
    </div>
  )
}
SendMessage.propTypes = {
  idConversation: PropTypes.string
}

export default SendMessage