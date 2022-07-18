import React, { useRef } from 'react'

const FormularioNoControlado = () => {

    //*Este hook recibe el valor inicial null.
    //*capturamos el form
    const formulario = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const datos = new FormData(formulario.current)
        const objectDatos = Object.fromEntries([...datos.entries()])
        
        const {todoDescripcion,todoName,estado } = objectDatos;
        
        if(!todoDescripcion.trim() || !todoName.trim()){
            console.log("campo vacio")
            return
        }

        console.log("perfecto")

    }


  return (

    <div className='container'>
        
        <h2>No controlados</h2>

        <form ref={formulario} onSubmit={handleSubmit}>
            
            <input 
            type="text" 
            placeholder='Ingrese Todo'
            name="todoName"
            className='form-control mb-2'
            defaultValue="tare #1"
            />
            
            <textarea
              name="todoDescripcion"
              placeholder='Ingrese Descripcion'
              className='form-control mb-2'
              defaultValue="descripcion"
            />
              
              <select
                name="estado"
                className='form-control mb-2'
                >
                <option value="pendiente">Pendiente</option>
                <option value="completa">Completada</option>
              </select>

            <button className='btn btn-primary' type='submit'>enviar</button>
        </form>
    </div>
  )
}

export default FormularioNoControlado