import tic from '../../assets/tictactoedemo.png'
import nestegg from '../../assets/nesteggpreview.png'
import './styles.scss'

const imgObj = {
	"Nestegg": nestegg,
	"Tic Tac Toe": tic,
	"Math for Tangerines": tic,
	"CV Creator": tic,
}

export default function ProjectCard({ projectData }) {
	const { name, demo, code, descr } = projectData;
	function redirectButton(url) {
		window.location.href = url;
	}
	return (
		<div className="cardContainer">
			<img className="imageContainer" src={imgObj[name]} />
			<div className='overlay'>
				<div className="infoContainer">
					<h2>{name}</h2>
					<p>{descr}</p>
					<div className="buttonsContainer">
						<a href={code} target="_blank" rel="noopener noreferrer" className='projectButton'>
							Code
						</a>
						<a href={demo} target="_blank" rel="noopener noreferrer" className='projectButton'>
							Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}