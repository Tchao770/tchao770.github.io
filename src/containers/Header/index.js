import { NavLink } from 'react-router-dom';
import logo from '../../assets/TC1.png';
import { NavBar } from '../../components/NavBar';
import "./styles.scss"

const urls = [
	{
		title: 'About',
		url: '/about'
	},
	{
		title: 'Projects',
		url: '/projects'
	},
	{
		title: 'Skills',
		url: '/skills'
	},
	{
		title: 'Contact Me',
		url: '/contact'
	},
]

export default function Header() {
	return (
		<header>
			<nav className="Nav">
				<NavLink to="/" href="!#">
					<img className="NavLogo" src={logo} alt="personal-logo" />
				</NavLink>
				<NavBar />
			</nav>
		</header>
	)
}
