import React, { useState } from 'react'

const Formulario = () => {

    const [todo,setTodo] = useState({
        todoName: "",
        todoDescripcion:"",
        todoEstado:"pendiente",
        todoCheck: false
    })

    
    // const {todoName,todoDescripcion,todoEstado} = todo;

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(todo)

        const {todoName,todoDescripcion} = todo;

        if(!todoName.trim() || !todoDescripcion.trim()){
            setError(true)
            return
        }

        setError(false);

    }

    const handleChange = (e)=>{

        //*los name y propiedades del objetos tienen el mismo nombre para que se mas facil a la hora de modificar
        //*el objeto todo.
        //* el todo tiene que tener una relacion con el input. en los input con el value

        const {name,value,checked,type} = e.target
        
        // setTodo({
        //     ...todo,
        //     [e.target.name]: e.target.type === "checkbox" ?  e.target.checked :  e.target.value
        // })
        
        setTodo({
            ...todo,
            [name]: type === "checkbox" ?  checked : value
        })


        // setTodo((old)=>({
        //     ...old,
        //     [e.target.name]: e.target.value
        // }))
    }

    const [error,setError] = useState(false);

    const PintarEror = ()=>(
        <div className="alert alert-danger">Campos Obligatorios</div>
    )

  return (

    <div className='container'>
        
        <h2>Controlado</h2>
        {
            error && <PintarEror/>
        }
        
        <form onSubmit={handleSubmit}>
            
            <input 
                type="text" 
                placeholder='Ingrese Todo'
                name="todoName"
                className='form-control mb-2'
                onChange={handleChange }
                value={todo.todoName}
            />
            
            <textarea
              name="todoDescripcion"
              placeholder='Ingrese Descripcion'
              className='form-control mb-2'
              onChange={handleChange}
              value={todo.todoDescripcion}

            />
              
              <select
                name="todoEstado"
                className='form-control mb-2'
                onChange={handleChange}
                value={todo.todoEstado}
                >
                <option value="pendiente">Pendiente</option>
                <option value="completa">Completada</option>
              </select>

                 <div className="form-check">
                <input
                  name="todoCheck"
                  className="form-check-input"
                  type="checkbox"
                  checked={todo.todoCheck}
                  onChange={handleChange}
                  />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Dar Prioridad
                </label>
                </div>

            <button className='btn btn-primary' type='submit'>enviar</button>
        </form>
    </div>
    )
}

export default Formulario