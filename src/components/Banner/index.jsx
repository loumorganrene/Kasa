import '../../styles/Banner.css'

function Banner({ children, imageUrl }) {
    return (
        <div className="brigthnessFilter">
            <img className="home_hero_img" src={imageUrl} alt="Home Hero" />
            <div className="transparent">{children ? children : null}</div>
        </div>
    )
}

export default Banner
