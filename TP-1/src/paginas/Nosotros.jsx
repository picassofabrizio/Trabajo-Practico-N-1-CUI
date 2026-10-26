import "../App.css";

function Nosotros() {
  return (
    <main className="nosotros">
      <section className="nosotros__presentacion">
        <p className="etiqueta">CONOCÉ NEXUS</p>

        <h2>Más que tecnología, una pasión.</h2>

        <p>
          En NEXUS Gaming creemos que cada jugador merece
          un espacio para disfrutar, competir y superar sus
          propios límites.
        </p>
      </section>

      <section className="nosotros__contenido">
        <article className="nosotros__tarjeta">
          <h3>¿Quiénes somos?</h3>
          <p>
            Somos una tienda dedicada al mundo gaming y la
            tecnología, con productos pensados para acompañar
            a cada jugador en su experiencia.
          </p>
        </article>

        <article className="nosotros__tarjeta">
          <h3>¿Qué ofrecemos?</h3>
          <p>
            Contamos con periféricos, componentes y accesorios
            para armar, renovar y mejorar tu setup.
          </p>
        </article>

        <article className="nosotros__tarjeta">
          <h3>Nuestra misión</h3>
          <p>
            Queremos ayudarte a encontrar los productos
            adecuados para disfrutar al máximo de cada partida.
          </p>
        </article>
      </section>
    </main>
  );
}

export default Nosotros;
