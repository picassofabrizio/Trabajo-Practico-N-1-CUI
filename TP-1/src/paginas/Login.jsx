import { useNavigate } from "react-router-dom"
import Registro from "./Registro"
import Button from "react-bootstrap/Button"
import { Link } from "react-router"
 
function Login({Registro}){
    const navigate = useNavigate()
    return(
        <div>
            <form>
                <label>Dirección de correo electrónico</label>
                <input type="email"></input>
                <label>Contraseña</label>
                <input type="password"></input>
                <Button variant="sucess">
                    Iniciar sesión
                </Button>
            </form>
            <Link to="/Registro">
                ¿No tenés cuenta? Registrate
            </Link>   
        </div> 
    )
}

export default Login