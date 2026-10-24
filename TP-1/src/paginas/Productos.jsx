import { Container, Row, Col } from "react-bootstrap";
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";

function Productos({ onAgregar }) {
  const productosVisibles = productos;

  return (
    <Container as="main" className="py-4">
      <h2>Catálogo de productos</h2>
      <p className="subtitulo-productos mb-4">Equipá tu setup con lo mejor del gaming.</p>

      <Row xs={1} sm={2} lg={4} className="g-4">
        {productosVisibles.map((producto) => (
          <Col key={producto.id}>
            <ProductoCard producto={producto} onAgregar={onAgregar} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;