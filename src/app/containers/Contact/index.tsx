import { Button } from "@mantine/core";
import { ContactForm } from "app/components/ContactForm";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const ContactContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(142, 181, 229, 0.18);
	.header {
		text-align: center;
		font-size: 2em;
	}
`;

export const Contact = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/contact")
			document
				.getElementById("contact")
				?.scrollIntoView({ behavior: "smooth" });
	}, [location]);
	return (
		<ContactContainer id="contact">
			<div className="header">Send me an Email!</div>
			<ContactForm />
		</ContactContainer>
	);
};
