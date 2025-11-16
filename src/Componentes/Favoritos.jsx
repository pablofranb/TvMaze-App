import {useState, useEffect} from 'react'
import './Favoritos.css'

const Favoritos = ({ favoritas }) => { //SOLO LE PASO FAVORITAS YA QUE NO NECESITO MODIFICAR 
  return (
    <div className="Seriesfav">
      <h1>TUS SERIES FAVORITAS</h1>

      <div>
        {favoritas.map((item) => (
          <div key={item.show.id} className="fav">
            <img
              src={item.show.image?.medium || "https://via.placeholder.com/210x295"}
              alt={item.show.name}
            />
            <h3>{item.show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
