import arrowRight from '../../../assets/arrowRight.svg'
import arrowLeft from '../../../assets/arrowLeft.svg'
import '../../../styles/Slideshow.css'

function ArrowNav({changeSlide, direction}) {
    return (
        <button
            onClick={changeSlide}
            className={
                direction === 'next' ? 'btn-slide next' : 'btn-slide prev'
            }
        >
            <img
                src={direction === "next" ? arrowRight : arrowLeft}
                alt=''
            />
        </button>
    )
}

export default ArrowNav

