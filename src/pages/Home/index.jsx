import Header from '../../components/Header'
import Banner from '../../components/Banner'
// import HeroImg from '../../assets/home_hero_img_d.png'

function Home() {
    return (
        <div>
            <Header />
            <Banner>
                <div className="home_hero_img" />
                <div className="transparent">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                {/* <img className='home_hero_img'
                    src={HeroImg}
                    alt="Home Hero"
                /> */}
            </Banner>
        </div>
    )
}

export default Home
