import { useState } from "react";
import { storage } from "../firebaseConfig";
import '../style/dragdropcomponent.css'



function DragDropCOmponent({idConversation}) {  
  
  const sendFile = (e) => {
      const file= e.target.files[0];  
      const typeFile = file.type.split('/')[0]  
      if( typeFile === 'image'){
        createFile(typeFile, file)
      }        
      else if ( typeFile === 'video'){
        createFile(typeFile, file)
      }        
      else
        createFile(typeFile, file)   
  };

  const createFile = (typeFile, file) => {
    const storageRef= storage.ref(`/${typeFile}/${file.name}`);
    const task= storageRef.put(file);
    task.on('state_changed', snapshot => {
    },error => {
        console.log(error.message)
    }, () => {        
      var storageRef= storage.ref(`/${typeFile}/${file.name}`)
      storageRef.getDownloadURL().then(function(url){
      console.log("Esta es la url: "+url)
      })
    })
  }    


  
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