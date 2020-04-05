import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import {storeProducts} from "./data.js";
import {ProductConsumer} from "../context";
export default class Products extends Component {
	state={
		productss:storeProducts
	};
	render(){
		// console.log(this.state.productss);
		return (
<React.Fragment>
<div className="py-5">
<div className="container">
<Title name="our" title="products" />

<div className="row">
<ProductConsumer>
{ value =>{
return value.productss.map(product=>{
	return <Product key={product.id} product={product} />;
});
}
}
</ProductConsumer>
</div>
</div></div>
</React.Fragment>
			);
	}
}
