import React, { useRef } from 'react';

import useSlider from './useSlider'

import { FaArrowLeft,FaArrowRight } from "react-icons/fa";

const HeroSlider = ({images}) => {
  
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, slideText, images)

    return (
          <div className="slider" ref={slideImage}>
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
                <FaArrowLeft style={{marginRight: '5px'}}/>
              </button>
             <div className="slider--feature">
                <h1 className="feature--title">Dreaming</h1>
                <p ref={slideText} className="feature--text"></p>
                <button className="feature__btn">Get started</button>
              </div>
              <button onClick={goToNextSlide} className="slider__btn-right">
              <FaArrowRight style={{marginRight: '5px'}}/>
              </button>
            </div>
        </div>
    );
}

export default HeroSlider;