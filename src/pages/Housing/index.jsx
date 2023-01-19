import { useParams } from 'react-router-dom'
import Logements from '../../datas/logements.json'
import HousingCard from '../../components/HousingCard'

function Housing() {
    const id = useParams()
    console.log(id)

    return (
        <div className="housing-content">
            {Logements.filter((house) => house.id === id.housingId).map(
                ({
                    id,
                    title,
                    location,
                    description,
                    host,
                    rating,
                    tags,
                    equipments
                }) => (
                    <HousingCard
                        key={id}
                        title={title}
                        location={location}
                        description={description}
                        hostName={host.name}
                        hostPict={host.picture}
                        rating={rating}
                        tags={tags}
                        equipments={equipments}
                    />
                )
            )}
        </div>
    )
}

export default Housing
