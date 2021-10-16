import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Slide from "./Slide";
import "./slider.scss";

class DataSlider extends Component {    
    render () {
      const breakPoints = [
            { width: 500, itemsToShow: 1 },
            { width: 786, itemsToShow: 2 },
            { width: 1024, itemsToShow: 1 }
        ];
      return <>
        <Carousel breakPoints={breakPoints}>
              <Slide number="1" />
              <Slide number="2" />
              <Slide number="3" />
              <Slide number="4" />
              <Slide number="5" />
              <Slide number="6" />
        </Carousel>
    </>;
  }
}
export default DataSlider;
