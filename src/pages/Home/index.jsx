import Banner from '../../components/Banner'
import HeroImg from '../../assets/home_hero_img_d.png'
import HousingList from '../../components/HousingList'
import Error from '../../components/Error'


function Home() {
    return (
        <main>
            <Banner imageUrl={HeroImg}>
                <h1 className="home_hero_text">
                    Chez vous, partout et ailleurs
                </h1>
            </Banner>
            <HousingList />
            <Error />
        </main>
    )
}

export default Home
