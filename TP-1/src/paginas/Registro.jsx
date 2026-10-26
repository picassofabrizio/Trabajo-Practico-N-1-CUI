import { useState } from "react"
import { Card } from "react-bootstrap"
import { Form } from "react-router-dom"

const validate = (data) => {
        const newErrors = {}

        if(data.name === "") {
            newErrors.name = "El nombre es obligatorio."
        }

        if(data.secondname === ""){
            newErrors.secondname = "El apellido es obligatorio."
        }

        if(data.phone === ""){
            newErrors.phone = "El número de teléfono es obligatorio."
        } else if(data.phone.length < 8 || data.phone.length > 10 || data.phone.includes(String)){
            newErrors.phone = "Ingrese un número de teléfono válido"
        }

        if(data.email ==="") {
            newErrors.email = "El email es obligatorio."
        } else if(!data.email.includes('@')){
            newErrors.email = "El mail no es válido."
        }

        if(data.adress === ""){
            newErrors.adress = "La dirección es obligatoria."
        } else if(!data.adress.includes(Number)){
            newErrors.adress = "Ingrese el número de domicilio."
        }
        return newErrors
}

function Registro(){

    const [formData, setFormData] = useState({
        name: "",
        secondname: "",
        phone: "",
        email: "",
        adress: "",
        details:"",
        city: "",
        province: "",
        cp: "",
        shipment: "",
        check: ""
    })
    
    const [errors, setErrors] = useState({})
    console.log(formData)

    const handleChange = (event) => {
        console.log("handleChange", {
            value: event.target.value,
            name: event.target.name
        })

        setFormData({
            ... formData,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("Formulario por enviar.")

        const newErrors = validate(formData)
        setErrors(newErrors)

        if(Object.keys(newErrors).length > 0){
            console.log("Hay errores!")
            return 
        }
        
        console.log("Formulario enviado!")
    }
    return (
        <div className="container py-4">
            <h1 className="mb-4">Datos de contacto</h1>

                <form className="row g-3" onSubmit={handleSubmit} noValidate>

                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ""}`} id="inputName" name="name" value={formData.name} onChange={handleChange}/>
                        {errors.name && (
                            <div className="invalid-feedback d-block">{errors.name}</div>
                        )}
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="inputApellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="inputApellido" name="secondname" value={formData.secondname} onChange={handleChange}/>
                        {errors.secondname && (
                            <div className="invalid-feedback d-block">{errors.secondname}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputNumber" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" id="inputNumber" name="phone" value={formData.phone} onChange={handleChange}/>
                        {errors.phone && (
                            <div className="invalid-feedback d-block">{errors.phone}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name="email" value={formData.email} onChange={handleChange}/>
                        {errors.email && (
                            <div className="invalid-feedback d-block">{errors.email}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Dirección</label>
                        <input type="adress" className="form-control" id="inputAddress" placeholder="Calle 1234" name="adress" value={formData.adress} onChange={handleChange}/>
                        {errors.adress && (
                            <div className="invalid-feedback d-block">{errors.adress}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputDetails" className="form-label">Detalles</label>
                        <input type="text" className="form-control" id="inputDetails" placeholder="Entre calles, casa o departamento, piso, etc" name="details" value={formData.details} onChange={handleChange}/>
                        {errors.details && (
                            <div className="invalid-feedback d-block">{errors.details}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Localidad</label>
                        <input type="text" className="form-control" id="inputCity" name="city" value={formData.city} onChange={handleChange}/>
                        {errors.city && (
                            <div className="invalid-feedback d-block">{errors.city}</div>
                        )}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="inputProvince" className="form-label">Provincia</label>
                        <select id="inputProvince" className="form-select" value={formData.province} onChange={handleChange}>
                            <option value="">Seleccioná una provincia</option>
                            <option value="buenos-aires">Buenos Aires</option>
                            <option value="cordoba">Córdoba</option>
                            <option value="santa-fe">Santa Fe</option>
                        </select>
                    </div>

                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Código postal</label>
                        <input type="text" className="form-control" id="inputZip" name="cp" value={formData.cp} onChange={handleChange}/>
                        {errors.cp && (
                            <div className="invalid-feedback d-block">{errors.cp}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEntrega" className="form-label">Método de entrega</label>
                        <select id="inputState" className="form-control" name="shipment" value={formData.shipment} onChange={handleChange}>
                            <option value="correo">Correo</option>
                            <option value="cordoba">Moto envío</option>
                            <option value="santa-fe">Retirar por el local</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <div className="form-field">
                            <input type="checkbox" id="gridCheck" className="check" name="check" value={formData.check} onChange={handleChange}/>
                            <label htmlFor="gridCheck">
                                Quiero recibir mi seguimiento por correo.
                            </label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Confirmar datos</button>
                    </div>

                </form>
        </div>
    )
}

export default Registro