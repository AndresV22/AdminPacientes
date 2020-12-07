import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

function App() {
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column">
          <Citas />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
