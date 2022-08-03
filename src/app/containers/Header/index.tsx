import { NavLink } from "react-router-dom";
import logo from "assets/TC1.png";
import styled from "styled-components";
import { NavBar } from "app/components/NavBar";
import { useEffect, useState } from "react";
import { SocialMedia } from "app/components/SocialMedia";

const Logo = styled.img`
	width: 3rem;
`;

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100vw;
	z-index: 10;
	transition: all 0.3s ease;
	padding-top: 20px;
	padding-left: 20px;
	&.up {
		top: 0px;
	}
	&.top {
		top: 0px;
	}
	&.down {
		top: -90px;
	}
	&.up,
	&.down {
		background: rgba(59, 128, 210, 0.541);
		box-shadow: 0px 0px 5px black;
		padding: 8px;
		backdrop-filter: blur(10px);
		padding-left: 20px;
	}
`;

export const Header = () => {
	const [hState, sethState] = useState("top");

	useEffect(() => {
		var lastVal = 0;
		window.onscroll = function () {
			let y = window.scrollY;
			if (y > lastVal) {
				sethState("down");
			}
			if (y < lastVal) {
				sethState("up");
			}
			if (y === 0) {
				sethState("top");
			}
			lastVal = y;
		};
	}, []);
	return (
		<Nav className={hState}>
			<div style={{ display: "flex", marginTop: ".5rem" }}>
				<NavLink
					to="/"
					style={{
						padding: 0,
						margin: 0,
					}}
				>
					<Logo className="NavLogo" src={logo} alt="personal-logo" />
				</NavLink>
				<SocialMedia />
			</div>
			<NavBar />
		</Nav>
	);
};
