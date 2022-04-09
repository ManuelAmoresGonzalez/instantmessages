import React from 'react'
import '../style/specificchat.css'
import ChatSpecific from './ChatSpecific';

const SpecificChat = () => {

    const data = [
        {
            nombre: "Manuel Amores",
            mensaje: "Hola a todos ",
        },
        {
            nombre: "Ali Camilo",
            mensaje: "Yes si soy ",
        },
        {
            nombre: "Carlos Guabina",
            mensaje: "HMe extraña la araña ",
        },
        {
            nombre: "Ignacio Amores",
            mensaje: "El cachorron ",
        },
        {
          nombre: "Ignacio Amores",
          mensaje: "El cachorron ",
      },
      {
        nombre: "Ignacio Amores",
        mensaje: "El cachorron ",
    },
    {
      nombre: "Ignacio Amores",
      mensaje: "El cachorron ",
  },
      ];

  return (
    <div className='firstDivSpecific prueba'>
        <h1>SpecificChat</h1>     
        <>
        {data.map(({ nombre, mensaje }) => {
        return (
          <ChatSpecific
            key={nombre}
            nombre={nombre}
            mensaje={mensaje}
          />
        );
        })}
        </>
    </div>
  )
}

export default SpecificChat