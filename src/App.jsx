
import React, { useState } from "react";
import LightView from './components/LightView'


const App = () => {

  const [color, setColor] = useState("");

  return (
      <div>
          <div>
            <LightView
            setColor={color}
            />
          </div>
      </div>
  )
}

export default App