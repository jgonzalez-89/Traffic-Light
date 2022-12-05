import React from 'react'
import { useState } from 'react'
import Button from './components/Button'
import LightView from './components/LightView'


const App = () => {

    const [light, setLight] = useState([])

  return (
      <div>
          <div>
            <LightView
            light={light}
            setLight={setLight}
            />
          </div>
          <div><Button /></div>
      </div>
  )
}

export default App