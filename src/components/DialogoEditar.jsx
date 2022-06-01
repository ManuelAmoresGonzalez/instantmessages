import React, {useState} from 'react'
import {Button, Input} from '@mui/material'
import '../style/chatcomponent.css'

// Dialogo
//import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import { Modal } from 'react-bootstrap';

const DialogoEditar = (props) => {

    const [message, setMessage] = useState('');

    function sendMessage(){
        props.funcion(props.useId,message)
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        {props.funcion(props.useId,message)}
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <p>Editar</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input  style={{width:'65%', marginLeft:'10px', marginBottom:'4px'}} value={message} onChange={ (event) => setMessage(event.target.value) }  placeholder='Escriba su mensaje...'  />
        </Modal.Body>
        <Modal.Footer>
            <input type="button" value={"Cerrar"} onClick={props.onHide}/>
        </Modal.Footer>
        </Modal>
    );
}

export default DialogoEditar