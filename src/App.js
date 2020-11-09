import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Cart from "./Components/Panier";
import Modal from "./Components/Modal";
import { FooterContainer } from "./Components/container/footer";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route path="/" exact component={ProductList} />
				<Route path="/details" exact component={Details} />
				<Route path="/cart" exact component={Cart} />
				<Route component={Default} />
			</Switch>
			<Modal />
			<FooterContainer />
		</React.Fragment>
	);
}

export default App;
