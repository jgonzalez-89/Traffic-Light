import React, { useState } from 'react';

const Button = (valor) => {

    const [color, setColor] = useState("");
 
  return (
    <div>
      <button className='button' onClick={() => {
        valor.valor === "red" ? setColor("yellow") 
                        : valor.valor === "yellow" ? setColor("green") 
                        : valor.valor === "green" ? setColor("red") 
                        : setColor("")
        
      }}>

        Click me!
      </button>
    </div>
  )
}

export default Button
