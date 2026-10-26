import { NavLink } from 'react-router-dom';
import { Badge } from "react-bootstrap";


function NavBar({ cantidad }) {
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>
        Inicio
      </NavLink>

      <NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : ""}>
        Productos
      </NavLink>

      <NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : ""}>
        Contacto
      </NavLink>

      <NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : ""}>
        Nosotros
      </NavLink>

      <NavLink to="/carrito" className={({ isActive }) => isActive ? "activo" : ""}>
        🛒 {cantidad > 0 && <Badge bg="danger" pill>{cantidad}</Badge>}
      </NavLink>

      <NavLink to="/login" className={({ isActive }) => isActive ? "activo" : ""}>
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;