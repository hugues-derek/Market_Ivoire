import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div className="container mt-2">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={() => {
									clearCart();
								}}
							>
								Effacer le panier
							</button>
						</Link>
						<h5>
							<span className="text-title">Sous-Total : </span>
							<strong>{cartSubTotal}.000 FCFA</strong>
						</h5>
						<h5>
							<span className="text-title">taxe : </span>
							<strong>{cartTax}.000 FCFA</strong>
						</h5>
						<h5>
							<span className="text-title">total : </span>
							<strong>{cartTotal}.000 FCFA</strong>
						</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
