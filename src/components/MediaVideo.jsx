import React from 'react'

const MediaVideo= ({media}) => {
  return (
    <div>Componente video<video autoplay controls  src={media}  width="100" height="100"></video>
    </div>
  )
}

export default MediaVideo