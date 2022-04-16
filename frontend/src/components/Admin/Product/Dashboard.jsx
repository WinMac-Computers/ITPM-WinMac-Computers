import React, { useState, useEffect } from "react";
import { Spin } from "antd";

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
