
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-nexus">
      <div className="footer-nexus__contenido">
        <div className="footer-nexus__marca">
          <h2>
            NEXUS <span>GAMING</span>
          </h2>
          <p>
            Tu próximo nivel empieza con el setup indicado.
          </p>
        </div>

        <div className="footer-nexus__enlaces">
          <h3>Explorá</h3>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/carrito">Carrito</Link>
        </div>

        <div className="footer-nexus__enlaces">
          <h3>Tu compra</h3>
          <Link to="/contacto">Contacto</Link>
          <Link to="/nosotros">Nosotros</Link>
        </div>
      </div>

      <div className="footer-nexus__inferior">
        <p>© 2026 NEXUS Gaming. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
