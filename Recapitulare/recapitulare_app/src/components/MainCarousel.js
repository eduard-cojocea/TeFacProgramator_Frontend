import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "./MainCarousel.css";

class MainCarousel extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="slide">
                    <img className="slide-img" src="images/legionarie_1.jpg" alt="legionarie_1"/>
                </div>
                <div className="slide">
                    <img className="slide-img" src="images/legionarie_2.jpg" alt="legionarie_2" />
                </div>
                <div className="slide">
                    <img className="slide-img" src="images/legionarie_3.jpg" alt="legionarie_3" />
                </div>     
                <div className="slide">
                    <img className="slide-img" src="images/legionarie_4.jpg" alt="legionarie_4" />
                </div>
            </Slider>
        );
    }
}

export default MainCarousel;