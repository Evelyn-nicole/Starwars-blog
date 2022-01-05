import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import photoVehicles from "../assets/nave1.jpg";


// ESTILO FOTO EN PERFIL
const stylePhotoVehicles2 = {
  width: "500px",
  height: "490px",
};



export const DescriptionVehicles = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  
  
  let vehicle = store.vehicles[id]
  console.log(vehicle)



  // CARTA DE PERFIL E INFORMACION
    return (
        <div>
      <div className="container-fluid">
      <div className="card-description mb-3">
        <div className="row no-gutters">
          <div className="photo-description col-md-5">
            <img src={photoVehicles} 
                 style={stylePhotoVehicles2} />
          </div>
          <div className="col-md-7">
            <div className="card-body text-center">
              <h2 className="card-title" >{vehicle.name}</h2>
              <p className="card-text">Datos del Vehículo.</p>
              <div className="card-footer description-total">
                <div className="description">
                  <p>Name: {vehicle.name}</p>
                  <p>Model: {vehicle.model}</p>
                  <p>Manufacturer: {vehicle.manufacturer}</p>
                  <p>Cost in Credits: {vehicle.cost_in_credits}</p>
                  <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
                  <p>Crew: {vehicle.crew}</p>
                  <p>Passengers: {vehicle.passengers}</p>
                  <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                  <p>Consumables: {vehicle.consumables}</p>
                  <p>Vehicle Class: {vehicle.vehicle_class}</p>
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

export default DescriptionVehicles;