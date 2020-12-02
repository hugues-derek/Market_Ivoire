import React from "react";
import Footer from "../footer";
//import Icon from "../icons";

export function FooterContainer() {
	return (
		<Footer>
			<Footer.Wrapper>
				<Footer.Row>
					<Footer.Column>
						<Footer.Title>A propos de nous</Footer.Title>
						<Footer.Link href="#">Histoire</Footer.Link>
						<Footer.Link href="#">Clients</Footer.Link>
					</Footer.Column>

					<Footer.Column>
						<Footer.Title>Services</Footer.Title>
						<Footer.Link href="#">Marketing</Footer.Link>
						<Footer.Link href="#">Développement</Footer.Link>
						<Footer.Link href="#">Design</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title>Contactez-nous</Footer.Title>
						<Footer.Link href="#">Côte D'ivoire</Footer.Link>
						<Footer.Link href="#">Tunisie</Footer.Link>
					</Footer.Column>
					<Footer.Column>
						<Footer.Title>Réseaux Sociaux</Footer.Title>
						<Footer.Link href="#">
							<i className="fab fa-facebook"> Facebook</i>
						</Footer.Link>
						<Footer.Link>
							<i className="fab fa-instagram"> Instagram</i>
						</Footer.Link>

						<Footer.Link href="#">
							<i className="fab fa-github"> Github</i>
						</Footer.Link>
					</Footer.Column>
				</Footer.Row>
			</Footer.Wrapper>
		</Footer>
	);
}
