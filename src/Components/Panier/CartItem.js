import React from "react";

export default function CartItem({ item, value }) {
	const { id, title, img, price, total, count } = item;
	const { increment, decrement, removeItem } = value;
	return (
		<div className="row my-1 text-capitalize text-center">
			<div className="col-10 mx-auto col-lg-2 my-1">
				<img
					src={img}
					style={{ width: "5rem", height: "5rem" }}
					alt="smartphone"
					className="img-fluid"
				/>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">produit : </span>
				{title}
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">prix : </span>
				{price}.000 FCFA
			</div>
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center">
					<div>
						<span className="btn btn-black mx-1" onClick={() => decrement(id)}>
							-
						</span>
						<span className="btn btn-black mx-1">{count}</span>
						<span className="btn btn-black mx-1" onClick={() => increment(id)}>
							+
						</span>
					</div>
				</div>
			</div>
			{/*  */}
			<div className="col-10 mx-auto col-lg-2">
				<div className="cart-icon">
					<i
						className="fas fa-trash"
						onClick={() => {
							removeItem(id);
						}}
					></i>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>total : {total}.000 FCFA</strong>
			</div>
		</div>
	);
}
