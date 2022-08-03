import styled from "styled-components";
import gh from "assets/github.svg";
import li from "assets/linkedin.svg";

const SocialMediaContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 1rem;
`;

export const SocialMedia = () => {
	return (
		<SocialMediaContainer>
			<a
				href="https://www.github.com/tchao770/"
				target="_blank"
				style={{ textDecoration: "none" }}
			>
				<img src={gh} alt="github" />
			</a>
			<a href="https://www.linkedin.com/in/tchao770/" target="_blank">
				<img src={li} alt="instagram" />
			</a>
		</SocialMediaContainer>
	);
};
