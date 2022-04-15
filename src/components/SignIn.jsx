import React from 'react'

//Material UI
import {Button} from '@mui/material'

//firebase
import firebase from 'firebase/compat/app'
import { auth } from '../firebaseConfig';

function SignIn() {
  function singInwithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className='container-singIn'>
      <Button onClick={singInwithGoogle} >Iniciar sesion con Google</Button>
    </div>
  )
}

export default SignIn