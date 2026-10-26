import { Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import ProductoCard from "./ProductoCard";
import { Button, Row, Col } from "react-bootstrap";
import { productos } from "../data/productos";
import { reseñas } from "../data/reseñas";
import onAgregar from "../App";
import "../App.css";
import "./ProductoCard.css";

function DetallesDelProducto({ }) {
    // useParams extrae los parámetros de la URL. Si la URL es /producto/2, id valdrá "2"
    const { id } = useParams();
    const idNumerico = +id; // Convertir a número
    const producto = productos.find((p) => p.id === idNumerico);// Buscar el producto con el id correspondiente
    const reseñasProducto = reseñas.filter((r) => r.productoId === idNumerico)

    return (
        <div className="container py-4">
            <h2 className="text-center mb-4" >Detalles del Producto: {producto.nombre}</h2>
            <br />
            <div className="d-flex justify-content-center mb-4">
                <Card style={{ width: '55rem' }} className="h-100 shadow-sm producto-card">
                    <Card.Img variant="center" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2.25rem' }}>{producto.nombre}</Card.Title>
                        <Card.Text>
                            {producto.descripcion}
                        </Card.Text>
                        <p style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Precio: ${producto.precio}</p>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Stock: {producto.stock}</p>
                        <div className="d-flex gap-2 mt-3">
                            <button variant="outline-primary" className="flex-fill btn-nexus-outline" onClick={() => onAgregar(producto)}>
                                Agregar al Carrito
                            </button>
                            <br />
                            <br />
                            <button variant="primary" className="flex-fill btn-nexus" >
                                Comprar Ahora
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <div className="d-flex justify-content-center mb-4">
                <Card style={{ width: '55rem' }} className="h-100 shadow-sm producto-card">
                    <Card.Body>
                        <Card.Title>Características</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Nombre: {producto.nombre}</li>
                                <li>Categoría: {producto.categoria}</li>
                                <li>Marca: {producto.marca}</li>
                                <li>Modelo: {producto.modelo}</li>
                                <li>Características: {producto.caracteristicas}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <div className="d-flex justify-content-center mb-4">
                <Card style={{ width: '55rem' }} className="h-100 shadow-sm producto-card">
                    <Card.Body>
                        <Card.Title>Productos Recomendados</Card.Title>
                        <Card.Text>
                            <Row xs={1} sm={2} lg={4} className="g-4">
                                {productos.map((producto) => (
                                    <Col key={producto.id}>
                                        <ProductoCard producto={producto} onAgregar={onAgregar} />
                                    </Col>
                                ))}
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <div className="d-flex justify-content-center mb-4">
                <Card style={{ width: '55rem' }} className="h-100 shadow-sm producto-card">
                    <Card.Body>
                        <Card.Title>Reseñas de clientes</Card.Title>
                        <Card.Text>
                            {reseñasProducto.length > 0 ? (
                                reseñasProducto.map((r) => (
                                    <div key={r.id} className="border-bottom pb-2 mb-2">
                                        <strong>{r.usuario}</strong>
                                        <p className="mb-0">{r.comentario}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Aún no hay reseñas de este producto.</p>
                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <div className="d-flex justify-content-center mb-4">
                <Button as={Link} to="/productos" variant="primary" className="btn-nexus">Volver a Productos</Button>
            </div>
        </div>
    );
}

export default DetallesDelProducto;