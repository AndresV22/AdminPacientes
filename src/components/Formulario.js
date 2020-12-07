import React, { Fragment, useState } from "react";

const Formulario = () => {
  //State de citas

  const [cita, actualizarCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //Función onChange

  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: [e.target.value],
    });
  };

  //Se extraen los valores de cita

  const { mascota, dueño, fecha, hora, sintomas } = cita;

  //Submit

  const submitCita = (e) => {
    e.preventDefault();
    console.log("Enviando...");
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form onSubmit={submitCita}>
        <label>Nombre de Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        ></input>

        <label>Nombre de Dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={actualizarState}
          value={dueño}
        ></input>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        ></input>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        ></input>

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
