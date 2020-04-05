import React, { Component } from "react";
import {ProductConsumer} from "../context";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from './Button';
export default class Details extends Component {
	render(){
		return (
				<ProductConsumer>
				  {(value)=>{
						const {id,title,img,price,info,inCart} =
						value.detailProduct;
						return(
							<div className="container py-5">

							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
										<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<img src={img} className="img-fluid" alt="kk" height="50"/>
							</div>
							{/* product text */}
							<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
								<h2>Name:{title}</h2>
								<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
									made by : <span className="text-uppercase">A handicapped person </span>
								</h4>
								<h4 className="text-blue">
									<strong>
									price:<span>Rs </span>{price}
									</strong>
								</h4>
								<p className="text-capitalize font-weight-bold mt-3 mb-0">
								Some Info about the product:		</p>
								<p className="text-muted lead">{info}		</p>
								<div>
									<Link to='/'>
									<Button>back to products</Button></Link>
										<Button cart disabled={inCart?true:false} onClick={()=>{
											value.addtoCart(id);
											value.openm(id);
										}}>{inCart?"inCart":"add to cart"}</Button>
								</div>

							</div>
							</div>
							</div>
						)
					}}
				</ProductConsumer>
			);
	}
}
