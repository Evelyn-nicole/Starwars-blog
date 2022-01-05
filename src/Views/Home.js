import React, { useEffect, useContext, useState } from "react";
import { Context } from "../Store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import photoPeople from "../assets/imagen 1.jpg";
import photoPlanetas from "../assets/Planetas.png";
import photoVehiculos from "../assets/nave1.jpg";


const stylePhotoPeople = {
  width: "",
  height: "220px",
};
const stylePhotoPlanetas = {
  width: "",
  height: "220px",
};
const stylePhotoVehiculos = {
  width: "",
  height: "220px",
};

const Home = ({}) => {
  const { store, actions } = useContext(Context);

  const [state, setState] = useState(0);


  useEffect(() => {
    actions.getPeoples();
    actions.getPlanets();
    actions.getVehicles();
  }, []);


  // AGREGAR A FAVORITOS
  const Addfavorites = (newItem) => {
    store.favorites.map(newItem => {
        if (newItem.name === newItem.name) {
            setState();
            actions.setFavorites(newItem);
        }
    })
    if (state === 0) {
        actions.FavoritesAdd(newItem);
        setState();
    } else {
        setState();
    }

    // console.log(store.favorites);
}


  return (
    <div>
    
        <div className="container-fluid">
            <h1 className="titleHome">PERSONAJES DE STAR WARS</h1>
            <div className="container-fluid">
            <div className="row">{store.peoples.map((people, id) => 
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" key = {id} >
                <div className="card">
                    <img
                    className="card-description-img-top"
                    style={stylePhotoPeople}
                    src={photoPeople}
                    alt="Card image cap"
                    />
                    <div className="card-body">
                      <h3 className="card-title text-center" >{people.name}</h3>
                      <p className="card-text text-center" >Gender: {people.gender}</p>
                      <p className="card-text text-center" >Birth Year: {people.birth_year}</p>
                    
                    
                    
                      <FontAwesomeIcon 
                      icon={faHeart} 
                      className="iconoHeart"
                      onClick={() => actions.FavoritesAdd(people.name)}
                      />
                    

                      <button className="botonCard btn btn-dark mt-3"><Link className="text-white" to={`/Description/${id}`} >Leer Más</Link></button>
                    </div>
                </div>
                  
                </div>
            )}
            </div>
            </div>
        </div>

                {/* AQUI COMIENZAN LOS PLANETAS */}
        <div className="container-fluid">
            <h1 className="titleHome">PLANETAS DE STAR WARS</h1>
            <div className="container-fluid">
            <div className="row">{store.planets.map((planet, id) => 
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3"  key = {planet.name}>
                <div className="card">
                    <img
                    className="card-description-img-top"
                    style={stylePhotoPlanetas}
                    src={photoPlanetas}
                    alt="Card image cap"
                    />
                    <div className="card-body">
                    <h3 className="card-title text-center">{planet.name}</h3>
                    <p className="card-text text-center" >Terrain: {planet.terrain}</p>
                    <p className="card-text text-center" >Climate: {planet.climate}</p>

                    
                    <FontAwesomeIcon 
                      icon={faHeart} 
                      className="iconoHeart"
                      onClick={() => actions.FavoritesAdd(planet.name)}
                      />
                   

                    <button className="botonCard btn btn-dark mt-3"><Link className="text-white" to={`/DescriptionPlanets/${id}`} >Leer Más</Link></button>
                    </div>
                </div>
                </div>
            )}
            </div>
            </div>
        </div>


                  {/* AQUI COMIENZAN LOS VEHICULOS */}
        <div className="container-fluid">
            <h1 className="titleHome">VEHICULOS DE STAR WARS</h1>
            <div className="container-Fluid">
            <div className="row">{store.vehicles.map((vehicle, id) => 
                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" key = {vehicle.name}>
               
                <div className="card">
                    <img
                    className="card-description-img-top"
                    style={stylePhotoVehiculos}
                    src={photoVehiculos}
                    alt="Card image cap"
                    />
                    <div className="card-body">
                    <h3 className="card-title text-center">{vehicle.name}</h3>
                    <p className="card-text text-center" >Model: {vehicle.model}</p>
                    <p className="card-text text-center" >Vehicle Class: {vehicle.vehicle_class}</p>
                    
                    
                    <FontAwesomeIcon 
                      icon={faHeart} 
                      className="iconoHeart"
                      onClick={() => actions.FavoritesAdd(vehicle.name)}
                      />
                    

                    <button className="botonCard btn btn-dark mt-3"><Link className="text-white" to={`/DescriptionVehicles/${id}`} >Leer Más</Link></button>
                    </div>
                </div>
                </div>
            )}
            </div>
            </div>
        </div>
    </div>
    
  );
};

export default Home;

// // {store.peoples.map((people, index) => store.people)}
// {/* <div className="iconoDelete">
//                     <FontAwesomeIcon icon={faTrash} />
//                   </div>


// {/* <p className="card-text" key = {index}>Gender: {people.gender}</p>
//                       <p className="card-text" key = {index}>Population: {people.population}</p>
//                       <p className="card-text" key = {index}>Hair color: {people.hair_color}</p>
//                       <p className="card-text" key = {index}>Height: {people.height}</p> */}

//                     {/* {(store.favorites.find(element => element.name === list.name)) } */}