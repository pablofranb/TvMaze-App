 import './Buscador.css'
import Busquedas from './Busquedas.jsx'

 import {useState} from "react"
    const Buscador=()=>{
        const[busqueda,setbusqueda]=useState("");//para ir guardando la busqueda y lo inicio vacio
        const[series,setseries]=useState([]); //aqui guardare mis series del fetch, array vacio para que tenga tamaño
        let aux;//aqui guardare mi contenido para el if
        const GuardarBusqueda=(e)=>{
            setbusqueda(e.target.value)
       
        }            
        const BuscarSeries= async (e)=>{  //he visto que await para la funcio hasta completarse y que necesita si o si el async
            e.preventDefault();
            const aux= await fetch(`https://api.tvmaze.com/search/shows?q=${busqueda}`)//recibimos los datos filtrando por busqueda
            const datos= await aux.json() //necesito el json no el array
            setseries(datos)//meto en el series mis datos
        
        }
        const mapearseries=(series)=>{
            datos.map(item)
            
        }
        
        if (series.length ===0){
            aux=<p>No Hay resultados</p>
        }
        else{
           aux= series.map(item =>(<Busquedas key={item.show.id} serie={item}></Busquedas>))
        }
        
        

        
        
    
    
    /*Necesito crear un buscador pero necesito conservar la variable*/
return(
    <div className="Buscador">
        <form id="Forma" onSubmit={BuscarSeries}> {/* sin esto qui poniendolo en el boton cada vez que hacia clic, el navegador recargaba la página y no va */}
            <h1 className="Forma">BUSCADOR DE PELICULAS </h1>
            <label className="Forma"> Buscador</label> <input type="text" onChange={GuardarBusqueda} value={busqueda} id="Busqueda_peliculas" name ="primerForm" placeholder="Busqueda de peliculas"></input>
             <button className="boton" type="submit">Buscar</button>
            <p>{busqueda}</p>
            
        </form>
    <div className="resultados">
        {aux}

    </div>
    </div>
)
}
export default Buscador;