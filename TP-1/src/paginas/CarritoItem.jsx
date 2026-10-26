import { Card, Button, Row, Col } from "react-bootstrap";

function CarritoItem({ producto, onCambiarCantidad, onEliminar }) {
    // Precio por unidad x cantidad
    const subtotal = producto.precio * producto.cantidad;

    return (
        <Card className="mb-3 producto-card">
            <Card.Body>
                <Row className="align-items-center g-3">
                    {/* Imagen */}
                    <Col xs={4} md={2}>
                        <img src={producto.imagen} alt={producto.nombre} className="producto-card__img" />
                    </Col>

                    {/* Nombre y precio por unidad */}
                    <Col xs={8} md={4}>
                        <h3 className="fs-5 mb-1">{producto.nombre}</h3>
                        <small>${producto.precio.toLocaleString("es-AR")} c/u</small>
                    </Col>

                    {/* Botones para cambiar la cantidad */}
                     <Col xs={6} md={3} className="d-flex align-items-center gap-2">
                        <Button
                            variant="outline-primary"
                            className="btn-nexus-outline"
                            onClick={() => onCambiarCantidad(producto.id, -1)}
                            disabled={producto.cantidad === 1}
                        >
                            -
                        </Button>
                        <span>{producto.cantidad}</span>
                        <Button
                            variant="outline-primary"
                            className="btn-nexus-outline"
                            onClick={() => onCambiarCantidad(producto.id, 1)}
                            disabled={producto.cantidad === producto.stock}
                        >
                            +
                        </Button>
                    </Col>

                    {/* Subtotal y eliminar */}
                    <Col xs={6} md={3}>
                        <p className="fw-bold mb-1">${subtotal.toLocaleString("es-AR")}</p>
                        <Button variant="outline-danger" size="sm" onClick={() => onEliminar(producto.id)}>
                            Eliminar
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CarritoItem;
