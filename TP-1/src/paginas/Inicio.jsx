import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import BannerSlider from "../components/BannerSlider";
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import "../App.css";

const productosDestacados = productos
  .filter((producto) => producto.stock > 0)
  .slice(0, 6);

function Inicio({ onAgregar }) {
  return (
    <main className="inicio">
      <BannerSlider />

      <section className="presentacion">
        <p className="etiqueta">TU MUNDO GAMING</p>

        <h2>Llevá tu setup al siguiente nivel.</h2>

        <p className="descripcion">
          Encontrá periféricos, componentes y tecnología para llevar tu
          experiencia gaming más lejos.
        </p>

        <Button as={Link} to="/productos" size="lg" className="btn-nexus">
          Explorar productos
        </Button>
      </section>

      <section className="destacados">
        <h2>Destacados de la semana</h2>
        <p>Equipá tu setup con nuestros elegidos.</p>

        <Row className="g-3 inicio__productos">
          {productosDestacados.map((producto) => (
            <Col xs={6} md={4} key={producto.id}>
              <ProductoCard
                producto={producto}
                onAgregar={onAgregar}
              />
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
}

export default Inicio;
