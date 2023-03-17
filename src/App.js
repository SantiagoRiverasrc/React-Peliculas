import { useState } from 'react';
import './App.css';
import { Buscardor } from './components/Buscardor';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {
    const [Listas, setListas] = useState([])

  return (
      <div className="layout_complete">

        <header className="Encabezado">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h3 className="titlepelis">Mis peliculas</h3>
        </header>


        <nav className="barra">
            <ul>
                <li>
                    <a href="/#">Inicio</a>
                </li>
                <li>
                    <a href="/#">Peliculas</a>
                </li>
                <li>
                    <a href="/#">Blog</a>
                </li>
                <li>
                    <a href="/#">Contacto</a>
                </li>
            </ul>
        </nav>
        




        <section className="main">
            <Listado Listas={Listas} setListas={setListas}/>
        </section>


        <aside className="barra_lateral">
            <Buscardor listads={Listas} setListads={setListas}/>
            <Crear setListas={setListas}/>
        </aside>


        <footer className="info_baja">
            &copy; Santiago Rivera Cano
        </footer>
    </div>
  );
}

export default App;
