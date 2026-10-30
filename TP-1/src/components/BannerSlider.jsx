
import { useState, useEffect } from 'react';
import './BannerSlider.css';

const banners = [
  '/src/assets/imagenes/nexus.png',
  '/src/assets/imagenes/componentes.png',
  '/src/assets/imagenes/mercadopago.png'
];

function BannerSlider() {
    /*indice representa cuál banner estamos mostrando: 0, 1 o 2.*/
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    /*
    setInterval: inicia un temporizador que repite una tarea cada cierto tiempo.*/ 
    const intervalo = setInterval(() => {
        // Actualiza el índice para avanzar a la siguiente imagen.
        // El % hace que, al llegar a la última, vuelva a la primera.*/
        //actual: es un nombre que elegimos para recibir el valor más 
        // reciente del estado cuando React procesa la actualización.
      setIndice((actual) => (actual + 1) % banners.length);
    }, 3000);
    //Cuando cambia indice, React vuelve a ejecutar el efecto.
    return () => clearInterval(intervalo);
  }, [indice]);

  function anterior() {
    // Resta 1 para retroceder una imagen.
    // Suma la cantidad de imágenes para evitar un índice negativo.
    // El % permite volver a la última imagen al llegar al principio.
    setIndice((actual) =>
      (actual - 1 + banners.length) % banners.length
    );
  }

  function siguiente() {
    setIndice((actual) =>
      (actual + 1) % banners.length
    );
  }

  return (
    // Devuelve los elementos que se muestran en la página:
    // la imagen actual y los botones para cambiarla.
    <section className="banner-slider">
      <img src={banners[indice]} alt="Promoción de NEXUS Gaming" />

      <button className="flecha anterior" onClick={anterior}>
        &#10094;
      </button>

      <button className="flecha siguiente" onClick={siguiente}>
        &#10095;
      </button>
    </section>
  );
}

export default BannerSlider;
