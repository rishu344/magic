import React from 'react';
import './App.css';
import Model from './Component/Model.js';
import {Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar.js";
import Products from "./Component/Products.js";
import Details from "./Component/Details.js";
import Cart from "./Component/Cart/Cart.js";
import Default from "./Component/Default.js";

function App() {
  return (
    <React.Fragment>
   <Navbar />
   <Switch>
   <Route exact path="/" component={Products} />
   <Route path="/details" component={Details} />
   <Route path="/cart" component={Cart} />
   <Route component={Default} />

   </Switch>
   <Model />
   </React.Fragment>
   );
}

export default App;
