import React from 'react'

const MediaImg = ({media}) => {
  return (
    <div>Componente imagen<img className="photoURL" src={media}></img> </div>
  )
}

export default MediaImg