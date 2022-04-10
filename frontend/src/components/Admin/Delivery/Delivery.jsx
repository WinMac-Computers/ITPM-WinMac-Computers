import React, { useState, useEffect} from "react";
import { Button, Spin } from "antd";
import { HomeTwoTone } from "@ant-design/icons";


import Riderlist from "./Riderlist";

import img2 from "../assets/Delivery/delivery.png"

const Delivery = () => {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpin(true), 5000);
  }, []);

  return (
    <div>
            <center>
        {spin === false ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <>
            <div>
              <div className=" mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16">
                <div className="text-4xl float-left translate-x-4">
                  <HomeTwoTone />
                </div>
                <div className="pt-4 flex">
                  <div className="mx-auto -translate-x-6">
                    <Button type="primary" danger>
                      Add Rider
                    </Button>{" "}
                    <Button type="primary" danger>
                      All Riders
                    </Button>{" "}
                    <Button type="primary" danger>
                      Orders
                    </Button>
                    <a href="/Riderlist">
                    <Button type="primary" danger>
                      Orders
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <img src={img2} alt="dashboard" />
              </div>
            </div>
          </>
        )}
      </center>
    </div>
  )
}

export default Delivery