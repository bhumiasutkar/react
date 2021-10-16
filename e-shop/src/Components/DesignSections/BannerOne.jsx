import React, { Component } from 'react';
import './banners.scss'
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";

class BannerOne extends Component{
    render () {
        return (
            <section className="bannerOne">
                <div class="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="singleImageBox">
                                <a href="/">
                                    <img src={ Img1 } alt="img1" />
                                </a>                                
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="singleImageBox">
                                <a href="/">
                                    <img src={ Img2 } alt="img1" />
                                </a>
                            </div>
                            <div className="singleImageBox">
                                <a href="/">
                                    <img src={ Img3 } alt="img1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
    }
}

export default BannerOne;