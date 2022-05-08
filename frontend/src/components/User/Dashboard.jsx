import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  FundProjectionScreenOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

import User from "./User";

//Product components
import CoolingFan from "../Products/CoolingFan";
import GraphicCard from "../Products/GraphicCard";
import HeadsetSpecker from "../Products/HeadsetSpecker";
import KeyboardMouse from "../Products/KeyboardMouse";
import Laptop from "../Products/Laptop";
import Memory from "../Products/Memory";
import PCcase from "../Products/PCcase";
import Monitor from "../Products/Monitor";
import Storage from "../Products/StorageDrive";
import PowerSupplyUPS from "../Products/PowerSupplyUPS";

const { Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const search = window.location.search;

  const param = new URLSearchParams(search);

  const queryLaptop = param.get("_optLaptop");
  const queryCoolingFan = param.get("_optCoolingFan");
  const queryMonitor = param.get("_optMonitor");
  const queryGraphicCard = param.get("_optGraphicCard");
  const queryMemory = param.get("_optMemory");
  const queryHeadsetSpecker = param.get("_optHeadsetSpecker");
  const queryPowerSupplyUPS = param.get("_optPowerSupplyUPS");
  const queryStorageDrive = param.get("_optStorageDrive");
  const queryPCcase = param.get("_optPCcase");
  const queryKeyboardMouse = param.get("_optKeyboardMouse");

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const date = new Date();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        width="270px"
      >
        <Menu
          style={{ marginTop: "80px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={
            queryLaptop === "laptop"
              ? ["1"]
              : queryMonitor === "monitor"
              ? ["2"]
              : queryGraphicCard === "graphic_card"
              ? ["3"]
              : queryCoolingFan === "cooling_fan"
              ? ["4"]
              : queryStorageDrive === "storage_drive"
              ? ["5"]
              : queryPCcase === "pc_case"
              ? ["6"]
              : queryPowerSupplyUPS === "power_supply"
              ? ["7"]
              : queryKeyboardMouse === "keyboard_mouse"
              ? ["8"]
              : queryMemory === "memory"
              ? ["9"]
              : queryHeadsetSpecker === "headset_specker"
              ? ["10"]
              : null
          }
        >
          <Menu.Item
            key="1"
            icon={<LaptopOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optLaptop=laptop`
              );
            }}
          >
            Laptop
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optMonitor=monitor`
              );
            }}
          >
            Monitor
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optGraphicCard=graphic_card`
              );
            }}
          >
            Graphic Card
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optCoolingFan=cooling_fan`
              );
            }}
          >
            Cooling Fan
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optStorageDrive=storage_drive`
              );
            }}
          >
            Storage Drive
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optPCcase=pc_case`
              );
            }}
          >
            PC Case
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optPowerSupplyUPS=power_supply`
              );
            }}
          >
           Power Supply & UPS
          </Menu.Item>
          <Menu.Item
            key="8"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optKeyboardMouse=keyboard_mouse`
              );
            }}
          >
            Keyboard & Mouse
          </Menu.Item>
          <Menu.Item
            key="9"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optMemory=memory`
              );
            }}
          >
            Memory
          </Menu.Item>
          <Menu.Item
            key="10"
            icon={<FundProjectionScreenOutlined />}
            className="text-lg"
            onClick={() => {
              history(
                `/user-dashboard/${localStorage.getItem(
                  "username"
                )}?_optHeadsetSpecker=headset_specker`
              );
            }}
          >
            Headset & Specker
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>

          {location.pathname ===
            `/user-dashboard/${localStorage.getItem("username")}` &&
            !queryLaptop &&
            !queryCoolingFan &&
            !queryMonitor &&
            !queryGraphicCard &&
            !queryMemory &&
            !queryHeadsetSpecker &&
            !queryPowerSupplyUPS &&
            !queryPCcase &&
            !queryStorageDrive &&
            !queryKeyboardMouse && <User />}

          {queryLaptop === "laptop" && <Laptop />}
          {queryCoolingFan === "cooling_fan" && <CoolingFan />}
          {queryMonitor === "monitor" && <Monitor />}
          {queryGraphicCard === "graphic_card" && <GraphicCard />}
          {queryMemory === "memory" && <Memory />}
          {queryHeadsetSpecker === "headset_specker" && <HeadsetSpecker />}
          {queryPowerSupplyUPS === "power_supply" && <PowerSupplyUPS />}
          {queryStorageDrive === "storage_drive" && <Storage />}
          {queryPCcase === "pc_case" && <PCcase />}
          {queryKeyboardMouse === "keyboard_mouse" && <KeyboardMouse />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright © {date.getFullYear()} WinMac Computers
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
