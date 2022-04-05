import React, { useState, useEffect } from "react";
import { Button, Spin } from "antd";
import { HomeTwoTone } from "@ant-design/icons";

import img1 from "../assets/Product/img1.jpg";

const PDashboard = () => {
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
                      Add Product
                    </Button>{" "}
                    <Button type="primary" danger>
                      All Products
                    </Button>{" "}
                    <Button type="primary" danger>
                      Report
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <img src={img1} alt="dashboard" />
              </div>
            </div>
          </>
        )}
      </center>
    </div>
  );
};

export default PDashboard;