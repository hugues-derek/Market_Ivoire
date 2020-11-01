import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Default extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto pt-5 text-center text-title text-uppercase pt">
						<h1 className="display-3">404</h1>
						<h1>erreur</h1>
						<h2>page introuvable</h2>
						<h3>
							la page demandée :{" "}
							<span className="text-danger">
								{this.props.location.pathname}
							</span>{" "}
							est introuvable.
						</h3>{" "}
						&nbsp;
						<Link to="/">
							<ButtonContainer
								cart
								style={{ "margin-top": "1em", "text-transform": "uppercase" }}
							>
								retour vers les produits
							</ButtonContainer>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
