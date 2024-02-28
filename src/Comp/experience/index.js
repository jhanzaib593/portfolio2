import React from "react";
import { Col, Row } from "antd";
import "./index.css";

const Experience = () => {
  return (
    <>
      <div className="ab_h main_ex">
        <h1>Work Experience</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="ab_line"></div>
      <Row className="ex_row">
        <Col
          className="ex_main"
          xs={24}
          sm={24}
          md={24}
          xxl={10}
          xl={10}
          lg={10}
        >
          <h6>UI/UX Designer</h6>
          <h6>2015-2018</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <progress color="black" className="ex_pro" value={0.7} />
        </Col>
        <Col xs={24} sm={24} md={24} xxl={2} xl={2} lg={2}></Col>
        <Col
          className="ex_main"
          xs={24}
          sm={24}
          md={24}
          xxl={10}
          xl={10}
          lg={10}
        >
          <h6>Web Designer</h6>
          <h6>2015-2018</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <progress color="black" className="ex_pro" value={0.7} />
        </Col>
      </Row>
    </>
  );
};
export default Experience;
