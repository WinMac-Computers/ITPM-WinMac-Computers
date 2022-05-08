import React, { useState, useEffect} from "react";
import { Button, Spin } from "antd";
import { HomeTwoTone } from "@ant-design/icons";

import { Link } from "react-router-dom";
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
                   

                    <Link to="/riderlist"> <Button type="primary" danger>
                      Rider List
                    </Button></Link>
                    <Link to="/addrider"> <Button type="primary" danger>
                      Add Rider
                      
                    </Button></Link>
                    <Link to="/orders"> <Button type="primary" danger>
                      Orders
                    </Button></Link>
                   
                  </div>
                </div>
              </div>
             
              <div>
                <Riderlist></Riderlist>
               
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