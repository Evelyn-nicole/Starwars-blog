import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import photoPlanets from "../assets/Planetas.png";


// ESTILO FOTO EN PERFIL
const stylePhotoPlanetas2 = {
  width: "500px",
  height: "490px",
};



export const DescriptionPlanets = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  
  
  let planet = store.planets[id]
  console.log(planet)



  // CARTA DE PERFIL E INFORMACION
    return (
        <div>
      <div className="container-fluid">
      <div className="card-description mb-3">
        <div className="row no-gutters">
          <div className="photo-description col-md-5">
            <img src={photoPlanets} 
                 style={stylePhotoPlanetas2} />
          </div>
          <div className="col-md-7">
            <div className="card-body text-center">
              <h2 className="card-title" >{planet.name}</h2>
              <p className="card-text">Datos del Planeta.</p>
              <div className="card-footer description-total">
                <div className="description">
                  <p>Name: {planet.name}</p>
                  <p>rotation_period: {planet.rotation_period}</p>
                  <p>orbital_period: {planet.orbital_period}</p>
                  <p>diameter: {planet.diameter}</p>
                  <p>climate: {planet.climate}</p>
                  <p>gravity: {planet.gravity}</p>
                  <p>terrain: {planet.terrain}</p>
                  <p>surface_water: {planet.surface_water}</p>
                  <p>population: {planet.population}</p>
                </div>
                <button className="button-atras bg-danger justify-content-right" > <Link className="text-white"  to="/">
                       Volver a Página Principal
                    </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default DescriptionPlanets;