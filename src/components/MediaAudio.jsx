import React from 'react'
//CryptoJS
import CryptoJS from 'crypto-js'

const MediaAudio= ({media}) => {
  
  const descifrar=(texto)=>{
    var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado; 
  }

  return (
    <div>Componente audio
      <audio controls>
        <source src={descifrar(media)} type="audio/ogg"/>
        <source src={descifrar(media)} type="audio/mpeg"/>
      </audio>
    </div>
  )
}

export default MediaAudio