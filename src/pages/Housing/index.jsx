import { useParams } from 'react-router-dom'
import Logements from '../../datas/logements.json'
import HousingCard from '../../components/HousingCard'
import Error from '../../components/Error'

function Housing() {
    const param = useParams()
    const house = Logements.find((house) => house.id === param.housingId)

    if (!house) {
        return <Error />
    }

    return (
        <main className="housing-content">
            <HousingCard
                key={house.id}
                title={house.title}
                location={house.location}
                description={house.description}
                hostName={house.host.name}
                hostPict={house.host.picture}
                rating={house.rating}
                tags={house.tags}
                equipments={house.equipments}
            />
        </main>
    )
}




export default Housing
