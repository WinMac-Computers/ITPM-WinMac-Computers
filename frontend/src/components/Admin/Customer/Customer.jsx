import React from "react";
import { Link } from "react-router-dom";

import { Carousel , Button} from "antd";

import img1 from "../assets/Customer/1.jpg";
import img2 from "../assets/Customer/2.jpg";
import img3 from "../assets/Customer/3.jpg";
import img4 from "../assets/Customer/4.jpg";

const Customer = () => {
  return (
    <div>
      <Link to="/createprofile">
        <Button>Create</Button>
      </Link>
      <Link to="/displayprofile">
        <Button>Display Profile</Button>
      </Link>
      <Link to="/listview">
        <Button>Table View</Button>
      </Link>{" "}
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
    </div>
  );
};

export default Customer;
