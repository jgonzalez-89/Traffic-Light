import React, { useState } from 'react';

const Button = (colorValue) => {

    const [color, setColor] = useState("");
 
  return (
    <div>
      <button className='button' onClick={() => {
        colorValue.colorValue === "red" ? setColor("yellow") 
                        : colorValue.colorValue === "yellow" ? setColor("green") 
                        : colorValue.colorValue === "green" ? setColor("red") 
                        : setColor("")
        
      }}>

        Click me!
      </button>
    </div>
  )
}

export default Button
