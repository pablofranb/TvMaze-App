 import './Buscador.css'
 import {useState} from "react"
    const Buscador=()=>{
        const[busqueda,setbusqueda]=useState("");//para ir guardando la busqueda y lo inicio vacio
        const GuardarBusqueda=(e)=>{
            setbusqueda(e.target.value)
        
        }
        
        
    
    
    /*Necesito crear un buscador pero necesito conservar la variable*/
return(
    <div className="Buscador">
        <form id="Forma">
            <h1 className="Forma">BUSCADOR DE PELICULAS </h1>
            <label className="Forma"> Buscador</label> <input type="text" onChange={GuardarBusqueda} value={busqueda} id="Busqueda_peliculas" name ="primerForm" placeholder="Busqueda de peliculas"></input>
            <button className="boton">BOTON</button>
            <p>{busqueda}</p>
            
        </form>
    </div>
)
}
export default Buscador;