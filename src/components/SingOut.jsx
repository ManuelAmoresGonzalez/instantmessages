import React from 'react'

import {Button} from '@mui/material'
import { auth } from '../firebaseConfig';

import '../style/signout.css'

function SingOut() {
  function logOut(){
    auth.signOut();
  } 
  return (    
      <Button className='mover' onClick={ logOut }><i className='material-icons buttonCloseSession'>input</i>Cerrar sesión</Button>    
  )
}

export default SingOut