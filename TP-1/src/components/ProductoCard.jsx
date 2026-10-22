import { Link } from "react-router-dom";
import { Card, Badge, Button } from "react-bootstrap";
import "./ProductoCard.css";

function ProductoCard({ producto, onAgregar }) {
  const { id, nombre, categoria, precio, imagen, descripcion, stock } = producto;
  const sinStock = stock === 0;
  const pocoStock = stock > 0 && stock <= 5;

  let claseStock = "text-success";
  if (sinStock) {
    claseStock = "text-danger";
  } else if (pocoStock) {
    claseStock = "text-warning";
  }

  return (
    <Card className="h-100 shadow-sm producto-card">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={imagen}
          alt={nombre}
          loading="lazy"
          className={`producto-card__img ${sinStock ? "producto-card__img--agotado" : ""}`}
        />
        {sinStock && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
            Sin stock
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column">
        <small className="producto-card__categoria">{categoria}</small>
        <Card.Title as="h3" className="fs-5">{nombre}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">{descripcion}</Card.Text>

        <Card.Text className={`small mb-1 fw-semibold ${claseStock}`}>
          {sinStock ? "No disponible" : `Stock disponible: ${stock}`}
        </Card.Text>
        <Card.Text className="fs-4 fw-bold mb-3">
          ${precio.toLocaleString("es-AR")}
        </Card.Text>

        <div className="d-flex gap-2">
          <Button as={Link} to={`/producto/${id}`} variant="outline-primary" className="flex-fill btn-nexus-outline">
            Ver detalle
          </Button>
          <Button
            variant="primary"
            className="flex-fill btn-nexus"
            disabled={sinStock}
            onClick={() => onAgregar(producto)}
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;