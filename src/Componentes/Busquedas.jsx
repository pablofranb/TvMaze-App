import { useState } from "react";

const Busquedas=({serie})=>{  //a busqueda le paso las series que mapeo en el map de una en una
    const imagen = serie.show.image?.medium || "https://via.placeholder.com/210x295?text=Sin+imagen" //cojo la imagen y sino existe aparece sin imagen
    //devuelvo el bloque con imagen y nombre
    const [info,setInfo]= useState(false);
    const [like,setLike]=useState(false);
    const mostrarInfo=()=>{
      if(info===false){
        setInfo(true);
        
      }
      else{
        setInfo(false);
      }
    }
   
    

    return (
    <div className="busquedas">
      <button onClick={mostrarInfo}><img src={imagen} alt={serie.show.name} /></button>
      <h3>{serie.show.name}</h3>
     
      
      
      {info &&( //si info es true se muestra
        <div className="Informacionporserie">
        <h4> INFORMACION </h4>
        <p>IDIOMA: {serie.show.language}</p>
        <p><b>Géneros:</b> {serie.show.genres.join(", ")}</p>
          <p>
            <b>Resumen:</b>{" "}
            {serie.show.summary}
          </p>
        </div>
      )}
    </div>
  )
}
export default Busquedas;