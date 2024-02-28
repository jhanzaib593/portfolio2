import { Col, Row } from "antd";
import "./index.css";
import img1 from "../../img/computer.png";
import img2 from "../../img/app-development.png";
import img3 from "../../img/shopping.png";
import { RightCircleOutlined } from "@ant-design/icons";
const Service = () => {
  return (
    <>
      <div className="ab_h p5">
        <h1>What Services I'm Providing</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="ab_line"></div>
      <Row className="s_main">
        <Col className="s_f" xs={24} sm={24} md={24} xxl={7} xl={7} lg={7}>
          <img src={img1} alt="" width={70} height={70} />
          <div className="s_f_text">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <RightCircleOutlined className="s_icon"/>
        </Col>
        <Col className="s_f" xs={24} sm={24} md={24} xxl={7} xl={7} lg={7}>
          <img src={img2} alt="" width={70} height={70} />
          <div className="s_f_text">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <RightCircleOutlined className="s_icon"/>
        </Col>
        <Col className="s_f" xs={24} sm={24} md={24} xxl={7} xl={7} lg={7}>
          <img src={img3} alt="" width={70} height={70} />
          <div className="s_f_text">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <RightCircleOutlined className="s_icon"/>
        </Col>
      </Row>
    </>
  );
};

export default Service;
