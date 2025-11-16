import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import NavBar from './Componentes/NavBar.jsx' //importamos el
import Buscador from './Componentes/Buscador.jsx'
import Favoritos from './Componentes/Favoritos.jsx';
function App() {
  const [count, setCount] = useState(0)
  const title="Pagina de busqueda de TVmaze"
  const [favoritas,setFavoritas]=useState([]);
  
  //le paso la lista de favoritos a busquedas opara que la vaya modificando, porque si la hago ahi hay muchas y quiero una para toda la app
  useEffect(() => {
  console.log("FAVORITAS EN APP:", favoritas);//probar que me las esta guardando
  }, [favoritas]);
  //se ejecuta solo una vez al cargar la pagina y crea favs
  useEffect(() => {
  const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
  setFavoritas(guardados);
  }, []);

  return (
    <>

      <NavBar/>
      <Buscador favoritas={favoritas}
        setFavoritas={setFavoritas}/>
        <Favoritos favoritas={favoritas}/>
   </>
   
  )
}

export default App
