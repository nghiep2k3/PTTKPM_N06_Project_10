import React, { useState, useRef } from 'react';
import { Carousel, Button } from 'antd';

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();

  const handleSlideChange = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < 3) {
      setCurrentSlide(slideIndex);
      carouselRef.current.goTo(slideIndex);
    }
  };

  return (
    <div style={{background: 'gray'}}>
      <Carousel ref={carouselRef} autoplay={true} afterChange={setCurrentSlide}>
        <div>
          <h3>Slide 1</h3>
        </div>
        <div>
          <h3>Slide 2</h3>
        </div>
        <div>
          <h3>Slide 3</h3>
        </div>
      </Carousel>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Button onClick={() => handleSlideChange(currentSlide - 1)} disabled={currentSlide === 0}>
          Previous
        </Button>
        <Button onClick={() => handleSlideChange(currentSlide + 1)} disabled={currentSlide === 2}>
          Next
        </Button>
        <Button onClick={() => handleSlideChange(0)}>Slide 1</Button>
        <Button onClick={() => handleSlideChange(1)}>Slide 2</Button>
        <Button onClick={() => handleSlideChange(2)}>Slide 3</Button>
      </div>
    </div>
  );
};

export default MyCarousel;
