import React from 'react'
import SignIn from './components/SignIn'
import ChatComponent from './components/ChatComponent'
import ChatsComponent from './components/ChatsComponent';
import './App.css';


//hooks
import {useAuthState} from 'react-firebase-hooks/auth'

//firebase
import { auth } from './firebaseConfig'
import { Reminder } from './components/Reminder';

function App() {

  const [user] = useAuthState(auth)
  return (
    <div>
      <Reminder/>
      {user ? <ChatsComponent /> : <SignIn />}
      
    </div>
  )
}

export default App