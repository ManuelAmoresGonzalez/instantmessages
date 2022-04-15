import React from 'react'
import '../style/chatscomponent.css'
import SendMessage from './SendMessage'

const ChatsComponent = ({ nombre, mensaje }) => {
  console.log("LLego al componente")
  console.log(mensaje)
  return (
    
    <div className='firstDivChats'>ChatsComponent
          
      <h6>{nombre}</h6>
      <h6>{mensaje}</h6>
      < SendMessage/>
    </div>


  )

}

export default ChatsComponent 