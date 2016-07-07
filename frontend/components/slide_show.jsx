const React = require('react');
const Carousel = require('react-bootstrap').Carousel

const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img className="carousel" alt="1378x575" src="/assets/balloon.jpeg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">See the World in a Different Light</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel" alt="1378x575" src="/assets/hat.jpeg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Wear a Fedora</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel" alt="1378x575" src="/assets/raft.jpeg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Set out on an Adventure</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel" alt="1378x575" src="/assets/clouds.jpeg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Get Lost in the Clouds</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

module.exports = carouselInstance;
