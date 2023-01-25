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
                        {children.length === 1 ? (
                            <p></p>
                        ) : (
                            <p className="img-index">
                                {index + 1}/{children.length}
                            </p>
                        )}
                    </div>
                )
            })}
            {children.length === 1 ? (
                <div></div>
            ) : (
                <div>
                    <ArrowNav changeSlide={nextSlide} direction="next" />
                    <ArrowNav changeSlide={prevSlide} direction="prev" />
                </div>
            )}
        </div>
    )
}

export default Slideshow
