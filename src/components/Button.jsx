import React, { useState } from 'react';

const Button = () => {
  const [selectedColor, setSelectedColor] = useState("");
  
  return (
    <div>
      <button className='button' onClick={() => {
        setSelectedColor("red")
        }}>
      Click me!
      </button>
    </div>
  )
}

export default Button