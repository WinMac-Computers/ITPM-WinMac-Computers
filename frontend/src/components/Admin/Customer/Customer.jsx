import React from "react";

import { Carousel } from "antd";

import img1 from "../assets/Customer/1.jpg";
import img2 from "../assets/Customer/2.jpg";
import img3 from "../assets/Customer/3.jpg";
import img4 from "../assets/Customer/4.jpg";
import { Button } from "antd/lib/radio";

import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div>
      <Link to="/createprofile">
        <Button>Create</Button>
      </Link>{" "}
      <Carousel autoplay>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Customer;
