import '../../styles/Footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
    return (
        <footer className="footer--container">
            <img src={logo} alt="Kasa" className="footer_logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
