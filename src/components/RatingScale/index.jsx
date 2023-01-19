import redStar from '../../assets/star-red.svg'
import greyStar from '../../assets/star-grey.svg'

function RatingScale({ rating }) {
    const range = [1, 2, 3, 4, 5]

    return (
        <ul className="rating">
            {range.map((rangeElem) =>
                rating >= rangeElem ? (
                        <img key={rangeElem.toString()} src={redStar} alt="" />
                ) : (
                    <img src={greyStar} alt="" />
                )
            )}
        </ul>
    )
}

export default RatingScale
