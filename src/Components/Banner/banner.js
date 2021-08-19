import React from 'react'
import { sliderData } from './sliderdata'
import { FaArrowAltCirlceRight, FaArrowAltCirlceLeft } from 'react-icons/fa'

const Banner = () => {
    return (
        <>
            {sliderData.map((slide, index) => {
                return <img src={slide.image} alt='travel image' />;
            })}
        </>
    );
};

export default Banner
