import React from 'react'
import '../style/chatscomponent.css'
import SendMessage from './SendMessage'

const ChatsComponent = (objeto) => {
  console.log("LLego al componente")
  return (
    
    <div className='firstDivChats'>ChatsComponent
          

      < SendMessage/>
    </div>


  )

}

export default ChatsComponent 