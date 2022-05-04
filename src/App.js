import React from 'react'
import SignIn from './components/SignIn'
import ChatComponent from './components/ChatComponent'
import ChatsComponent from './components/ChatsComponent';
import './App.css';


//hooks
import {useAuthState} from 'react-firebase-hooks/auth'

//firebase
import { auth } from './firebaseConfig'
<<<<<<< HEAD
import { Reminder } from './components/Reminder';
import ViewReminder from './components/ViewReminder';
=======

>>>>>>> fdd3b8a189c969c8d578394645ca1da6d352c245

function App() {

  const [user] = useAuthState(auth)
  return (
    <div>
<<<<<<< HEAD
      <ViewReminder/>
=======
      
>>>>>>> fdd3b8a189c969c8d578394645ca1da6d352c245
      {user ? <ChatsComponent /> : <SignIn />}
      
    </div>
  )
}

export default App