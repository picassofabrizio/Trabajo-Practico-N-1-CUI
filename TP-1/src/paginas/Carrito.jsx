import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CarritoItem from "./CarritoItem";

function Carrito({ carrito, onCambiarCantidad, onEliminar }) {
  // Calcula el total del precio y la cantidad total de productos.
  let total = 0;
  let cantidadTotal = 0;
  carrito.forEach((producto) => {
    total = total + producto.precio * producto.cantidad;
    cantidadTotal = cantidadTotal + producto.cantidad;
  });

  // Mensaje si el carrito está vacío
  if (carrito.length === 0) {
    return (
      <div className="container py-4 sin-resultados">
        <h2>Tu carrito está vacío</h2>
        <p>Agregá productos desde el catálogo.</p>
        <Button as={Link} to="/productos" className="btn-nexus">
          Ver productos
        </Button>
      </div>
    );
  }

  // Lista de productos + total
  return (
    <div className="container py-4">
      <h2 className="mb-4">Carrito</h2>

      {carrito.map((producto) => (
        <CarritoItem
          key={producto.id}
          producto={producto}
          onCambiarCantidad={onCambiarCantidad}
          onEliminar={onEliminar}
        />
      ))}

      <div className="text-center mt-3">
        <p className="mb-1">Productos: {cantidadTotal}</p>
        <h3>Total: ${total.toLocaleString("es-AR")}</h3>
        <Button as={Link} to="/datoscompra" size="lg" className="btn-nexus">
          Finalizar compra
        </Button>
      </div>
    </div>
  );
}

export default Carrito;
