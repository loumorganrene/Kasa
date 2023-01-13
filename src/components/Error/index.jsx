import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
    return (
        <div className="container">
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
