import styled from "styled-components";

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.5rem solid var(--lightBlue);
	border-color: ${(props) =>
		props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
	color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${(props) =>
			props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
		color: var(--mainBlue);
	}
	&:focus {
		outline: none;
	}
`;
export const DivContainer = styled.div`
	color: var(mainWhite);
	font-size: 1.3rem;
	text-transform: capitalize;
`;

export const NavWrapper = styled.nav`
	background: var(--mainBlue);
`;

export const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px, 2px, 5px, 0px, rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgb(171, 235, 228);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0px;
		right: 0px;
		background: var(--lightBlue);
		padding: 0.2rem 0.4rem;
		border: none;
		color: var(--mainBlue);
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0.5rem;
		transform: translate(100%, 100%);
		transition: all 1s linear;
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		color: var(--mainBlue);
		cursor: pointer;
	}
`;
