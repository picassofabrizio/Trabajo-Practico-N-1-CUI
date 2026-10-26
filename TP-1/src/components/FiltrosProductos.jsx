import "./FiltrosProductos.css";

function FiltrosProductos({
    busqueda,
    setBusqueda,
    categoria,
    setCategoria,
    orden,
    setOrden,
    categorias,
    onLimpiar,
}) {
    return (
        <div className="filtros">
            <div className="filtros__buscador">
                <span className="filtros__icono" aria-hidden="true">🔍</span>
                <input
                    type="search"
                    className="filtros__input"
                    placeholder="Buscar por nombre..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    aria-label="Buscar productos por nombre"
                />
            </div>

            <select
                className="filtros__select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                aria-label="Filtrar por categoría"
            >
                <option value="Todas">Todas las categorías</option>
                {categorias.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <select
                className="filtros__select"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                aria-label="Ordenar por precio"
            >
                <option value="ninguno">Sin ordenar</option>
                <option value="asc">Precio: menor a mayor</option>
                <option value="desc">Precio: mayor a menor</option>
            </select>

            <button type="button" className=" boton-outline filtros__limpiar" onClick={onLimpiar}>
                Limpiar
            </button>
        </div>
    );
}

export default FiltrosProductos;