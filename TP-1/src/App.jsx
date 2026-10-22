import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";
import Nosotros from "./paginas/Nosotros";
import "./App.css";

function App() {
  // Hay que sobreescribir esta funcion que para el punto 4 (Carrito de compras)
  const agregarAlCarrito = (producto) => {
    console.log("Agregar al carrito:", producto.nombre);
  };

  return (
    <div>
      <header className="encabezado">
        <h1 className="logo">
          <span className="logo-nexus">NEXUS</span>
          <span className="logo-gaming">Gaming</span>
        </h1>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </div>
  );
}

export default App;