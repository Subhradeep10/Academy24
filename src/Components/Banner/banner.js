import React from 'react'
import { sliderData } from './sliderdata'

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
