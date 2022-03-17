import React, { useState } from "react";

import Control from "../../../assets/AdminHome/control.png";
import Logo from "../../../assets/AdminHome/winmaclogo.png";
import Dashboard from "../../../assets/AdminHome/Chart_fill.png";
import User from "../../../assets/AdminHome/User.png";
import Product from "../../../assets/AdminHome/Product.png";
import Promotion from "../../../assets/AdminHome/Promotion.png";
import Payment from "../../../assets/AdminHome/Payment.png";
import Order from "../../../assets/AdminHome/Order.png";
import Delivery from "../../../assets/AdminHome/Delivery.png";
import Setting from "../../../assets/AdminHome/Setting.png";

import "./SideBar.css";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Customer Management", src: User },
    { title: "Product Managment", src: Product, gap: true },
    { title: "Promotion Management ", src: Promotion },
    { title: "Payment Management", src: Payment },
    { title: "Order Management", src: Order },
    { title: "Delivery Management", src: Delivery, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <div className="flex sidebar">
      <div
        className={` ${
          open ? "w-82" : "w-20"
        } bg-dark-purple h-full p-5  pt-8 relative`}
      >
        <img
          src={Control}
          alt="Control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 ml-6 items-center w-56 h-56 rounded-full bg-white p-2">
          <img
            src={Logo}
            alt="Logo"
            className={`cursor-pointer duration-2000 ${open || " w-16 h-16"}`}
          />
        </div>
        <ul className="pt-6">
          <div className="flex px-4 font-bold bg-black rounded-3xl p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:rounded-3xl hover:bg-black">
            <img src={Dashboard} />
            <span>Dashbord</span>
          </div>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex px-4 font-bold bg-blue-900  rounded-3xl p-2 cursor-pointer hover:bg-light-white text-gray-300 text-lg items-center gap-x-4 hover:rounded-3xl hover:bg-black
              ${Menu.gap ? " mt-4" : "mt-6"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt="menu" />
              <span className={`${!open && "hidden"} origin-left duration-200 `}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Admin Home Page</h1>
      </div>
    </div>
  );
};
export default SideBar;
