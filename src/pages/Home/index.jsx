// import Header from '../../components/Header'
import Banner from '../../components/Banner'
import HeroImg from '../../assets/home_hero_img_d.png'


function Home() {
    return (
        <div>
            <Banner imageUrl={HeroImg}>
                <h1 className="home_hero_text">
                    Chez vous, partout et ailleurs
                </h1>
            </Banner>
        </div>
    )
}

export default Home
