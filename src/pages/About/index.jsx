import Header from '../../components/Header'
import Banner from '../../components/Banner'
import HeroImg from '../../assets/about_hero_img_d.png'
function About() {
    return (
        <div>
            <Header />
            <Banner>
                <img className="home_hero_img" src={HeroImg} alt="Home Hero" />
                <div className="transparent" />
            </Banner>
        </div>
    )
}

export default About
