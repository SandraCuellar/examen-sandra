import { Formulario } from "./Formulario";

export const crearAmigo = (props) => {
    const { id, nombre, apellido, valoracion } = props;
    const formulario={ id.Formulario}
    return (
      <button
        className={`set-${nombre}${idformulario === id ? " activo" : ""}`}
        data-amigo={crearAmigo}
        onClick={() => formulario(id)}
      >
      </button>
    );
  };