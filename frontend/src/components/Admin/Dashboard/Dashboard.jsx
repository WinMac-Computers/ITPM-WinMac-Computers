import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { Button } from "antd";
import {
  FundProjectionScreenOutlined,
  ProfileOutlined,
  CommentOutlined,
  UserAddOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import "./Dashboard.css";
import Payment from "../Payment/Payment";
import Product from "../Product/Product";
import Promotion from "../Promotion/Promotion";
import Order from "../Order/Order";
import Customer from "../Customer/Customer";
import Delivery from "../Delivery/Delivery";

import Logo from "../../../assets/Logo/winmaclogo.png";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const search = window.location.search;
  const param = new URLSearchParams(search);
  const queryCustomer = param.get("_optCustomer");
  const queryProduct = param.get("_optProduct");
  const queryPromotion = param.get("_optPromotion");
  const queryPayment = param.get("_optPayment");
  const queryOrder = param.get("_optOrder");
  const queryDelivery = param.get("_optDelivery");

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const setHeader = (type) => {
    switch (type) {
      case "dashboard":
        document.getElementById("header").innerHTML = "Dashboard";
        break;
      case "customer":
        document.getElementById("header").innerHTML = "Customer Management";
        break;
      case "product":
        document.getElementById("header").innerHTML = "Product Management";
        break;
      case "promotion":
        document.getElementById("header").innerHTML = "Promotion Management";
        break;
      case "payment":
        document.getElementById("header").innerHTML = "Payment Management";
        break;
      case "order":
        document.getElementById("header").innerHTML = "Order Management";
        break;
      case "delivery":
        document.getElementById("header").innerHTML = "Delivery MAnagement";
        break;
      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width="270px"
      >
        <div>
          <img
            src={Logo}
            alt="logo"
            onClick={() => {
              history(`/admin-dashboard/${localStorage.getItem("username")}`);
              setHeader("dashboard");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={
            queryCustomer === "customer"
              ? ["1"]
              : queryProduct === "product"
              ? ["2"]
              : queryPromotion === "promotion"
              ? ["3"]
              : queryPayment === "payment"
              ? ["4"]
              : queryOrder === "order"
              ? ["5"]
              : queryDelivery === "delivery"
              ? ["6"]
              : null
          }
        >
          <Menu.Item
            key="1"
            icon={<UserAddOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("customer");
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_optCustomer=customer`
              );
            }}
          >
            Customer Management
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("product");
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_optProduct=product`
              );
            }}
          >
            Product Management
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<CommentOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("promotion");
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_optPromotion=promotion`
              );
            }}
          >
            Promotion Management
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<ProfileOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("payment");
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_optPayment=payment`
              );
            }}
          >
            Payment Management
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<ShoppingOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("order");
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_optOrder=order`
              );
            }}
          >
            Order Management
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<ShoppingCartOutlined />}
            className="text-lg"
            onClick={() => {
              setHeader("delivery");
              history(
                `/admin-dashboard/${localStorage.getItem(
                  "username"
                )}?_optDelivery=delivery`
              );
            }}
          >
            Delivery Management
          </Menu.Item>
        </Menu>
        {collapsed === false ? (
          <center className="my-12">
            <Button icon={<LogoutOutlined className="-translate-y-0.5" />}>
              Sign Out
            </Button>
          </center>
        ) : (
          <center className="my-12 hover:rounded-full hover:bg-slate-500 p-4  hover:mx-4">
            <LogoutOutlined
              style={{ color: "white", cursor: "pointer" }}
              className="-translate-y-0.5"
            />
          </center>
        )}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <h1 id="header" style={{ fontFamily: "serif", fontSize: "20px" }}>
            {queryCustomer === "customer"
              ? "Customer Management"
              : queryProduct === "product"
              ? "Product Management"
              : queryPromotion === "promotion"
              ? "Promotion Management"
              : queryPayment === "payment"
              ? "Payment Management"
              : queryOrder === "order"
              ? "Order Management"
              : queryDelivery === "delivery"
              ? "Delivery Management"
              : "Dashboard"}
          </h1>
        </Header>

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{greet}</Breadcrumb.Item>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          {location.pathname ===
            `/admin-dashboard/${localStorage.getItem("username")}` &&
            !queryCustomer &&
            !queryProduct &&
            !queryPromotion &&
            !queryPayment &&
            !queryOrder &&
            !queryDelivery}
          {queryCustomer === "customer" && <Customer />}
          {queryProduct === "product" && <Product />}
          {queryPromotion === "promotion" && <Promotion />}
          {queryPayment === "payment" && <Payment />}
          {queryOrder === "order" && <Order />}
          {queryDelivery === "delivery" && <Delivery />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} WinMac Computers
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
