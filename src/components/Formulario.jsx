import React, { useState } from "react";
import Error from "./Error";
function Formulario({ busqueda, setBusqueda, setConsultar }) {
  const { ciudad, pais } = busqueda;
  const [error, setError] = useState(false);
  const handleInput = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setConsultar(true);
  };

  return (
    <form onSubmit={enviarFormulario}>
        {error && <Error descripcion="Todos los campos son obligatorios" />}
      <div className="form-group">
        <label htmlFor="ciudad">Ciudad:</label>
        <input
          type="text"
          id="ciudad"
          name="ciudad"
          placeholder="Escriba su ciudad..."
          className="form-control"
          value={ciudad}
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pais">País</label>
        <input
          type="text"
          id="pais"
          name="pais"
          placeholder="Escriba su ciudad..."
          className="form-control"
          value={pais}
          onChange={handleInput}
        />
      </div>

      <input
        type="submit"
        className="buttonSend"
        value="Enviar"
      />
    </form>
  );
}

export default Formulario;
