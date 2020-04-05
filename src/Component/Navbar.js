import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from '../images.png'
import styled from "styled-components";
import {Button} from "./Button";
export default class Navbar extends Component {
	render(){
		return (
<Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
<Link to='/'>
<img src={logo} alt="store" className="navbar-brand" height="80px" />
</Link>
<ul className="navbar-nav.align-items-center">
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
Magic Finger</Link>
</li>
</ul>
<Link to='/cart' className="ml-auto">
<Button>
<span>
 <i className="fas fa-cart-plus" />
 </span>
 <span>
<i className="fas fa-cart" />
</span>
My cart
</Button>
</Link>
</Navwrapper>
			);
	}
}
const Navwrapper =styled.nav`
background-color: var(--mainBlue);
.nav-link{
	color: var(--mainWhite) !important;
	font-size:1.3rem;
	text-transform:capitalize ;
}
`;
