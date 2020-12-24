import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../img/a.jpg'

import img2 from '../img/b.jpg'

import img3 from '../img/c.jpg'

export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div
        id="marginTop"
        style={{ width: "100%", height: 600, overflow: "hidden" }}
      >
        <Slider {...settings}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={img2} style={{ height: 500, width: "100%" }} />
            </div>
          </div>
          {/* <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img src={Slide1} style={{ height: 500, width: "100%" }} />
            </div>
          </div> */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              
              <img src={img2} style={{ height: 500, width: "100%" }} />


            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
            
            
              
            <img src={img2} style={{ height: 500, width: "100%" }} />

            
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
            
            
              
            <img src={img2} style={{ height: 500, width: "100%" }} />

            </div>
          </div>
        </Slider>
      </div>
    );
  }
}