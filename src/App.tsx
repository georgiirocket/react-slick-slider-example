import React, { useRef} from 'react';
import Slider from "react-slick";
import Image1 from "./assest/images/1.png"
import Image2 from "./assest/images/5.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';

const settings = {
  className:"slick-container",
  centerMode: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "0",
  dots: false,
  arrows: false,
  swipe: false,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1,
        centerPadding: "150px"
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px"
      }
    }
  ]
};

function App() {
  const sliderRef = useRef<Slider | null>(null)
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickNext()
    }
  }
  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickPrev()
    }
  }

  return (
    <div className="container">
      <Slider ref={sliderRef}  {...settings}>
        <div>
          <div className="item-content">
            <div className="image-box">
              <img src={Image1} />
            </div>
            <h3>AAAA</h3>
            <p>aaaaaaa</p>
          </div>
        </div>
        <div>
          <div className="item-content">
            <div className="image-box">
              <img src={Image2} />
            </div>
            <h3>BBBB</h3>
            <p>bbbbbbbbbbb</p>
          </div>
        </div>
        <div>
          <div className="item-content">
            <div className="image-box">
              <img src={Image1} />
            </div>
            <h3>CCCC</h3>
            <p>cccccccc</p>
          </div>
        </div>
        <div>
          <div className="item-content">
            <div className="image-box">
              <img src={Image1} />
            </div>
            <h3>DDDD</h3>
            <p>ddddddd</p>
          </div>
        </div>
      </Slider>
      <svg className="leftBtn" onClick={prevSlide} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" transform="matrix(-1 0 0 1 54 0)" fill="#6F2FF6"/>
        <path d="M24.6375 33.21L26.1495 31.644L22.3155 27.81H35.4375V25.65H22.3155L26.1495 21.816L24.6375 20.25L18.1575 26.73L24.6375 33.21Z" fill="white"/>
      </svg>
      <svg className="rightBtn" onClick={nextSlide} width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" fill="#6F2FF6"/>
        <path d="M29.3625 33.21L27.8505 31.644L31.6845 27.81H18.5625V25.65H31.6845L27.8505 21.816L29.3625 20.25L35.8425 26.73L29.3625 33.21Z" fill="white"/>
      </svg>
    </div>
  );
}

export default App;
