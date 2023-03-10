import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional  from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6 } from "./components/Eventos";
import { EventosES7 } from "./components/Eventos";
import { MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>

        <section>
          <Componente msg="soy un componente funcional desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={false}
            arreglo={[1,2,3]}
            objeto={{nombre: "Mario", correo: "marioaa25@gmail.com"}}
            funcion={(num) => num * num}
            elementoReact ={<i>Esto es un elemento React</i>}
            componenteReact = {<Componente msg= "Soy un componente pasado como Prop"/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <br/><br/><br/><br/>
          
        </section>
      </header>
    </div>
  );
}

export default App;
