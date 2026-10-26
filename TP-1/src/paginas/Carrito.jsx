import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CarritoItem from "./CarritoItem";

function Carrito({ carrito, onCambiarCantidad, onEliminar, onVaciar }) {
  // Para saber si ya se confirmó la compra
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  // Calcula el total y la cantidad de productos
  let total = 0;
  let cantidadTotal = 0;
  carrito.forEach((producto) => {
    total = total + producto.precio * producto.cantidad;
    cantidadTotal = cantidadTotal + producto.cantidad;
  });

  // Confirma la compra y vacía el carrito
  const confirmarCompra = () => {
    setCompraConfirmada(true);
    onVaciar();
  };

  // Mensaje después de comprar
  if (compraConfirmada) {
    return (
      <div className="container py-4 sin-resultados">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu pedido fue confirmado.</p>
        <Button as={Link} to="/productos" className="btn-nexus">
          Seguir comprando
        </Button>
      </div>
    );
  }

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
        <Button size="lg" className="btn-nexus" onClick={confirmarCompra}>
          Finalizar compra
        </Button>
      </div>
    </div>
  );
}

export default Carrito;
