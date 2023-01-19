import Banner from '../../components/Banner'
import Collapsible from '../../components/Collapsible'
import HeroImg from '../../assets/about_hero_img_d.png'
import '../../styles/About.css'
function About() {
    return (
        <div>
            <Banner imageUrl={HeroImg} />
            <div className="collapsible-list--container">
                <Collapsible
                    aboutTitle="Fiabilité"
                    aboutContent="Les annonces postées sur Kasa garantissent une fiabilité totale.
                    Les photos sont conformes aux logements, et toutes les informations sont régulièrement
                    vérifiées  par nos équipes."
                />
                <Collapsible
                    aboutTitle="Respect"
                    aboutContent="La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapsible
                    aboutTitle="Service"
                    aboutContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                    N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Collapsible
                    aboutTitle="Sécurité"
                    aboutContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                    chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire,
                    cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>
    )
}

export default About
