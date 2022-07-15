import { NavHashLink } from 'react-router-hash-link';
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

export const NavBar = () => {
	return (
		<div className="LinkContainer" >
			{
				urls.map((item) => {
					return (
						<NavHashLink
							to={item.url}
							className={({ isActive }) =>
								isActive ? "LinkItem active" : "LinkItem"
							}
							scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
						>
							{item.title}
						</NavHashLink>
					)
				})
			}
		</div>
	)
}