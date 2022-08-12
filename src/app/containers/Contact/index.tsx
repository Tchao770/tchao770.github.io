import { Button } from "@mantine/core";
import { ContactForm } from "app/components/ContactForm";
import { SocialMedia } from "app/components/SocialMedia";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import gh from "assets/github.svg";
import li from "assets/linkedin.svg";

export const Contact = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/contact")
			document
				.getElementById("contact")
				?.scrollIntoView({ behavior: "smooth" });
	}, [location]);
	return (
		<ContactSection id="contact">
			<Content>
				<div className="TextSection">
					<h1 className="header">Send me an email!</h1>
					<div className="paragraph">
						If you're looking to connect with a cool developer, feel
						free to check out my social media or send me a message
						directly!
					</div>
					<div className="MediaIcons">
						<a
							href="https://www.github.com/tchao770/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<img src={gh} alt="github" />
						</a>
						<a
							href="https://www.linkedin.com/in/tchao770/"
							target="_blank"
						>
							<img src={li} alt="linkedin" />
						</a>
					</div>
				</div>
				<ContactForm />
			</Content>
			<FooterBanner>
				Websited designed and developed by Tommy Chao
			</FooterBanner>
		</ContactSection>
	);
};

const ContactSection = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(142, 181, 229, 0.18);
	position: relative;
`;
const FooterBanner = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: auto;
	padding-top: 1em;
	padding-bottom: 1em;
	color: white;
	position: absolute;
	bottom: 0;
	background-color: rgba(80, 141, 214, 1);
`;
const Content = styled.div`
	max-width: 1000px;
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	.TextSection {
		h1 {
			font-size: 2em;
			padding-bottom: 1rem;
			position: relative;
			&:before {
				position: absolute;
				bottom: 1px;
				content: "";
				background-color: #fdc435;
				width: 20%;
				height: 2px;
				left: 0;
				right: 0;
				transition: 0.5s;
			}
			&:hover:before {
				width: 60%;
				background-color: #ffbf1e;
			}
		}
		.paragraph {
			width: 80%;
		}
	}
	.MediaIcons {
		padding-top: 1em;
	}
	@media only screen and (max-width: 800px) {
		.TextSection {
			h1 {
				text-align: center;
				&:before {
					margin: 0 auto;
				}
				&:hover:before {
					width: 50%;
					background-color: #ffbf1e;
				}
			}
		}
		.paragraph {
			margin: auto;
		}
		background-color: rgba(0, 0, 0, 0);
		width: 90%;
		flex-direction: column;
		background-color: none;
		align-items: center;
		justify-content: center;
		.MediaIcons {
			display: flex;
			justify-content: center;
			padding-bottom: 1em;
		}
	}
`;
