import React from 'react'
import { sliderData } from './sliderdata'
import { FaArrowAltCirlceRight, FaArrowAltCirlceLeft } from 'react-icons/fa'

const Banner = () => {
    return (
        <section className="slider">
            <FaArrowAltCirlceLeft className="leftArrow" onClick={prevslide} />
            {sliderData.map((slide, index) => {
                return <img src={slide.image} alt='travel image' />;
            })}
        </section>
    );
};

export default Banner
