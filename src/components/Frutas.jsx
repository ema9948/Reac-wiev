import React from 'react'

const Frutas = ({frutas}) => {

  // const fruta = ["🍒","🍑","🍐","🍏","🍒","🍌"];
  // console.log(fruta)

  return (
    <>
        <ul>            {
                frutas.map((item,key)=>(
                    <li key={key}>{item}</li>
                ))
            }
        </ul>
    </>
  )
}

export default Frutas