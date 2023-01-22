import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/HomeCard.css'

function HomeCard({ id, cover, title }) {

    return (
        <li key={id}>
            <Link to={`/housing/${id}`}>
                <div className="housing-card">
                    <img
                        className="housing__cover"
                        src={cover}
                        alt={`${title}`}
                    />
                    <h3 className="housing__title">{title}</h3>
                </div>
            </Link>
        </li>
    )
}
// ?${title.replace(/\s/g, '_')}
export default HomeCard
