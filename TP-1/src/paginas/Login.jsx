import { Button } from "react-bootstrap";
import "../App.css"

export default function Login() {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Iniciar Sesión</h1>
      <form className="d-flex flex-column justify-content-center mb-4">
        <input className="form-control input-purple"  type="email" placeholder="Correo electrónico" />
        <br />
        <input className="form-control input-purple" type="password" placeholder="Contraseña" />
        <br />
        <Button variant="outline-primary" className="flex-fill btn-nexus-outline" type="submit">Iniciar Sesión</Button>
      </form>
    </div>
  );
}
