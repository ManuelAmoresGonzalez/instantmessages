import React from 'react'

//Material UI
import {Button} from '@mui/material'
import '../style/signin.css'

//firebase
import firebase from 'firebase/compat/app'
import { auth , database} from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

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