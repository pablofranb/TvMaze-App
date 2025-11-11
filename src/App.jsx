import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './Componentes/NavBar.jsx' //importamos el

function App() {
  const [count, setCount] = useState(0)
  const title="Pagina de busqueda de TVmaze"

  return (
    <>
   
      <NavBar/>
   </>
   
  )
}

export default App
