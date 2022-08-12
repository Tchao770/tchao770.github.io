import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import antd from "assets/skills/antd.svg";
import aws from "assets/skills/aws.svg";
import bootstrap from "assets/skills/bootstrap.svg";
import cakephp from "assets/skills/cakephp.svg";
import cplusplus from "assets/skills/cplusplus.svg";
import css from "assets/skills/css.svg";
import django from "assets/skills/django.svg";
import flutter from "assets/skills/flutter.svg";
import html from "assets/skills/html.svg";
import javascript from "assets/skills/javascript.svg";
import jquery from "assets/skills/jquery.svg";
import laravel from "assets/skills/laravel.svg";
import nodejs from "assets/skills/nodejs.svg";
import php from "assets/skills/php.svg";
import python from "assets/skills/python.svg";
import react from "assets/skills/react.svg";
import sass from "assets/skills/sass.svg";
import typescript from "assets/skills/typescript.svg";
import webpack from "assets/skills/webpack.svg";
import styled from "styled-components";

const frontends = [
	javascript,
	typescript,
	css,
	html,
	react,
	nodejs,
	sass,
	antd,
	bootstrap,
	jquery,
	webpack,
	flutter,
];

const backends = [aws, cplusplus, python, django, php, laravel, cakephp];

export const Skills = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === "/skills") {
			document
				.getElementById("skills")
				?.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);
	return (
		<SkillsSection id="skills">
			<h1>Skills</h1>
			<IconContainer>
				<InfiniteLooper speed={50} direction="right">
					<div
						style={{
							paddingBottom: "2em",
						}}
					>
						{frontends.map((icon, index) => {
							return <Icon src={icon} alt="nice" key={index} />;
						})}
					</div>
				</InfiniteLooper>
				<InfiniteLooper speed={30} direction="left">
					{backends.map((icon, index) => {
						return <Icon src={icon} alt="nice" key={index} />;
					})}
				</InfiniteLooper>
			</IconContainer>
		</SkillsSection>
	);
};

const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 70%;
	box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
	padding-top: 1em;
	padding-bottom: 1em;
	background-color: rgba(182, 206, 235, 0.18);
	@media only screen and (max-width: 800px) {
		width: 90%;
	}
`;

const SkillsSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(121, 168, 224, 0.18);
	h1 {
		text-align: center;
		font-size: 2em;
		padding-bottom: 1rem;
		position: relative;
		&:before {
			position: absolute;
			bottom: 1px;
			content: "";
			background-color: #fdc435;
			width: 80%;
			height: 2px;
			margin: 0 auto;
			left: 0;
			right: 0;
			transition: 0.5s;
		}
		&:hover:before {
			width: 100%;
			background-color: #ffbf1e;
		}
	}

	@media only screen and (max-width: 800px) {
		height: 90vh;
	}
`;

const Icon = styled.img`
	width: 100px;
	height: 100px;
	user-select: none;
	padding-left: 3em;
	padding-right: 3em;
	@media only screen and (max-width: 800px) {
		width: 50px;
		height: 50px;
	}
`;

const InfiniteLooper = function InfiniteLooper({
	speed,
	direction,
	children,
}: {
	speed: number;
	direction: "right" | "left";
	children: React.ReactNode;
}) {
	const [looperInstances, setLooperInstances] = useState(1);
	const outerRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	function resetAnimation() {
		if (innerRef?.current) {
			innerRef.current.setAttribute("data-animate", "false");

			setTimeout(() => {
				if (innerRef?.current) {
					innerRef.current.setAttribute("data-animate", "true");
				}
			}, 10);
		}
	}

	const setupInstances = useCallback(() => {
		if (!innerRef?.current || !outerRef?.current) return;
		const { width } = innerRef.current.getBoundingClientRect();
		const { width: parentWidth } = outerRef.current.getBoundingClientRect();
		const widthDeficit = parentWidth - width;
		const instanceWidth = width / innerRef.current.children.length;
		if (widthDeficit) {
			setLooperInstances(
				looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
			);
		}

		resetAnimation();
	}, [looperInstances]);

	useEffect(() => setupInstances(), [setupInstances]);
	useEffect(() => {
		window.addEventListener("resize", setupInstances);

		return () => {
			window.removeEventListener("resize", setupInstances);
		};
	}, [looperInstances, setupInstances]);

	return (
		<Looper>
			<div className="looper" ref={outerRef}>
				<div
					className="looper__innerList"
					ref={innerRef}
					data-animate="true"
				>
					{[...Array(looperInstances)].map((_, ind) => (
						<div
							key={ind}
							className="looper__listInstance"
							style={{
								animationDuration: `${speed}s`,
								animationDirection:
									direction === "right"
										? "reverse"
										: "normal",
							}}
						>
							{children}
						</div>
					))}
				</div>
			</div>
		</Looper>
	);
};

const Looper = styled.div`
	width: 100%;
	@keyframes slideAnim {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}

	.looper {
		width: 100%;
		overflow: hidden;
	}

	.looper__innerList {
		display: flex;
		justify-content: center;
		width: fit-content;
	}

	.looper__innerList[data-animate="true"] .looper__listInstance {
		animation: slideAnim linear infinite;
	}

	.looper__listInstance {
		display: flex;
		width: max-content;
		animation: none;
	}
`;
