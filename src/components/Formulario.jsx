import { useState } from "react";

const Formulario = () => {

    const [formulario, setformulario] = useState({
        name: "",
        apellido:"",
        edad:"",
        email: "",
        gender: "",
        numero: "",
        opinion: "",

    });
    const { name, apellido, edad, email, gender, numero,opinion } = formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        
        setformulario({
            ...formulario, [e.target.name]: e.target.value,
        })
    }
    return (
        <>

         
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text"
                    placeholder="Ingresa tus Nombres"
                    value={name}
                    className="form-control mb-2"
                    name="name"
                    onChange={handleChange} />
                    <br /><br />
                      
                      <input type="text"
                    placeholder="Ingresa tus apellidos"
                    value={apellido}
                    className="form-control mb-2"
                    name="apellido"
                    onChange={handleChange} />
                     <br /><br />
                     <input type="number"
                    placeholder="Ingresa tu edad"
                    value={edad}
                    className="form-control mb-2"
                    name="edad"
                    onChange={handleChange} />
                     <br /><br />
               
                <input placeholder="Ingresa tu correo electronico"
                    className="form-control mb-2"
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></input>
                
                 <br /><br />
                <select className="form-control mb3" name="gender" value={gender} onChange={handleChange} >
                    placeholder="Ingresa tu correo electronico"
                    <option value="pendiente">Hombre</option>
                    <option value="completado">Mujer</option>
                    <option value="completado">otro</option>
                </select>
                <br /><br />
                <input type="number"
                    placeholder="ingrese su numero de telefono"
                    value={numero}
                    className="form-control mb-2"
                    name="numero"
                    onChange={handleChange} />
                     <br /><br />
                    
                <textarea placeholder="danos tu opinion"
                    className="form-control mb-2"
                    name="email"
                    value={opinion}
                    onChange={handleChange}
                ></textarea>
                 <br /><br />
                <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                
            </form>
        </>

    );
}
export default Formulario;