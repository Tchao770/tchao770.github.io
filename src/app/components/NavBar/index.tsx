import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import resume from "assets/TommyChao.pdf";
import detectOutsideClick from "app/hooks/outsideClick";
import { MouseEvent, useEffect, useRef } from "react";

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
``;

export const NavBar = () => {
	return (
		<>
			<MenuToggle />
			<Navigation>
				<NavItems />
			</Navigation>
		</>
	);
};

const NavItems = () => {
	return (
		<ul className="menu">
			{urls.map((item, index) => {
				return (
					<li key={index}>
						<NavHashLink
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
							onClick={() => {
								const input = document.getElementById(
									"mobileNavButton"
								) as HTMLInputElement;
								input.checked = false;
								handlePageBehavior(false);
							}}
						>
							{item.title}
						</NavHashLink>
					</li>
				);
			})}
			<li>
				<ResumeButton onClick={() => window.open(resume, "_blank")}>
					<span className="text">Resume</span>
				</ResumeButton>
			</li>
		</ul>
	);
};

function handlePageBehavior(isNavOpen: boolean) {
	const body = document.querySelector("body");
	const overlay = document.getElementById("blurred");

	if (isNavOpen) {
		overlay!.classList.add("blurred");
		body!.style.overflow = "hidden";
	} else {
		body!.style.overflow = "visible";
		overlay!.classList.remove("blurred");
	}
}

const MenuToggle = () => {
	const navRef = useRef(null);
	const outsideClick = detectOutsideClick(navRef);

	useEffect(() => {
		const input = document.getElementById(
			"mobileNavButton"
		) as HTMLInputElement;
		if (outsideClick) {
			input.checked = false;
			handlePageBehavior(false);
		}
	}, [outsideClick]);

	const handleNavClick = (event: MouseEvent) => {
		const isChecked = (event.target as HTMLInputElement).checked;
		handlePageBehavior(isChecked);
	};

	return (
		<MobileNav id="mobileNav" ref={navRef}>
			<div className="menuToggle">
				<input
					id="mobileNavButton"
					type="checkbox"
					onClick={handleNavClick}
				/>
				<span className="navLine" />
				<span className="navLine" />
				<span className="navLine" />
				<NavItems />
			</div>
		</MobileNav>
	);
};

const Navigation = styled.div`
	ul {
		margin-right: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}
	.LinkItem {
		margin: 0 1em;
		position: relative;
		text-decoration: none;
		color: black;
		font-size: 1.5rem;
		&:hover:before {
			visibility: visible;
			transform: scaleX(1);
		}
	}
	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

const ResumeButton = styled.div`
	display: flex;
	border: 1px solid rgb(10, 38, 63);
	border-radius: 6px;
	height: 30px;
	font-weight: 500;
	font-size: 16px;
	user-select: none;
	width: 6em;
	transition-duration: 0.3s;
	.text {
		margin-left: 1em;
		margin-right: 1em;
		width: 100%;
		height: 100%;
		color: rgb(10, 38, 63);
		display: inherit;
		justify-content: center;
		align-items: center;
		transition-duration: 0.3s;
	}
	&:hover {
		background-color: rgba(59, 127, 210, 0.116);
		border-color: #2c82ce;
		.text {
			color: #2c82ce;
		}
	}
`;

const MobileNav = styled.div`
	.menuToggle {
		display: none;
		position: relative;
		right: 40px;
		z-index: 1;
		-webkit-user-select: none;
		user-select: none;
		a {
			text-decoration: none;
			color: #232323;

			transition: color 0.3s ease;
		}
		input {
			display: block;
			width: 40px;
			height: 32px;
			position: absolute;
			top: -7px;
			left: -10px;

			cursor: pointer;

			opacity: 0;
			z-index: 2;
			-webkit-tap-highlight-color: transparent;
			-webkit-touch-callout: none;
			&:checked ~ span {
				opacity: 1;
				transform: rotate(45deg) translate(-2px, -1px);
				background: #232323;
			}
			&:checked ~ span:nth-last-child(3) {
				opacity: 0;
				transform: rotate(0deg) scale(0.2, 0.2);
			}
			&:checked ~ span:nth-last-child(2) {
				transform: rotate(-45deg) translate(0, -1px);
			}
			&:checked ~ ul {
				transform: none;
			}
		}
		.navLine {
			display: block;
			width: 33px;
			height: 4px;
			margin-bottom: 5px;
			position: relative;

			background: #000000;
			border-radius: 3px;

			z-index: 1;

			transform-origin: 4px 0px;

			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
				background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
				opacity 0.55s ease;
			&:first-child {
				transform-origin: 0% 0%;
			}
			&:nth-last-child(2) {
				transform-origin: 0% 100%;
			}
		}
		.menu {
			overflow: hidden;
			position: absolute;
			width: 300px;
			margin: -100px 0 0 -200px;
			padding: 50px;
			padding-top: 125px;
			height: 100vh;
			background: #ededed;
			list-style-type: none;
			-webkit-font-smoothing: antialiased;

			transform-origin: 0% 0%;
			transform: translate(200%, 0);

			transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
			li {
				padding: 10px 0;
				font-size: 22px;
			}
		}
	}
	@media only screen and (max-width: 800px) {
		.menuToggle {
			display: block;
		}
	}
`;
