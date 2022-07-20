import { NavLink } from "react-router-dom";
import logo from "assets/TC1.png";
import styled from "styled-components";
import { NavBar } from "app/components/NavBar";

const Logo = styled.img`
	width: 3rem;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100vw;
`;

const Head = styled.header`
	background: rgb(116, 177, 252);
	position: fixed;
	width: 100vw;
	top: 0;
`;

export const Header = () => {
	return (
		<Head>
			<Nav>
				<NavLink to="/">
					<Logo className="NavLogo" src={logo} alt="personal-logo" />
				</NavLink>
				<NavBar />
			</Nav>
		</Head>
	);
};
