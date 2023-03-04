import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel fade>

      <Carousel.Item>
        <img
          className="slider_img w-100 "
          src="image/res2.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>JAPANISS RESTAURANT</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="slider_img w-100"
          src="image/re1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>AMERICAN RESTAURANT</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow</p>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="slider_img w-100"
          src="image/res5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>THAI RESTAURANT</h3>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow</p>
        </Carousel.Caption>

      </Carousel.Item>
      
    </Carousel>
  )
}

export default Slider