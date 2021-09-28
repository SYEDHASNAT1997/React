import React,{useState} from 'react';

import Carousel from 'react-bootstrap/Carousel'

  
  const Slider = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel style={{display: 'flex'}}>
      <Carousel.Item>
        <img
         // className="d-block w-100"
          src={process.env.PUBLIC_URL + "/example_9.png"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         // className="d-block w-100"
          src={process.env.PUBLIC_URL + "/example_9.png" }
          alt="First slidddde"
        />
        <Carousel.Caption>
          <h3>First sddddlide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
  }
  
  export default Slider;