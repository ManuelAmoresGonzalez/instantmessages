<<<<<<< HEAD
import React, { useState }  from 'react'
import DateTimePicker from 'react-datetime-picker';
import swal from "sweetalert2";
=======
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Button from '@mui/material/Button';
>>>>>>> fdd3b8a189c969c8d578394645ca1da6d352c245


//firebase
import { database, auth } from '../firebaseConfig';
import firebase from "../../node_modules/firebase/compat"; 

export const Reminder = () => {
  const [value, onChange] = useState(new Date());
  const [description, setDescription] = useState("")
  var hoy = new Date();

<<<<<<< HEAD
  return (
    <div>
        <h5>este es</h5>
=======
  async function getValues(e ){
    e.preventDefault()
    const {uid} = auth.currentUser
    console.log(description)
    console.log(value/1000)

    await database.collection('recordatorios/').add({
      description: description,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      executeIt: value
    })


  }
  return (
    <div className="container-reminder">
      <form>
        <label> 
          <input type="text" name="name" onChange={(event) => setDescription(event.target.value)}   placeholder="Descripción del recordatorio:" />
        </label>
      </form>
      <DateTimePicker onChange={onChange} value={value} />
      {console.log("Este es el valor: " + hoy + " el otro: " + value)}
      <Button className="button-reminders" onClick={getValues}>Crear recordatorio</Button>
>>>>>>> fdd3b8a189c969c8d578394645ca1da6d352c245
    </div>
  );
};
