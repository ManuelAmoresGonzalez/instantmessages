import React from 'react'
//CryptoJS
import CryptoJS from 'crypto-js'

const MediaImg = ({media}) => {

  const descifrar=(texto)=>{
    var bytes = CryptoJS.AES.decrypt(texto, 'ConejitosTraviesos');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado; 
  }

  return (
    <div><img className="photoMessage" src={descifrar(media)}></img> </div>
  )
}

export default MediaImg