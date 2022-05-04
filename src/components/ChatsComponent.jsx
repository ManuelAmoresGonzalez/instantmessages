import React, {useState, useEffect} from 'react'
import ChatComponent from './ChatComponent';
import CreateChat from './CreateChat';
import { Reminder } from './Reminder';
import '../style/chatscomponent.css'
import SingOut from './SingOut'

//firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { database, auth } from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

import { Button } from '@mui/material';
import SpecificChat from './SpecificChat';


function ChatsComponent() {
  const [conversations, setConversations] = useState([]);
  const [conversations2, setConversations2] = useState([]);
  const  [displayChat, setDisplayChat] = useState(false);
  const [idConversation, setId] = useState("")

  useEffect(() => {
    GetConversations()  
  }, [])

  useEffect( () => {
  }, [displayChat]);


  function GetConversations(){
    database.collection('conversaciones').where('person1', '==',auth.currentUser.uid).onSnapshot( snapshot => {
      setConversations(snapshot.docs.map( doc =>   doc.id ));
    })

    database.collection('conversaciones').where('person2', '==',auth.currentUser.uid).onSnapshot( snapshot => {
      setConversations2(snapshot.docs.map( doc =>   doc.id ));
    })

    
  }

  function openChat(e, index){
    e.preventDefault()
    setId(index)
    setDisplayChat(!displayChat)
    console.log(idConversation)
  }

  return (
    <div className='rowChats'>
      <div className='conversations'>
      {/* <Reminder/> */}
        {conversations.map( index => (
          <div className='chats'>
            <Button onClick={(event) => openChat(event, index)}> {index}</Button>
          </div>
        ))}
        {conversations2.map( index => (
          <div className='chats'>
            <Button onClick={(event) => openChat(event, index)}> {index}</Button>
          </div>
        ))}
        <div className='botones'>
          <div className='botonesArriba'>
            <CreateChat />
          </div>
          <SingOut/>
        </div>

      </div>
      <div className='chat'>
        {displayChat? <ChatComponent  idConversation={idConversation} />: <SpecificChat/>}
      </div>
    </div>
  )
}

export default ChatsComponent