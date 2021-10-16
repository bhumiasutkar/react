import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import SliderData from './SliderData';
import './slider.scss'

class ImageSlide extends Component{
    
    render () {
        const breakPoints = [
            { width: 500, itemToShow: 1, pagination: false },
            { width: 1024, itemToShow: 2 }
        ];
        return (
            <>
            <Carousel breakPoints={breakPoints}>
                {SliderData.map((slide, index) => {
                    return (<>                    
                        <div className="item" style={{ backgroundImage: `url(${slide.image})` }}>
                            <p className="slideContent">{slide.content}</p>
                        </div>
                        </>
                    )
                })}
            </Carousel>
            </>
        );
    }
}

export default ImageSlide;