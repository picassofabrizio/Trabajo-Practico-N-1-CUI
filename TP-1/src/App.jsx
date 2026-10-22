import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./paginas/Inicio";
import Contacto from "./paginas/Contacto";
import Nosotros from "./paginas/Nosotros";
import Categorias from "./paginas/Categorias";
import "./App.css";

function App() {
  //useLocation() es una función de React Router que nos devuelve
  // información sobre la ubicación actual.
  const lugarActual = useLocation();
  //mostrarCategorias controla cuándo se muestra 
  // el componente <Categorias />.
  //Usamos useLocation() para conocer la ruta actual y .pathname para 
  // obtener su dirección. 
  // Con !== "/carrito" comprobamos que la ruta no sea /carrito.
  // Si la condición se cumple, React muestra <Categorias />; si no, la oculta.

  const mostrarCategorias = lugarActual.pathname !== "/carrito";
  return (
    <div>
      <header className="encabezado">
        <h1 className="logo">
          <span className="logo-nexus">NEXUS</span>
          <span className="logo-gaming">Gaming</span>
        </h1>
        <NavBar />
      </header>
      {mostrarCategorias && <Categorias />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;
