import React from 'react'

const MediaAudio= ({media}) => {
  console.log("Este es el audio", {media})
  return (
    <div>Componente audio<audio src={media.media}
    autoplay width="100" height="100"></audio>
</div>
  )
}

export default MediaAudio