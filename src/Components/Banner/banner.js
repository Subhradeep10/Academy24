import React, { useState } from 'react'
import { sliderData } from './sliderdata'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './banner.css'


const Banner = ({ slide }) => {
    const [current, setCurrent] = useState(0);
    const length = slide.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    console.log(current);

    if (!Array.isArray(slide) || slide.length <= 0) {
        return null;
    }
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return (
                    <div>
                        <img src={slide.image} alt='travel image' className="image" />;
                    </div>

                )
            })}
        </section>
    );
};

export default Banner
