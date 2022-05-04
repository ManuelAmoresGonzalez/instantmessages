import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { database, auth } from '../firebaseConfig';
import { doc, setDoc } from "firebase/firestore";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    textAlign: 'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function CreateChat() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [nameConversation, setNameConversation] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paraCopiar = auth.currentUser.uid; 

 async function createChat(e){
    e.preventDefault()
    console.log(id)
    await setDoc(doc(database, "conversaciones", nameConversation), {
        person1:auth.currentUser.uid,
        person2:id
      })
 }
  
  return (
    <div>
      <Button onClick={handleOpen}>Nuevo Chat</Button>
      <Button className='myID' onClick={() => navigator.clipboard.writeText(paraCopiar)}>Mi ID</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form type="submit">
        <label style={{width: '100%'}}>
          <input
            style={{widht: '100%'}}
            type="text"
            name="name"
            onChange={(event) => setId(event.target.value)}
            placeholder="Ingrese el uid del destinatario del chat"
          />
        </label>
        <label style={{width: '100%'}}>
          <input
            type="text"
            name="name"
            onChange={(event) => setNameConversation(event.target.value)}
            placeholder="Ingrese el nombre de conversacion"
          />
        </label>
      </form>
        <Button onClick={createChat}>Crear Chat</Button>
        </Box>
      </Modal>
    </div>
  );
}