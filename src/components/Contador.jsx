import React, { useState } from 'react'

const Contador = () => {
    
    const [contador, setContador] = useState(0);

    const contadors = ()=>{
        setContador(contador + 1)
        console.log(contador)
    }

    return (
    <>
        <h2>Contador</h2>

        <p>{contador}</p>

        <button onClick={contadors} >aumentar</button>
    </>
  )
}

export default Contador