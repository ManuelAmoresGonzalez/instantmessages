import React, {useState} from 'react'
import '../style/chatspecific.css'
import ChatsComponent from './ChatsComponent'

const ChatSpecific = ({ nombre, mensaje }) => {

  const [ state, setState] = useState({});

  const setComponent = ( ) => {
    setState({nombre, mensaje})
  }
  return (      
      <div className="card" onClick={setComponent}>
          <h6>{nombre}</h6>
          <h6>{mensaje}</h6>
      </div>
  )
} 

export default ChatSpecific