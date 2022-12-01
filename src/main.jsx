import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Button from './components/Button'
import LightView from './components/LightView'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <div><LightView /></div>
      <div><Button /></div>
    </div>
  </React.StrictMode>
)
