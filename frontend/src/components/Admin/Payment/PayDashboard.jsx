import React, { useState, useEffect } from "react";
import {Spin} from "antd";

import img from "../assets/Payment/Payment.jpg";

const PayDashboard = () => {
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
              <img src={img} alt="paydash" />
            </div>
          </>
        )}
      </center>
    </div>
  );
};

export default PayDashboard;
