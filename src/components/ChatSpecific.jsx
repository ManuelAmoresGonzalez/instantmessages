import React from 'react'
import '../style/chatspecific.css'

const ChatSpecific = ({ nombre, mensaje }) => {
  return (
    <div className="card">
        <h6>{nombre}</h6>
        <h6>{mensaje}</h6>
    </div>
  )
}

export default ChatSpecific