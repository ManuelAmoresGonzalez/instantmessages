import React, {useState, useEffect} from 'react'
import ChatComponent from './ChatComponent';
import '../style/chatscomponent.css'

//firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { database, auth } from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

import { Button } from '@mui/material';
import SpecificChat from './SpecificChat';


function ChatsComponent() {
  const [conversations, setConversations] = useState([]);
  const  [displayChat, setDisplayChat] = useState(false);
  const [idConversation, setId] = useState("")

  useEffect(() => {
    database.collection('conversaciones').where('person1', '==',auth.currentUser.uid).onSnapshot( snapshot => {
      snapshot.docs.forEach((doc) =>{
      });
      setConversations(snapshot.docs.map( doc =>   doc.id ));
    })
  }, [])

  useEffect( () => {
  }, [displayChat]);


  async function createCollection(){
    const {uid, photoURL, displayName} = auth.currentUser 

    // const docRef = doc(database,displayName, '1PjYsDi6arzB55FzK9Kd');
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    const q = query(collection(database, "conversaciones"), where('person1', '==',auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log( doc.id + doc.data());
    });
    return querySnapshot;
  }

  function openChat(e, index){
    e.preventDefault()
    setId(index)
    setDisplayChat(!displayChat)
    console.log(idConversation)
  }

  return (
    <div className='container'>
      <div className='conversations'>
        {conversations.map( index => (
          <div className='chats'>
            <Button onClick={(event) => openChat(event, index)}> {index}</Button>
          </div>
        ))}
      </div>
      <div className='chat'>
        {displayChat? <ChatComponent  idConversation={idConversation} />: <SpecificChat/>}
      </div>
    </div>
  )
}

export default ChatsComponent