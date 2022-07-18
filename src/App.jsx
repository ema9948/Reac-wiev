import React from 'react'
import Contador from './components/Contador';
import Frutas from './components/Frutas';

const App = () => {

    const hola = " Hola mundo...";
    
    //*class dinamica..

    const color = {
        pri: "text-primary",
    };


    //* Renderizado Condicional

    const estado = true;

    const Estados = ()=>(
        <h1 className='text-primary'>Hola...</h1>
    );

    const Estado = ()=>(
        <h1 className='text-secundary'>Adios...</h1>
    );

    //* Listas y key

    const fruta = ["🍒","🍑","🍐","🍏","🍒","🍌"];

    //* Eventos 
    
    //*sin parametros
    // const even = ()=>{
    //     console.log(`hola ${"cristian"}`)
    // }
    
    //*Con parametros

    const even = (e)=>{
        console.log(`bienvenido ${e}`)
    }


  return (

    <div className='container'>

        <Contador/>

        <h1 className={color.pri}> {hola}</h1>
  
        {
            estado ? <Estados/> : <Estado/>
        }
        
        <ul>
            {
                fruta.map((item,key)=>(
                    <li key={key}>{key + 1} {item} </li>
                ))
            }
        </ul>

        <button 
            className='btn btn-primary'
            // onClick={()=> console.log("me diste click") }
            // onClick={even}  //*funcion sin parametros
            onClick={()=> even("Chirix") } //*funcion con parametro
        >
            click
        </button>
        
        <Frutas frutas ={fruta}/>

    </div>

  )
}

export default App


//* lo que vemos que parece hmtl, no lo es del todo. Es JSX (JavaScript + XML)
//* Esto es un componente, es el componente principal.
//* Los nombres de los componentes Siempre empiezan con Mayusculas.
//* podes hacer las className Dinamicamente.
