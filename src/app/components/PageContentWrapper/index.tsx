import styled from "styled-components";

interface ContentProps {
	direction: "row" | "column";
}
export const Content = styled.div<ContentProps>`
	max-width: 1300px;
	width: 70%;
	display: flex;
	flex-direction: ${(props) => props.direction};
	justify-content: space-between;
	background-color: white;
	@media only screen and (max-width: 750px) {
		background-color: rgba(0,0,0,0);
		width: 90%;
		flex-direction: column;
		background-color: none;
		align-items: center;
		justify-content: space-evenly;
	}
`;
