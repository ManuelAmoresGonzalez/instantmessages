import React from 'react'

import {Button} from '@mui/material'
import { auth } from '../firebaseConfig';

function SingOut() {
  function logOut(){
    auth.signOut();
  } 
  return (
    <div>
        <Button onClick={ logOut }>Cerrar sesion </Button>
    </div>
  )
}

export default SingOut