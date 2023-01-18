import Logements from '../../datas/logements.json'
import Card from '../Card'
import '../../styles/HousingList.css'

function HousingList() {
    return (
        <div className="housing-list--container">
            <ul className="housing-list">
                {Logements.map(({ id, cover, title }) => (
                    <Card key= {id} cover={cover} title={title} />
                ))}
            </ul>
        </div>
    )
}

export default HousingList
