import React from 'react'

import { Carousel } from 'antd';

import img1 from "../assets/Customer/1.jpg";
import img2 from "../assets/Customer/2.jpg";
import img3 from "../assets/Customer/3.jpg";
import img4 from "../assets/Customer/4.jpg";

const contentStyle = {
  height: '650px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Customer = () => {
  return (
    <div> <Carousel autoplay>
    <div>
      <h3 style={img1}>1</h3>
    </div>
    <div>
      <h3 style={img2}>2</h3>
    </div>
    <div>
      <h3 style={img3}>3</h3>
    </div>
    <div>
      <h3 style={img4}>4</h3>
    </div>
  </Carousel></div>


const Customer = () => {
  return (
    <div>Customer</div>

  )
}

export default Customer