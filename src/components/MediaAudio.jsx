import React from 'react'

const MediaAudio= ({media}) => {
  let link= {media}
  return (
    <div>Componente audio
      <audio controls>
        <source src={media} type="audio/ogg"/>
        <source src={media} type="audio/mpeg"/>
      </audio>



    
 
    </div>
  )
}

export default MediaAudio