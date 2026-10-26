import { useNavigate } from 'react-router-dom'

function Carrito() {
  const navigate = useNavigate()
  const handleFinalizarCompra = () =>{
    navigate('/datoscompra')
  }
  return (
    <div>
      <p>Carrito</p>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={handleFinalizarCompra}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Carrito