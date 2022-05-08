import React, { useEffect, useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Popover, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import Logo from "../../assets/Logo/winmaclogo.png";

import UserProfile from "../User/UserProfile";
import axios from "axios";

import Cart from "../User/Cart";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT", link: "/contact" },
  ];

  const { username } = useParams();

  const [open, setOpen] = useState(false);
  const [initialData, setInitialData] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    setInitialData([...Cart.values()]);
  });

  const logoutHandler = () => {
    localStorage.setItem("authToken", null);
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("type");
    localStorage.removeItem("dept");
    localStorage.removeItem("id");
    history("/login");
  };

  const content = (
    <div style={{ width: "2px" }}>
      <div>
        <UserProfile />
      </div>
      <div className=" mt-1">
        <NavLink
          to={`/user-dashboard/${localStorage.getItem(
            "username"
          )}/?_complain=true`}
        >
          <Button>Add Complains</Button>
        </NavLink>
      </div>
      <div className="mt-1">
        {/* <NavLink to="/login"> */}
        <Button
          className="w-20"
          onClick={() => {
            logoutHandler();
          }}
        >
          Logout
        </Button>
        {/* </NavLink> */}
      </div>
    </div>
  );

  return (
    <>
      {localStorage.getItem("type") === "user" ? (
        <div className="shadow-md w-full  top-0 left-0 z-10">
          <div className="md:flex items-center justify-between bg-zinc-800 py-1 md:px-10 px-7">
            <div className="font-bold -translate-x-7 text-2xl cursor-pointer flex items-center font-[Poppins] text-sky-600">
              <div className=" text-5xl translate-y-0.5">
                <img
                  src={Logo}
                  alt="logo"
                  className="  w-14 h-14 rounded-full bg-white p-2"
                />
              </div>
              <NavLink
                to={`/user-dashboard/${localStorage.getItem("username")}`}
              >
                <span class="ml-3 text-xl pl-1 text-sky-600">
                  WinMac Computers
                </span>
              </NavLink>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu-sharp"}></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center font-semibold md:pb-0 mt-3  pb-0 absolute md:static bg-zinc-800  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
                open ? "top-21 opacity-100" : "top-[-490px]"
              } md:opacity-100`}
            >
              <div className=" flex ite">
                <div className="bg-white w-28 hover:opacity-75 rounded-3xl flex justify-between items-center p-1 cursor-pointer">
                  <NavLink
                    to={`/user-dashboard/${localStorage.getItem(
                      "username"
                    )}?_cart=true`}
                  >
                    <ShoppingCartOutlined className=" text-3xl translate-x-1" />
                  </NavLink>
                  <div className=" rounded-full text-lg  border-4 -translate-x-2 border-red-400 px-1 text-slate-900 ">
                    {initialData.length}
                  </div>
                </div>
                <button className="inline-flex items-center bg-sky-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded-full text-base mt-4 md:mt-0 translate-x-6">
                  <Popover
                    placement="bottom"
                    content={content}
                    title={`Hello ${username}`}
                    trigger="hover"
                  >
                    My Account
                  </Popover>
                </button>
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <div className="shadow-md w-full  top-0 left-0 z-10">
          <div className="md:flex items-center justify-between bg-zinc-800 py-1 md:px-10 px-7">
            <div className="font-bold -translate-x-7 text-2xl cursor-pointer flex items-center font-[Poppins] text-sky-600">
              <div className=" text-5xl translate-y-0.5">
                <img
                  src={Logo}
                  alt="logo"
                  className="  w-14 h-14 rounded-full bg-white p-2"
                />
              </div>
              <NavLink to="/">
                <span class="ml-3 text-xl pl-1 text-sky-600">
                  WinMac Computers
                </span>
              </NavLink>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu-sharp"}></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center font-semibold md:pb-0 mt-3  pb-0 absolute md:static bg-zinc-800  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transition-all duration-500 ease-in ${
                open ? "top-21 opacity-100" : "top-[-490px]"
              } md:opacity-100`}
            >
              {Links.map((Link) => (
                <li key={Link.name} className="md:ml-2 text-base md:my-0 my-7">
                  <a
                    href={Link.link}
                    className=" text-white hover:text-sky-500 hover:bg-gray-700 py-2 hover:py-2 px-4 hover:px-4 hover:rounded-full  duration-500"
                  >
                    {Link.name}
                  </a>
                </li>
              ))}
              <NavLink to="/login">
                <button className="inline-flex items-center bg-red-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-black rounded-full text-base mt-4 md:mt-0 translate-x-6">
                  Login
                  <ion-icon name="log-in"></ion-icon>
                </button>
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
