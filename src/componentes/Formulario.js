import { useState } from "react";
import { crearAmigo } from "./Crear";

export const Formulario = (props) => {
  const { nombre, apellido, valoracion, } = props;
  const [nombre, setNombre] = useState(amigo.nombre);
  const [apellido, setApellido] = useState(apellido);
  const [valoracion, setvaloracion] = useState(valoracion);
  const clickToggleFormulario = (e) => {
    e.preventDefault();
    toggleFormulario();
  };
  const crearAmigo = (e) => {
    e.preventDefault();
    modificarAmigo(setNombre.id, nombre, apellido, valoracion);
    toggleFormulario();
  };
  return (
    <div className={`formulario-editar${abierto ? " on" : ""}`}>
      <form onSubmit={crearAmigo}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="Apellido">Descripción:</label>
        <input
          type="text"
          id="explicacion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit">Crear</button>
        {JSON.stringify(nombre)}
        {JSON.stringify(apellido)}
        {String(valoracion)}
      </form>
      <a
        href="cancelar"
        className="cancelar-form"
        onClick={clickToggleFormulario}
      >
      </a>
    </div>
  );
};