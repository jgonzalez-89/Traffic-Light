
import React, { useState } from "react";
import LightView from './components/LightView'


const App = () => {

  const [color, setColor] = useState("");

  return (
      <div>
          <div>
            <LightView
            color={color}
            setColor={setColor}
            />
          </div>
      </div>
  )
}

export default App