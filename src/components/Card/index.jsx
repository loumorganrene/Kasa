import '../../styles/Card.css'

function Card({ id, cover, title }) {
    return (
        <li key={id}>
            <div className="housing-card">
                <img
                    className="housing__cover"
                    src={cover}
                    alt={`${title} cover`}
                />
                <h3 className="housing__title">{title}</h3>
            </div>
        </li>
    )
}

export default Card
