import React from "react";
import { Button, Col, Row } from "antd";
import "./index.css";
import img from "../../img/section-1-bg1.jpg";

const About = () => {
  return (
    <>
      <div className="ab_h">
        <h1>About Me</h1>
        <p>
          I'm a Freelancer Front-end Developer and 2 years of experience
          Wordpress. I'm from Pakistan. I code and create web elements for
          amazing people around the world. I like work with new people. New
          people are new experiences.
        </p>
      </div>
      <div className="ab_line"></div>
      <Row className="ab_row">
        <Col className="ab_main" xs={24} sm={24} md={8} xxl={8} xl={8} lg={8}>
          <h3>Developing With a Passion While Exploring The World.</h3>
          <div className="ab_line1"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button className="btn_S">Contact Me</Button>
        </Col>
        <Col className="ab_text" xs={24} sm={24} md={8} xxl={8} xl={8} lg={8}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col className="ab_img" xs={24} sm={24} md={8} xxl={8} xl={8} lg={8}>
          <img alt="" src={img} width={330} height={350} />
        </Col>
      </Row>
    </>
  );
};
export default About;
