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
                        <NavLink to="/" activeClassName={'active'}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName={'active'}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
