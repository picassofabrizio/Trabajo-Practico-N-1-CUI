import { Button } from "react-bootstrap";
import "../App.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const validate = (data) => {
    const newErrors = {}

    if(data.email.trim() === ""){
        newErrors.email = "Ingresa el mail"
    } else if(!data.email.includes('@')){
        newErrors.email = "Ingresa un mail válido"
    }

    if(data.password.trim() === ""){
        newErrors.password = "Ingresa la contraseña"
    } else if(data.password.length < 8){
        newErrors.password = "Contraseña incorrecta"
    }

    return newErrors;
}

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [sucess, setSucess] = useState(false)

    const handleChange = (event) =>{
        console.log("handleChange", {
            value: event.target.value,
            name: event.target.value
        })

        setFormData({
            ... formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newErrors = validate(formData)
        setErrors(newErrors)

        if(Object.keys(newErrors).length === 0){
            setSucess(true)
        } else{
            setSucess(false)
        }
    }
    
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Iniciar Sesión</h1>
      <form className="d-flex flex-column justify-content-center mb-4" onSubmit={handleSubmit} noValidate>
        <input className="form-control input-purple"  type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" />
        {errors.email && (
            <div className="invalid-feedback d-block">{errors.email}</div>
        )}
        <br />
        <input className="form-control input-purple" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />
        {errors.password && (
            <div className="invalid-feedback d-block">{errors.password}</div>
        )}
        <br />
        <Button variant="outline-primary" className="flex-fill btn-nexus-outline" type="submit">Iniciar Sesión</Button>
      </form>
      <button type="button" class="btn btn-link"> Link </button>
    </div>
  );
}

export default Login