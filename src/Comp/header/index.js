import React, { useState } from "react";
import { Button, Col, Drawer, Row } from "antd";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import "./index.css";
import { MenuFoldOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Row>
        <Col span={6}>
          <img src={logo} alt="" width="100px" height="70px" />
        </Col>
        <Col span={10} className="h-main">
          <div className="nav">
            <NavLink className="nav_link">Home</NavLink>
            <NavLink className="nav_link">About</NavLink>
            <NavLink className="nav_link">Portfolio</NavLink>
            <NavLink className="nav_link">Contact</NavLink>
          </div>
        </Col>
        <Col span={6} className="h_btn h_bmain">
          <Button className="btn_S">Hire Me</Button>
        </Col>
        <Col span={16}>
          <MenuFoldOutlined onClick={showDrawer} className="h_icon" />
          <Drawer onClose={onClose} open={open}>
            <Col span={10} className="h_d">
              <div className="nav1">
                <NavLink className="nav_link1">Home</NavLink>
                <NavLink className="nav_link1">About</NavLink>
                <NavLink className="nav_link1">Portfolio</NavLink>
                <NavLink className="nav_link1">Contact</NavLink>
              </div>
            </Col>
            <Col span={6} className="h_btn h_b_da">
              <Button className="btn_S">Hire Me</Button>
            </Col>
          </Drawer>
        </Col>
      </Row>
    </>
  );
};
export default Header;
