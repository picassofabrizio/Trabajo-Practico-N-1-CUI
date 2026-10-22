
import './Categorias.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const categorias = [
  { nombre: 'Teclados', icono: '⌨️', ruta: '/categorias/teclados' },
  { nombre: 'Mouse', icono: '🖱️', ruta: '/categorias/mouse' },
  { nombre: 'Auriculares', icono: '🎧', ruta: '/categorias/auriculares' },
  { nombre: 'Monitores', icono: '🖥️', ruta: '/categorias/monitores' },
  { nombre: 'Componentes', icono: '⚙️', ruta: '/categorias/componentes' },
  { nombre: 'Gabinetes', icono: '🗄️', ruta: '/categorias/gabinetes' },
  { nombre: 'Placas de video', icono: '🎮', ruta: '/categorias/placas-de-video' },
  { nombre: 'Procesadores', icono: '🔧', ruta: '/categorias/procesadores' },
  { nombre: 'Joysticks', icono: '🕹️', ruta: '/categorias/joysticks' },
];

function Categorias() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="barra-categorias">
      <button
        className="boton-categorias"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        ☰ Categorías
      </button>

      <div className="enlaces-categorias">
        <NavLink to="/ofertas">Ofertas</NavLink>
        <NavLink to="/mas-vendidos">Más vendidos</NavLink>
        <NavLink to="/novedades">Novedades</NavLink>
      </div>

      {menuAbierto && (
        <div
          className="fondo-menu"
          onClick={() => setMenuAbierto(false)}
        >
          <section
            className="panel-categorias"
            // Evita que el clic dentro del panel se propague al fondo 
            // y cierre el menú.
            onClick={(evento) => evento.stopPropagation()}
          >
            <div className="encabezado-panel">
              <h2 className="logo-panel">
                <span>NEXUS</span>
                <span>Gaming</span>
              </h2>

              <button
                className="cerrar-panel"
                onClick={() => setMenuAbierto(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <div className="lista-categorias">
              {categorias.map((categoria) => (
                <NavLink
                  key={categoria.ruta}
                  to={categoria.ruta}
                  className="item-categoria"
                  onClick={() => setMenuAbierto(false)}
                >
                  <span className="icono-categoria">
                    {categoria.icono}
                  </span>

                  <span>{categoria.nombre}</span>

                  <span className="flecha-categoria">›</span>
                </NavLink>
              ))}
            </div>
          </section>
        </div>
      )}
    </nav>
  );
}

export default Categorias;
