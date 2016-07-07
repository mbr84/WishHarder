const React = require('react');
const Carousel = require('react-bootstrap').Carousel

const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img className="carousel" alt="balloon" src="http://res.cloudinary.com/dxbwq1eyw/image/upload/v1467935588/balloon_tg7dqx.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">See the World in a Different Light</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel" alt="guy in a fedora" src="http://res.cloudinary.com/dxbwq1eyw/image/upload/v1467935597/hat_lxvge8.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Look Good in a Fedora</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel" alt="canoes on a raft" src="http://res.cloudinary.com/dxbwq1eyw/image/upload/v1467935592/raft_qhqz44.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Set out on an Adventure</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="carousel" alt="cloudy place" src="http://res.cloudinary.com/dxbwq1eyw/image/upload/v1467935591/clouds_jetwao.jpg"/>
      <Carousel.Caption>
        <h3 className="carousel-h3">Get Lost in the Clouds</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

module.exports = carouselInstance;
