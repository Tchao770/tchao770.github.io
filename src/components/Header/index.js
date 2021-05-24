import { NavLink } from 'react-router-dom';
import logo from '../../assets/TC1.png';

console.log("nice!");
export default function Header() {
    return (
        <header>
            <nav className="Nav">
                <NavLink to="/" href="!#">
                    <img className="NavLogo" src={logo} alt="personal-logo" />
                </NavLink>
                <div className="NavContainer">
                    <NavLink
                        className="LinkItem"
                        href="!#"
                        to="/About"
                        activeClassName="active">About</NavLink>
                    <NavLink
                        className="LinkItem"
                        href="!#"
                        to="/Projects"
                        activeClassName="active">Projects</NavLink>
                    <NavLink
                        className="LinkItem"
                        href="!#"
                        to="/Skills"
                        activeClassName="active">Skills</NavLink>
                    <NavLink
                        className="LinkItem"
                        href="!#"
                        to="/Contact"
                        activeClassName="active">Contact Me</NavLink>
                </div>
            </nav>
        </header>
    )
}
