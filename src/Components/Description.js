import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import photoPeople from "../assets/imagen 1.jpg";


// ESTILO FOTO EN PERFIL
const stylePhotoPeople2 = {
  width: "500px",
  height: "490px",
};



export const Description = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  
  // console.log(id)
  
  let people = store.peoples[id]


  // CARTA DE PERFIL E INFORMACION
    return (
      <div className="container-fluid">
    
      <div className="card-description mb-3">
        <div className="row no-gutters">
          <div className="photo-description col-md-5">
            <img src={photoPeople} 
                 style={stylePhotoPeople2} />
          </div>
          <div className="col-md-7">
            <div className="card-body text-center">
              <h2 className="card-title">{people.name}</h2>
              <p className="card-text">Datos del Personaje.</p>
              <div className="card-footer description-total">
                <div className="description">
                  <p>Name: {people.name}</p>
                  <p>Height: {people.height}</p>
                  <p>Mass: {people.mass}</p>
                  <p>Hair Color: {people.hair_color}</p>
                  <p>Skin Color: {people.skin_color}</p>
                  <p>Eye Color: {people.eye_color}</p>
                  <p>Birth Year: {people.birth_year}</p>
                  <p>Gender: {people.gender}</p>
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
  );
};

export default Description;
