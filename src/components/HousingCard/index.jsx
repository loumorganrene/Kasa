import React from 'react'
import Collapsible from '../Collapsible'
import '../../styles/HousingCard.css'
import RatingScale from '../RatingScale'

function HousingCard({
    title,
    location,
    description,
    hostName,
    hostPict,
    rating,
    tags,
    equipments,
}) {
    return (
        <div className="housingCard--container">
            <section className="house-infos">
                <div className="id">
                    <h2>{title}</h2>
                    <p>{location}</p>
                </div>
                <div className="host">
                    <h3>{hostName}</h3>
                    <img className="hostPict" src={hostPict} alt={`${hostName}`} />
                </div>
            </section>

            <section className="house-quality">
                <ul className='tags'>
                    {tags.map((tag) => {
                        return <li key={`tag-${tag}`}>{tag}</li>
                    })}
                </ul>
                <RatingScale rating={rating} />
            </section>

            <section className="house-details">
                <div className="collapsible--container">
                    <h3>Description</h3>
                    <p className='content'>{description}</p>
                </div>
                <Collapsible
                    aboutTitle="Équipements"
                    aboutContent={
                        <ul className='equipments'>
                            {equipments.map((equip) => {
                                return <li key={`equip-${equip}`}>{equip}</li>
                            })}
                        </ul>
                    }
                />
            </section>
        </div>
    )
}

export default HousingCard
