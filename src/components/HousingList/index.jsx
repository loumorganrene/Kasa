import Logements from '../../datas/logements.json'
import HomeCard from '../HomeCard'
import '../../styles/HousingList.css'

function HousingList() {
    return (
        <div className="housing-list--container">
            <ul className="housing-list">
                {Logements.map(({ id, cover, title }) => (
                    <HomeCard key= {id} cover={cover} title={title} id={id} />
                ))}
            </ul>
        </div>
    )
}

export default HousingList
