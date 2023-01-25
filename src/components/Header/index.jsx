import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.svg'

function Header() {

    return (
        <header>
            <img src={logo} alt="Kasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
