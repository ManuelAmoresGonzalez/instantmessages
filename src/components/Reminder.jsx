import React, { useState }  from 'react'
import DateTimePicker from 'react-datetime-picker';


export const Reminder = () => {
    const [value, onChange] = useState(new Date());
    var hoy = new Date();

  return (
    <div>

        <DateTimePicker onChange={onChange} value={value} />
        {            
            console.log("Este es el valor: "+hoy+" el otro: "+ value)        
        }
    </div>
    
  )
}
