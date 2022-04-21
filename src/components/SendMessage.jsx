import React, { useState } from "react";
import '../style/sendmessage.css'
import DragDropCOmponent from "./DragDropCOmponent";

const SendMessage = () => {

    const [message, setMessage] = useState("");
  return (
    <div>

        <form className='positionComponent'>
            <div className="input-field col s12">              
              <textarea id="icon_prefix "
                     type="text"
                     className="materialize-textarea"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
              />
              { <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">send</i></a> }
              <label for="icon_prefix">Mensaje</label>

              
            </div>     
       
        </form>


    </div>

  )
}

export default SendMessage