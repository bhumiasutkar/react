import React, { Component } from "react";
import HomeSlider from "./../Components/homeslider";
import BannerOne from "../Components/DesignSections/BannerOne"

class Home extends Component {
  render() {
    return <>
      <HomeSlider />
      <BannerOne/>
    </>;
  }
}
export default Home;
