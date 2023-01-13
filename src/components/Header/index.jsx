import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.svg'
function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
