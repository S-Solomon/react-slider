import React, { useState } from 'react'
import './Slider.css'
import SliderData from './SliderData'
import BtnSlider from './BtnSlider'

const Slider = () => {
    const [slideIndex, setSlideIndex] =  useState(1)

    const nextSlide = () => {
        if(slideIndex !== SliderData.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === SliderData.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1) {
            setSlideIndex(SliderData.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="slider-container">
            {
                SliderData.map((data, idx) => {
                    return (
                        <div key={data.id} className={slideIndex === idx + 1 ? 'slide active-anim' : 'slide'}>
                            <img src={process.env.PUBLIC_URL + `/images/img${idx + 1}.jpg`}  alt=""/>
                        </div>
                    )
                })
            }
            <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} />

            <div className="container-dots">
            {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider
