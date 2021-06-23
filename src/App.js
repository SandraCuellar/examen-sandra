import { crearAmigo } from "./componentes/Crear";
import { Nombre } from ".componentes/Nombre" 
import { Apellido } from ".componentes/Nombre" 
import { Valoracion } from ".componentes/Nombre" 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <h1>Gestión de mis 6 amigos</h1>
        
       <button type="button crearAmigo" className="btn btn-primary">Crear amigo</button>
       
      </header>
      <body>
    
  <div classNamw="row contenedor">
    <div class="col-sm nombre">
      Nombre:
    </div>
    <div className="col-sm apellido">
      Apellido:
    </div>
    <div className="col-sm valoracion">
      Valoración:
    </div>
</div>
      </body>
    </div>
  );
}

export default App;
