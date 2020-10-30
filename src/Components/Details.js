import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "../Components/Button";

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const {
						id,
						company,
						img,
						info,
						price,
						title,
						inCart,
					} = value.detailProduct;
					return (
						<div className="container py-5">
							{/* title */}
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
								</div>
							</div>
							{/* end of title */}
							{/* product info */}
							<div className="row">
								{/* product img */}
								<div className="col-10 mx-auto col-md-6 my-3">
									<img src={img} className="img-fluid" alt="smartphone" />
								</div>
								{/* end of product img */}
								{/* product text */}
								<div className="col-10 mx-auto col-md-6 my-6 text-capitalize">
									<h2>model: &nbsp; {title}</h2>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
										fabriqué par :{" "}
										<span className="text-uppercase mt-3 mb-2">{company}</span>
									</h4>
									<h4 className="text-blue mt-3 mb-2">
										<strong>prix : {price}.000 FCFA</strong>
										<p className="text-capitalize font-weight-bold mt-3 mb-1">
											infos :
										</p>
										<p className="text-muted lead">{info}</p>
									</h4>
									<Link to="/">
										<ButtonContainer>retour aux produits</ButtonContainer>
									</Link>
									<ButtonContainer
										cart
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}
									>
										{inCart ? "déjà dans le panier" : "ajouter au panier"}
									</ButtonContainer>
								</div>
								{/* end of product text */}
								{/* buttons */}

								{/* end of buttons */}
								{/* end of product-info */}
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
