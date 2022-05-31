import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Clima from "./Clima";
import Error from "./Error";

import "../style/pageclima.css";

const PageClima = ({clima}) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);
  const [data, setData] = useState({}); //almacena la respuesta de la api en json
  const [error, setError] = useState(false);


  function changeState(){
    clima(false);
  }

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        let keyAPI = `eaed9e10df601aab920b0f2f1e13df89`;
        let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${keyAPI}`;
        let response = await fetch(urlAPI);
        let data = await response.json(); //data tiene la respuesta de la api en json
        setData(data);
        setConsultar(false);

        //verificar si la ciudad introducida es valida
        if (data.cod === "404") setError(true);
        else setError(false);

        console.log(data);

        //verificando si hay o no resultados en la consulta
        if (data.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error descripcion={data.message} />;
  } else {
    componente = <Clima data={data} />;
  }
  return (
    <>
      <div className="container principalClima shadow p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-3">
            <h2 className="size-title">Formulario de consulta</h2>
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </div>
          <div className="col-md-6 col-sm-12">{componente}</div>
        </div>
        <button type="button" className="closeModal bg-light.bg-gradient rounded-circle " aria-label="Close" onClick={() => {
              changeState()}}>X</button>
      </div>
      
    </>
  );
};

export default PageClima;
