import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { productos } from "../data/productos";
import ProductoCard from "../components/ProductoCard";
import FiltrosProductos from "../components/FiltrosProductos";

function Productos({ onAgregar }) {
  // Estados de los filtros
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [orden, setOrden] = useState("ninguno");

  // Categorias de los productos
  const categorias = [...new Set(productos.map((p) => p.categoria))];

  // Proceso de filtado
  const filtrados = productos.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase().trim());
    const coincideCategoria = categoria === "Todas" || p.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  // Encima de los productos ya filtrados, se ordena
  const productosVisibles = [...filtrados];
  if (orden === "asc") productosVisibles.sort((a, b) => a.precio - b.precio);
  if (orden === "desc") productosVisibles.sort((a, b) => b.precio - a.precio);

  // Para resetear los filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setOrden("ninguno");
  };

  return (
    <Container as="main" className="py-4">
      <h2>Catálogo de productos</h2>
      <p className="subtitulo-productos mb-4">Equipá tu setup con lo mejor del gaming.</p>

      <FiltrosProductos
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoria={categoria}
        setCategoria={setCategoria}
        orden={orden}
        setOrden={setOrden}
        categorias={categorias}
        onLimpiar={limpiarFiltros}
      />

      {/* Contador de productos encontrados */}
      <p className="contador-productos" aria-live="polite">
        {productosVisibles.length}{" "}
        {productosVisibles.length === 1 ? "producto encontrado" : "productos encontrados"}
      </p>

      {/* Lo que pasa cuando hay 0 productos encontrados */}
      {productosVisibles.length === 0 ? (
        <div className="sin-resultados">
          <p>No encontramos productos con esos filtros.</p>
          <button type="button" className="boton-outline" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </div>
      ) : (
        <Row xs={1} sm={2} lg={4} className="g-4">
          {productosVisibles.map((producto) => (
            <Col key={producto.id}>
              <ProductoCard producto={producto} onAgregar={onAgregar} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Productos;