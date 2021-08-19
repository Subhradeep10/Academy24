import React, { useState } from 'react'
import { sliderData } from './sliderdata'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './banner.css'


const Banner = ({ slide }) => {
    const [current, setCurrent] = useState(0);
    const length = slide.length;
    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="leftArrow" />
            <FaArrowAltCircleRight className="rihtArrow" />
            {sliderData.map((slide, index) => {
                return <img src={slide.image} alt='travel image' className="image" />;
            })}
        </section>
    );
};

export default Banner
