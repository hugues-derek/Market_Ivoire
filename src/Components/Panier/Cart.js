import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import PanierVide from "./PanierVide";
import { ProductConsumer } from "../../context";
import CartList from "../Panier/CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { cart } = value;
					if (cart.length) {
						return (
							<section>
								<Title name="votre" title="panier" />
								<CartColumns />
								<CartList value={value} />
								<CartTotals value={value} />
							</section>
						);
					} else {
						return <PanierVide />;
					}
				}}
			</ProductConsumer>
		);
	}
}
