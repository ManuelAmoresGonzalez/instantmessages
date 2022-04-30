import React from 'react'
//CryptoJS
import CryptoJS from 'crypto-js'

const MediaVideo= ({media}) => {

  const descifrar=(texto)=>{
    var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado; 
  }

  return (
    <div>Componente video<video autoplay controls  src={descifrar(media)}  width="100" height="100"></video>
    </div>
  )
}

export default MediaVideo