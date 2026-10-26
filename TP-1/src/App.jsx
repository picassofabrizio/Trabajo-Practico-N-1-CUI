import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";
import Nosotros from "./paginas/Nosotros";
import Carrito from "./paginas/Carrito";
import Footer from "./components/Footer";
import DatosCompra from "./paginas/DatosCompra";
import RestablecerScroll from "./components/RestablecerScroll";
import Login from "./paginas/Login";
import DetallesDelProducto from "./components/DetallesDelProducto";
import { useState } from "react";
import "./App.css";

function App() {
  const [carrito, setCarrito] = useState([]);

  //* Suma o resta 1 a la cantidad de un producto
  const cambiarCantidad = (id, cambio) => {
    const nuevoCarrito = carrito.map((item) => {
      if (item.id !== id) return item;

      const nueva = item.cantidad + cambio;

      if (nueva < 1 || nueva > item.stock) return item;

      return { ...item, cantidad: nueva };
    });

    setCarrito(nuevoCarrito);
  };

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      cambiarCantidad(producto.id, 1);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  //* Saca un producto del carrito
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => setCarrito([]);

  let cantidadEnCarrito = 0;

  carrito.forEach((producto) => {
    cantidadEnCarrito = cantidadEnCarrito + producto.cantidad;
  });

  return (
    <div className="app">
      <div className="app-contenido">
        <header className="encabezado">
          <h1 className="logo">
            <span className="logo-nexus">NEXUS</span>
            <span className="logo-gaming">Gaming</span>
          </h1>

          <NavBar cantidad={cantidadEnCarrito} />
        </header>

        <RestablecerScroll />

        <Routes>
          <Route path="/" element={<Inicio onAgregar={agregarAlCarrito} />} />

          <Route
            path="/productos"
            element={<Productos onAgregar={agregarAlCarrito} />}
          />

          <Route path="/contacto" element={<Contacto />} />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                onCambiarCantidad={cambiarCantidad}
                onEliminar={eliminarDelCarrito}
              />
            }
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/producto/:id"
            element={<DetallesDelProducto onAgregar={agregarAlCarrito} />}
          />

          <Route
            path="/datoscompra"
            element={<DatosCompra carrito={carrito} onVaciar={vaciarCarrito} />}
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
