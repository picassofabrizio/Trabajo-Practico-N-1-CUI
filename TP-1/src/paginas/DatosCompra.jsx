import { useState } from "react"
import {Button, Card } from "react-bootstrap"
import { Form } from "react-router-dom"

const validate = (data) => {
        const newErrors = {}

        if(data.name.trim() === "") {
            newErrors.name = "El nombre es obligatorio"
        }

        if(data.secondname.trim() === ""){
            newErrors.secondname = "El apellido es obligatorio"
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

        if(data.adress.trim() === ""){
            newErrors.adress = "La dirección es obligatoria"
        } 
        // else if(!(data.adress.contains(Number)) || !(data.adress.contains(String))){
        //     newErrors.adress = "Ingrese una dirección válida"
        // }

        if(data.city.trim() === ""){
            newErrors.city = "La localidad es obligatoria"
        } 
        // else if(data.city.includes(Number)){
        //     newErrors.city = "Ingrese una localidad válida"
        // }

        if(data.cp.trim() === ""){
            newErrors.cp = "El código postal es obligatorio"
        } else if(data.cp.length < 4 || data.cp.length > 4 || data.cp.includes(String)){
            newErrors.cp = "Ingrese un código postal válido"
        }

        return newErrors
}

function DatosCompra(){

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
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className={`form-control input-purple ${errors.name ? 'is-invalid' : ""}`} placeholder="Juan" id="inputName" name="name" value={formData.name} onChange={handleChange}/>
                        {errors.name && (
                            <div className="invalid-feedback d-block">{errors.name}</div>
                        )}
                    </div>
                    
                    <div className="col-md-6">
                        <label htmlFor="inputApellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control input-purple" id="inputApellido" name="secondname" placeholder="Gomez" value={formData.secondname} onChange={handleChange}/>
                        {errors.secondname && (
                            <div className="invalid-feedback d-block">{errors.secondname}</div>
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
                        <label htmlFor="inputAddress" className="form-label">Dirección</label>
                        <input type="adress" className="form-control input-purple" id="inputAddress" placeholder="Calle 1234" name="adress" value={formData.adress} onChange={handleChange}/>
                        {errors.adress && (
                            <div className="invalid-feedback d-block">{errors.adress}</div>
                        )}
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputDetails" className="form-label">Detalles</label>
                        <input type="text" className="form-control input-purple" id="inputDetails" placeholder="Entre calles, casa o departamento, piso, etc" name="details" value={formData.details} onChange={handleChange}/>
                        {errors.details && (
                            <div className="invalid-feedback d-block">{errors.details}</div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Localidad</label>
                        <input type="text" className="form-control input-purple" id="inputCity" name="city" placeholder="Hurlingham" value={formData.city} onChange={handleChange}/>
                        {errors.city && (
                            <div className="invalid-feedback d-block">{errors.city}</div>
                        )}
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="inputProvince" className="form-label">Provincia</label>
                        <select id="inputProvince" className="form-select input-purple" name="province" value={formData.province} onChange={handleChange}>
                            <option value="">Seleccioná una provincia</option>
                            <option value="buenos-aires">Buenos Aires</option>
                            <option value="cordoba">Córdoba</option>
                            <option value="santa-fe">Santa Fe</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Código postal</label>
                        <input type="text" className="form-control input-purple" id="inputZip" name="cp" placeholder="1234" value={formData.cp} onChange={handleChange}/>
                        {errors.cp && (
                            <div className="invalid-feedback d-block">{errors.cp}</div>
                        )}
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEntrega" className="form-label">Método de entrega</label>
                        <select id="inputState" className="form-select input-purple" name="shipment" value={formData.shipment} onChange={handleChange}>
                            <option value="">Selecciona el método de envío</option>
                            <option value="correo">Correo</option>
                            <option value="cordoba">Moto envío</option>
                            <option value="santa-fe">Retirar por el local</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <div className="form-field">
                            <input type="checkbox" id="gridCheck" className="check" name="check" value={formData.check} onChange={handleChange}/>
                            <label htmlFor="gridCheck">
                                Quiero recibir ofertas y novedades.
                            </label>
                        </div>
                    </div>

                    <div className="col-12">
                        <Button type="submit" variant="outline-primary" className="flex-fill btn-nexus-outline">Confirmar datos</Button>
                    </div>

                </form>

                {sucess && (
                <div className="alert alert-success mt-3 input-purple">
                  ¡Formulario validado correctamente!
                </div>
                )}
        </div>
    )
}

export default DatosCompra