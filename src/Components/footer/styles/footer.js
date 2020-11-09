import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	background: var(--mainBlue);
	position: relative;
	top: 50px;
	padding: 0;
	margin-top: auto;
	flex-shrink: 0;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Wrapper = styled.div`
	margin-top: 10px;
	flex-direction: column;
	margin: auto;
	max-width: 1000px;
	max-height: 900px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	grid-gap: 20px;
`;

export const Link = styled.div`
	margin-bottom: 20px;
	font-size: 1.3rem;
	color: var(--mainWhite);
	@media all and (max-width: 526px) {
		text-align: center;
	}

	&:hover {
		color: #ffffff;
		transition: 200ms ease-in;
		cursor: pointer;
	}
`;

export const Title = styled.div`
	font-size: 1.4rem;
	color: var(--mainYellow);
	margin-bottom: 15px;
	margin-top: 10px;
	@media all and (max-width: 526px) {
		text-align: center;
	}
`;
