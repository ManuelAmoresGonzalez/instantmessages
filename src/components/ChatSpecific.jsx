import React from 'react'
import '../style/chatspecific.css'

const ChatSpecific = ({ nombre, mensaje }) => {
  return (
    <div className="card">
        <h3>{nombre}</h3>
        <h3>{mensaje}</h3>
    </div>
  )
}

export default ChatSpecific