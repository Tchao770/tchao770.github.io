import profileImg from '../../assets/profile.jpg'
import "./styles.scss"

export default function About() {
	return (
		<div className="AboutContainer">
			<div className="TextSection">
				<div className="BriefSection">Hi, I'm Tommy!</div>
				<div className="AboutMe">I'm a Web Developer that likes making web applications</div>
				<div className="ViewProjectButton">View Projects</div>
				<div className="ViewProjectButton">About Me</div>
			</div>
			<img className="ProfileImg" src={profileImg} />
		</div>
	)
}
