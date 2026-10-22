import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import BannerSlider from "../components/BannerSlider";

function Inicio() {
  return (
    <main className="inicio">
      <BannerSlider />
      <section className="presentacion">
        <p className="etiqueta">TU MUNDO GAMING</p>

        <h2>
          Llevá tu setup al siguiente nivel.
        </h2>

        <p className="descripcion">
          Encontrá periféricos, componentes y tecnología para llevar tu
          experiencia gaming más lejos.
        </p>

        <Button as={Link} to="/productos" size="lg" className="btn-nexus">
          Explorar productos
        </Button>
      </section>
    </main>
  );
}

export default Inicio;
