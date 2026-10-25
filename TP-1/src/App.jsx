import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";
import Nosotros from "./paginas/Nosotros";
import Carrito from "./paginas/Carrito";
import Footer from "./components/Footer";
import RestablecerScroll from "./components/RestablecerScroll";
import Login from "./paginas/Login";
import DetallesDelProducto from "./components/DetallesDelProducto";
import "./App.css";

function App() {
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
      <RestablecerScroll/>
      
      <Routes>
        <Route path="/" element={<Inicio onAgregar={agregarAlCarrito} />} />
        <Route
          path="/productos"
          element={<Productos onAgregar={agregarAlCarrito} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/producto/:id" element={<DetallesDelProducto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
