import React, { Component} from "react";
import {Link} from 'react-router-dom';
import PayPal from "./PayPal";
export default function CartTotals({value,history}){
  const{cartSubTotal,carTax,cartTotal,clearCart}=value;
return(
  <React.Fragment>
<div className="container">
<div className="row">
<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
<Link to='/cart'>
<button onClick={()=>clearCart()} className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button">
Clear carTax</button>
</Link>

<h5>
<span className="text-title">
subTotal: </span>
<strong>Rs {cartSubTotal}</strong>
</h5>
<h5>
<span className="text-title">
tax: </span>
<strong>Rs {carTax}</strong>
</h5>
<h5>
<span className="text-title">
Total: </span>
<strong>Rs {cartTotal}</strong>
</h5>
<PayPal total={cartTotal} clearCart={clearCart} history={history} />

</div>
</div>
</div>
</React.Fragment>
);
}
