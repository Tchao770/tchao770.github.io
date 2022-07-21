import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

const urls = [
	{
		title: "About",
		url: "/about",
	},
	{
		title: "Projects",
		url: "/projects",
	},
	{
		title: "Skills",
		url: "/skills",
	},
	{
		title: "Contact Me",
		url: "/contact",
	},
];

const Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 1rem;
	.LinkItem {
		margin: 0 1em;
		position: relative;
		text-decoration: none;
		color: black;
		font-size: 25px;
		&.active:before {
			content: "";
			width: 100%;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: black;
			visibility: visible;
			transform: scaleX(1);
		}

		&:before {
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: black;
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.3s ease-in-out;
		}
		&:hover:before {
			visibility: visible;
			transform: scaleX(1);
		}
	}
`;

export const NavBar = () => {
	return (
		<Navigation>
			{urls.map((item, index) => {
				return (
					<NavHashLink
						key={index}
						to={item.url}
						className={({ isActive }) =>
							isActive ? "LinkItem active" : "LinkItem"
						}
						scroll={(el) =>
							el.scrollIntoView({
								behavior: "auto",
								block: "end",
							})
						}
					>
						{item.title}
					</NavHashLink>
				);
			})}
		</Navigation>
	);
};
