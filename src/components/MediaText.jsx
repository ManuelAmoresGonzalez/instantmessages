import React from 'react'
//CryptoJS
import CryptoJS from 'crypto-js'
import '../style/chatcomponent.css'

const MediaText = ({text}) => {

  const descifrar=(texto)=>{
    var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado; 
  }

  const newText = descifrar(text);
  return (
    <div className='texto'><p>{newText}</p></div>
  )
}

export default MediaText