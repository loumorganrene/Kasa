import { Link } from 'react-router-dom'
import '../../styles/Error.css'
import Header from '../../components/Header'
function Error() {
    return (
        <div className="container">
            <Header />
            <div className="errorMsg">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <span className="home_link">
                    <Link to="/">Retourner sur la page d’accueil</Link>
                </span>
            </div>
        </div>
    )
}

export default Error
