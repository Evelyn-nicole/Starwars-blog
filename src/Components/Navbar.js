import React, { useContext } from "react";
import { Context } from "../Store/appContext";
import { Link } from "react-router-dom";
import logo from "../assets/logostarwars.png";




export const Navbar = () => {
  const { store, actions } = useContext(Context);

  // ELIMINAR FAVORITOS DESDE EL DROPDOWN
  const DeleteElement = (fav) => actions.setFavorites(fav);


  
  //    AQUI COMIENZA EL NABVAR
  return (
    <div className="navbar-app">
      <ul className="nav justify-content-end">
        <Link to="/" className="navlink-logo">
          <img className="logo" src={logo} alt="..." />
        </Link>
        <li className="nav-item">
          <Link className="nav-link active text-warning mt-4" to="/">
            Personajes
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-warning mt-4" to="/">
            Planetas
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-warning mt-4" to="/">
            Vehiculos
          </Link>
        </li>


        {/* AQUI COMIENZA DROPDOWN FAVORITES */}
        <div className="dropdown">
          <ul>
            <li>{store.favorites.map((fav) => (
            <li className="text-white" key={fav}>
              {fav} <button className="eliminiar-favoritos bg-danger text-white" onClick={()=>DeleteElement(fav)}> X </button>
            </li>
          ))}
            </li>
          </ul>
        </div>



        {/* <div >
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos 
                        {console.log(store.favorites)}
                     </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((fav, id) =>
                        <p key={id}>{fav}</p>
                            // <li className="dropdown-item"
                            // key={id}> {fav}
                                    
                            //         <FontAwesomeIcon
                            //             icon={faTimes}
                            //             className="delete-element"
                            //             onClick={()=>DeleteElement(id)} 
                            //             />
                            //             {console.log(fav)}
                            //     </li>
                        )}
                    </div>
            </div> */}
      </ul>
    </div>
  );
};
export default Navbar;
