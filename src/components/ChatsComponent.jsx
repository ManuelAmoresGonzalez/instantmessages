import React from 'react'
import '../style/chatscomponent.css'
import DragDropCOmponent from './DragDropCOmponent'
import SendMessage from './SendMessage'
import Dropzone from 'react-dropzone'


const ChatsComponent = () => {
  return (
    
    <div className='firstDivChats'>ChatsComponent       
      <DragDropCOmponent/> 
      <SendMessage/>      
    </div>


  )

}

export default ChatsComponent 