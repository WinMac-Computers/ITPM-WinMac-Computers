import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Spin } from "antd";
import img1 from "../assets/Customer/1.jpg";
import img2 from "../assets/Customer/2.jpg";
import img3 from "../assets/Customer/3.jpg";
import img4 from "../assets/Customer/4.jpg";
import NavBar from "./NavBar";


const Customer = () => {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpin(true), 5000);
  }, []);

  return (
    <div>
      <NavBar />
      <center>
        {spin === false ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <div className="mt-4">
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
        )}
      </center>
    </div>
  );
};

export default Customer;
