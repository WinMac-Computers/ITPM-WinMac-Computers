import React from "react";
import { Button } from "antd";
import { HomeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const NavBar = () => {
  const history = useNavigate();

  return (
    <div className=" mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-16">
      <div className="text-4xl float-left translate-x-4">
        <HomeTwoTone
          onClick={() =>
            history(
              `/admin-dashboard/${localStorage.getItem(
                "username"
              )}?_optPayment=payment`
            )
          }
        />
      </div>
      <div className="pt-4 flex">
        <div className="mx-auto -translate-x-6">
          <Button
            type="primary"
            danger
            onClick={() =>
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_payment=allpayment`
              )
            }
          >
            All Payments
          </Button>{" "}
          <Button
            type="primary"
            danger
            onClick={() =>
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_payment=paymentreport`
              )
            }
          >
            Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
