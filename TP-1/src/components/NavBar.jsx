import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>Inicio</NavLink>
      <NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : ""}>Contacto</NavLink>
      <NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : ""}>Nosotros</NavLink>
    </nav>
  )
}

export default NavBar;