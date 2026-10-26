import { useState } from "react"
import { Card } from "react-bootstrap"
import { Form } from "react-router-dom"

const validate = (data) => {
        const newErrors = {}

        if(data.name.trim() === "") {
            newErrors.name = "El nombre es obligatorio"
        }

        if(data.phone.trim() === ""){
            newErrors.phone = "El número de teléfono es obligatorio"
        } else if(data.phone.length < 8 || data.phone.length > 10 || data.phone.includes(String)){
            newErrors.phone = "Ingrese un número de teléfono válido"
        }

        if(data.email.trim() ==="") {
            newErrors.email = "El email es obligatorio"
        } else if(!data.email.includes('@')){
            newErrors.email = "El mail no es válido"
        }

        return newErrors
}

function Contacto(){

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        details:"",
    })

    const [errors, setErrors] = useState({})
    const [sucess, setSucess] = useState(false)

    function handleChange(event){
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

        
    const handleSubmit=(event)=>{
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
            <h1 className="text-center mb-4">Datos de contacto</h1>

                <form className="row g-3" onSubmit={handleSubmit} noValidate>

                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nombre y apellido</label>
                        <input type="text" className={`form-control input-purple ${errors.name ? 'is-invalid' : ""}`} placeholder="Juan Gomez" id="inputName" name="name" value={formData.name} onChange={handleChange}/>
                        {errors.name && (
                            <div className="invalid-feedback d-block">{errors.name}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputNumber" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control input-purple" id="inputNumber" name="phone" placeholder="+54 11 2345-6789" value={formData.phone} onChange={handleChange}/>
                        {errors.phone && (
                            <div className="invalid-feedback d-block">{errors.phone}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control input-purple" id="inputEmail4" name="email" placeholder="juang@gmail.com" value={formData.email} onChange={handleChange}/>
                        {errors.email && (
                            <div className="invalid-feedback d-block">{errors.email}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputDetails" className="form-label">Mensaje</label>
                        <input type="text" className="form-control input-purple" id="inputDetails" placeholder="Escribe tu mensaje..." name="details" value={formData.details} onChange={handleChange}/>
                        {errors.details && (
                            <div className="invalid-feedback d-block">{errors.details}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>

                </form>

                {sucess && (
                <div className="alert alert-success mt-3 input-purple">
                  ¡Gracias por contactarnos!
                </div>
                )}
        </div>
    )
}

export default Contacto