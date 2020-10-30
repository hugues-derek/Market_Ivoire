import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer, DivContainer, NavWrapper } from "./Button";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<NavWrapper>
					<nav className="navbar navbar-expand-sm  navbar-dark px-sm-">
						{/*  https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
						<Link to="/">
							<img src={logo} alt="Logo" className="navbar-brand" />
						</Link>

						<ul className="ul navbar-nav align-items-center">
							<li className="nav-item ml-5">
								<Link to="/" className="nav-link">
									<DivContainer>Produits</DivContainer>
								</Link>
							</li>
						</ul>

						<Link to="/cart" className="ml-auto">
							<ButtonContainer>
								<span className="mr-2">
									<i className="fas fa-cart-plus" />
									&nbsp;panier
								</span>
							</ButtonContainer>
						</Link>
					</nav>
				</NavWrapper>
			</div>
		);
	}
}
