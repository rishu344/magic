import React, { Component } from "react";
import Title from "../Title";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import CartColimn from './CartColimn.js';
import {ProductConsumer} from "../../context";
import CartTotals from './CartTotals';
export default class Cart extends Component {
	render(){
		return (
<section>
<ProductConsumer>
{value =>{
	const {cart} = value;
	if(cart.length>0){
		return(
			<React.Fragment>
			<Title name="your" title="cart" />
			<CartColimn />
			<CartList value={value} />
			<CartTotals value={value} history={this.props.history} />
			</React.Fragment>
		);
	}else{
	return 	<EmptyCart />
	}
}}
</ProductConsumer>


</section>
			);
	}
}
