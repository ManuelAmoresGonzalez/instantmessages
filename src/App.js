import React from 'react'
import SignIn from './components/SignIn'
import ChatComponent from './components/ChatComponent'
import './App.css';


//hooks
import {useAuthState} from 'react-firebase-hooks/auth'

//firebase
import { auth } from './firebaseConfig'

function App() {

  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? <ChatComponent /> : <SignIn />}
      
    </div>
  )
}

export default App