
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
    /*useEffect
        Le dice a React: «Quiero ejecutar una tarea adicional relacionada con este componente».
    () =>
        Significa que vamos a definir una función: un conjunto de instrucciones que se ejecutarán cuando corresponda.
    {
    Abre el bloque donde vamos a escribir las instrucciones de esa función.*/ 
  useEffect(() => {
    /*const: crea una variable cuyo valor no vamos a reasignar.

    intervalo: es el nombre que elegimos para esa variable.
    Podría llamarse temporizador; el nombre lo elegimos nosotros.

    =: guarda en esa variable el resultado de lo que está a la derecha.

    setInterval: inicia un temporizador que repite una tarea cada cierto tiempo.*/ 
    const intervalo = setInterval(() => {
        // Actualiza el índice para avanzar a la siguiente imagen.
        // El % hace que, al llegar a la última, vuelva a la primera.*/
      setIndice((actual) => (actual + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

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
