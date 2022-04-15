import React, {useState} from 'react'
import '../style/chatspecific.css'
import ChatsComponent from './ChatsComponent'

const ChatSpecific = ({ nombre, mensaje }) => {

  const [ state, setState] = useState({});

  const setComponent = ( ) => {
    setState({nombre, mensaje})
  }
  console.log(setComponent)
  return (      
      <div className="card" onClick={() => <ChatsComponent key={nombre}
                                                          nombre={nombre}
                                                          mensaje={mensaje}/>}>
          <h6>{nombre}</h6>
          <h6>{mensaje}</h6>
      </div>
  )
} 

export default ChatSpecific