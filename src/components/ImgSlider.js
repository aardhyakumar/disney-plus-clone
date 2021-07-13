import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wr>
        <img src="/images/001.png" />
      </Wr>
      <Wr>
        <img src="/images/002.jpg" />
      </Wr>
      <Wr>
        <img src="/images/003.jpg" />
      </Wr>
      <Wr>
        <img src="/images/004.jpg" />
      </Wr>
      <Wr>
        <img src="/images/slider-badag.jpg" />
      </Wr>
      <Wr>
        <img src="/images/slider-scale.jpg" />
      </Wr>
      <Wr>
        <img src="/images/slider-scales.jpg" />
      </Wr>
    </Carousel>
  );
}

export default ImgSlider;
const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  button {
    z-index: 1;
  }
`;
const Wr = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    max-height: 320px;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;

    height: 100%;

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
