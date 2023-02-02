import { useState } from 'react'
import '../../styles/Slideshow.css'
import ArrowNav from '../Slideshow/ArrowNav'

function Slideshow({ children }) {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== children.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === children.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(children.length)
        }
    }

    return (
        <div className="slideshow--container">
            {children.map((picture, index) => {
                return (
                    <div
                        key={picture}
                        className={
                            slideIndex === index + 1 ? 'active-anim' : 'slide'
                        }
                    >
                        <img src={picture} alt="" />
                    </div>
                )
            })}
            {children.length > 1 && (
                <div>
                    <ArrowNav changeSlide={nextSlide} direction="next" />
                    <ArrowNav changeSlide={prevSlide} direction="prev" />

                    <p className="img-index">
                        {slideIndex}/{children.length}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Slideshow
