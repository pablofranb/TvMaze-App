import { useState,useEffect } from "react";

const Busquedas=({serie,favoritas, setFavoritas})=>{  //a busqueda le paso las series que mapeo y props 
    const imagen = serie.show.image?.medium || "https://via.placeholder.com/210x295?text=Sin+imagen" //cojo la imagen y sino existe aparece sin imagen
    //devuelvo el bloque con imagen y nombre
    const [info,setInfo]= useState(false);
    const [like,setLike]=useState(false);
    const [detalle, setDetalle] = useState(null); //para la informacion detallada
    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoritas));
    }, [favoritas]);   //cada vez que modifico favoritas lo añado al local storage
        
    const mostrarInfo= async ()=>{
      if(info===false){
        setInfo(true);
        const res = await fetch(`https://api.tvmaze.com/shows/${serie.show.id}`);//cada vez que se toca la imagen de la serie abrimos la api
        const data = await res.json();
        setDetalle(data); //guardamos en detalle el resultado
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
      
      
      {info && detalle && (
        <div className="Informacionporserie">
        <h4> INFORMACIÓN DETALLADA </h4>

          <p><b>Idioma:</b> {detalle.language}</p>
          <p><b>Géneros:</b> {detalle.genres.join(", ")}</p>
          <p><b>Rating:</b> {detalle.rating?.average || "No disponible"}</p>
          <p><b>Estreno:</b> {detalle.premiered}</p>
          <p><b>Resumen:</b> {detalle.summary}</p>
        </div>
    )}
    </div>
  )
}
export default Busquedas;