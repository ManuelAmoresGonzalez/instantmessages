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
import ViewReminder from './components/ViewReminder';
import PageClima from './components/PageClima';

function App() {

  const [user] = useAuthState(auth)
  return (
    <div>
      
      <div>
      
      {user ? <ChatsComponent /> : <SignIn />}
      
    </div>
      
    </div>
  )
}

export default App