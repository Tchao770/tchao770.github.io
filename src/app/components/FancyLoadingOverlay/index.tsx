import { useEffect, useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	z-index: 100000;
	transition: ease-out 6s;
	display: flex;
	&.hide {
		background-color: rgba(0, 0, 0, 0);
		z-index: -9999;
	}
`;

const CloudLeft = styled.div`
	position: fixed;
	height: 100vh;
	width: 50%;
	background-color: white;
	transition: ease-out 6s;
	animation: left 5s;
	animation-delay: 1s;
	animation-timing-function: ease-out;
	@keyframes left {
		0% {
			left: 0;
		}
		100% {
			left: -100%;
		}
	}
	&.hide {
		//background-color: rgba(0, 0, 0, 0);
		z-index: -9999;
	}
`;
const CloudRight = styled.div`
	position: fixed;
	height: 100vh;
	width: 50%;
	background-color: white;
	right: -0px;
	transition: ease-out 6s;
	animation: right 5s;
	animation-delay: 1s;
	animation-timing-function: ease-out;
	@keyframes right {
		100% {
			right: -100%;
		}
	}
	&.hide {
		//background-color: rgba(0, 0, 0, 0);
		z-index: -9999;
	}
`;

export const FancyLoadingOverlay = () => {
	const [hide, setHide] = useState("");
	useEffect(() => {
		setHide("hide");
	}, []);

	return (
		<Overlay className={hide}>
			<CloudLeft className={hide} />
			<CloudRight className={hide} />
		</Overlay>
	);
};
