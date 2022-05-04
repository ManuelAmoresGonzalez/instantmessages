import React, { useState, useEffect } from "react";
import { Reminder } from "./Reminder";
import swal from "sweetalert2";


const ViewReminder = () => {
  const [count, setCount] = useState(0);
  //año mes dia horas minutos segundos
  
  let segunda = new Date("2022/05/03 22:56:00");
  useEffect(() => {
    setInterval(() => {
      let primera = new Date();
      
      if(new Date() >= new Date("2022/05/03 23:01:00")){        
        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'srgs',
            showConfirmButton: true,
          })
      }
    }, 1000);
  }, []);
};

export default ViewReminder;
