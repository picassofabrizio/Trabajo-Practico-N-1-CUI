import BannerSlider from "../components/BannerSlider";

function Inicio() {
  return (
    <main className="inicio">
      <BannerSlider />
      <section className="presentacion">
        <p className="etiqueta">TU MUNDO GAMING</p>

        <h2>
          Llevá tu setup
          <span> al siguiente nivel.</span>
        </h2>

        <p className="descripcion">
          Encontrá periféricos, componentes y tecnología para llevar tu
          experiencia gaming más lejos.
        </p>

        <button className="boton-principal">Explorar productos</button>
      </section>
    </main>
  );
}

export default Inicio;
