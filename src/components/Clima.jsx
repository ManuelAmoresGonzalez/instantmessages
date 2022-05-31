import React from "react";
import "../style/Clima.css";
function Clima({ data }) {
  const { name, main } = data;
  if (!name) return null;
  const kelvin = 273.15;
  let _temperatura_actual = parseFloat(main.temp - kelvin, 10).toFixed(2);
  let _temperatura_minima = parseFloat(main.temp_min - kelvin, 10).toFixed(2);
  let _temperatura_maxima = parseFloat(main.temp_max - kelvin, 10).toFixed(2);
  return (
    <>
      <div className="card mt-3 bg-light shadow p-3 mb-5 bg-white rounded">
        <h4 class="mt-4 text-midle">Datos del Clima</h4>
        <h4 className="card-header size-title bg-light">
          Temperatura en {name}
        </h4>
        <div className="card-body">
          <h4 className="card-title temperatura text-center tempe">
            {_temperatura_actual} C&deg;
          </h4>

          <ul>
            <li className="text-center temp-min-max size-min-max">
              La mínima: {_temperatura_minima} C&deg;{" "}
            </li>
            <li className="text-center temp-min-max size-min-max">
              La máxima: {_temperatura_maxima} C&deg;
            </li>
          </ul>

          <div className="card-footer text-center text-info humedad size-min-max bg-light">
            {" "}
            Humedad Relativa: {main.humidity} %
          </div>
        </div>
      </div>
    </>
  );
}

export default Clima;
