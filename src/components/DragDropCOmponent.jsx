import { useState } from "react";
import styled from "styled-components";
import '../style/dragdropcomponent.css'


function DragDropCOmponent() {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e) => {
    console.log(e.target.files);
    const file= e.target.files[0];
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
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
              changeImage(e);
            }}
          />
            

        </div>
    </div>
  );
}

export default DragDropCOmponent;

