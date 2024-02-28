import React from "react";
import { Col, Row } from "antd";
import "./index.css";
import {
  LinkedinOutlined,
  InstagramOutlined,
  BehanceOutlined,
  DribbbleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <>
      <Row className="footer">
        <Col className="f_icon" xs={24} sm={24} md={24} xxl={8} xl={8} lg={8}>
          <TwitterOutlined />
          <FacebookOutlined />
          <LinkedinOutlined />
          <InstagramOutlined />
          <DribbbleOutlined />
          <BehanceOutlined />
        </Col>
        <Col className="f_logo" xs={24} sm={24} md={24} xxl={8} xl={8} lg={8}>
          <img src={logo} alt="" width="100px" height="70px" />
        </Col>
        <Col className="f_email" xs={24} sm={24} md={24} xxl={8} xl={8} lg={8}>
          <a href="/email">mail@example.com</a>
        </Col>
      </Row>
      <p className="Footer_l">Copyright © 2024 Personal Portfolio</p>
    </>
  );
};
export default Footer;
