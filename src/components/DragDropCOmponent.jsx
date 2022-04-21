import { useState } from "react";
import styled from "styled-components";
import { storage } from "../firebaseConfig";
import '../style/dragdropcomponent.css'

import { getStorage, ref} from "firebase/storage";





function DragDropCOmponent() {
  const sendFile = (e) => {
  


    console.log(e.target.files);
    
    if (e.target.files[0] !== undefined) {
      const file= e.target.files[0];
      console.log("Nombre de la vara: "+ file.name)
      const storageRef= storage.ref(`/images/${file.name}`);
      const task= storageRef.put(file);
      task.on('state_changed', snapshot => {
      },error => {
          console.log(error.message)
      }, () => {
          console.log("Cargada con exito: ", task.snapshot.downloadURL)
          //setImageSelectedPrevious(picture= task.snapshot.downloadURL)
          //console.log("Este es es link: ",{picture})          
    })
    }
    
  };
  return (
    <div>
        <br />
        <div className="image-upload-wrap">
            <h3>Arrastrar archivo</h3>
          <input
            className="file-upload-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
                sendFile(e);
            }}
          />
            

        </div>
    </div>
  );
}

export default DragDropCOmponent;

