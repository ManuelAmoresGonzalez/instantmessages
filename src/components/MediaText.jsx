import React from 'react'
//CryptoJS
import CryptoJS from 'crypto-js'

const MediaText = ({text}) => {

  const descifrar=(texto)=>{
    var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado; 
  }

  console.log(text);
  const newText = descifrar(text);
  return (
    <div> Componente texto <p>{newText}</p></div>
  )
}

export default MediaText