import styled from "styled-components";

const CloudStyles = styled.div`
	background: rgba(255, 255, 255);
	width: 300px;
	height: 100px;
	border-radius: 150px;
	box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
	animation: move 2.5s infinite;

	&:after {
		content: "";
		background: rgba(255, 255, 255);
		position: absolute;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		top: -50px;
		left: 50px;
	}

	&:before {
		content: "";
		background: rgba(255, 255, 255);
		position: absolute;
		width: 170px;
		height: 150px;
		border-radius: 50%;
		top: -90px;
		right: 40px;
	}

	@keyframes move {
		0% {
			transform: translatex(0);
		}
		50% {
			transform: translatex(-10px);
		}
	}
`;

export const Clouds = () => {
	return <CloudStyles />;
};
