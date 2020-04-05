import React, { Component } from "react";
import {ProductConsumer} from "../context";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from './Button';

export default class Model extends Component {
	render(){
		return (
      <ProductConsumer>
        {(value)=>{
          const {model,closem}=value;
          const {img,title,price}=value.modelp;
          if(!model){
            return null;
          }else{
            return(  <ModelC>
              <div className="container">
              <div className="row">
              <div id="modal" className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
              <h5> Item added to the cart.</h5>
              <img src={img} className="img-fluid" alt="oo" style={{height:'25rem'}} />
              <h5>{title}</h5>
              <h5 className="text-muted">price: Rs {price}</h5>
              <Link to='/'><Button onClick={()=>{
                closem();
              }}>Continue Shopping
              </Button></Link>
              <Link to='/cart'><Button cart onClick={()=>{
                closem();
              }}>go to cart
              </Button></Link>
              </div>
              </div>
              </div>
            </ModelC>
          );
          }
          return
        }}
          </ProductConsumer>
			);
	}
}

const ModelC = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
jusify-content:center;
#modal{
  background:var(--mainWhite);
}
`;
