import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import injectContext from "./Store/appContext.js";
import Navbar from "./Components/Navbar.js";
import Home from "./Views/Home.js";
import Description from "./Components/Description.js";
import DescriptionPlanets from "./Components/DescriptionPlanets.js";
import DescriptionVehicles from "./Components/DescriptionVehicles.js";
import "./App.css";


const App = () => {
  return <Router>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Description/:id">
              < Description />
            </Route>

            <Route exact path="/DescriptionPlanets/:id">
              < DescriptionPlanets />
            </Route>

            <Route exact path="/DescriptionVehicles/:id">
              < DescriptionVehicles />
            </Route>

            <Route render={()=><h6>Oops... Not Found</h6>}></Route>
          </Switch>
    </Router> 
  
 
};

export default injectContext(App);
