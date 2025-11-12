const Busquedas=({serie})=>{  //a busqueda le paso las series que mapeo en el map de una en una
    const imagen = serie.show.image?.medium || "https://via.placeholder.com/210x295?text=Sin+imagen" //cojo la imagen y sino existe aparece sin imagen
    //devuelvo el bloque con imagen y nombre
    return (
    <div className="busquedas">
      <img src={imagen} alt={serie.show.name} />
      <h3>{serie.show.name}</h3>
      
    </div>
  )
}
export default Busquedas;