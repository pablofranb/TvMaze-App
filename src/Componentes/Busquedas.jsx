import { useState,useEffect } from "react";

const Busquedas=({serie,favoritas, setFavoritas})=>{  //a busqueda le paso las series que mapeo y props 
    const imagen = serie.show.image?.medium || "https://via.placeholder.com/210x295?text=Sin+imagen" //cojo la imagen y sino existe aparece sin imagen
    //devuelvo el bloque con imagen y nombre
    const [info,setInfo]= useState(false);
    const [like,setLike]=useState(false);
  
    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritas));
    }, [favoritas]);   //cada vez que modifico favoritas lo añado al local storage
        
    const mostrarInfo=()=>{
      if(info===false){
        setInfo(true);
        
      }
      else{
        setInfo(false);
      }
    }
    const favoritos=()=>{
      let nuevasFavs=[...favoritas];//creo una copia y le doy el valor de las que haya en favoritas
      if(like===false){
        setLike(true);
         nuevasFavs.push(serie); //si se pulsa se añade la sere

      }
      else{
        setLike(false);
         nuevasFavs = nuevasFavs.filter(s => s.show.id !== serie.show.id);

      }
      setFavoritas(nuevasFavs);//actualizo favoritas mas el valor nuevo

    }
   
    

    return (
    <div className="busquedas">
      <button onClick={mostrarInfo}><img src={imagen} alt={serie.show.name} /></button>
      <h3>{serie.show.name}</h3>
      <button id="fav" onClick={favoritos}> {like ? '❤️ Me gusta':'🤍 No me gusta'} </button>
      
      
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