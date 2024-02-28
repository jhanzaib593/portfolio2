import { Button, Col, Row } from "antd";
import "./index.css";
import img_b from "../../img/h1_hero-bg.png";
import {
  LinkedinOutlined,
  InstagramOutlined,
  BehanceOutlined,
  DribbbleOutlined,
} from "@ant-design/icons";
const Banner = () => {
  return (
    <>
      <Row className="banner_main">
        <Col className="main_logo" xs={24} sm={24} md={2} xxl={2} xl={2} lg={2}>
          <LinkedinOutlined />
          <InstagramOutlined />
          <DribbbleOutlined />
          <BehanceOutlined />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={13}
          xxl={13}
          xl={13}
          lg={13}
          className="main_text"
        >
          <h1>Jhanzaib Ur Rehman</h1>
          <h2>I'm Web Developer.</h2>
          {/* <Button className="btn_S">Learn more</Button> */}
        </Col>
        <Col xs={24} sm={24} md={9} xxl={9} xl={9} lg={9} className="b_img">
          <img src={img_b} alt="" width={400} height={575} />
        </Col>
      </Row>
    </>
  );
};

export default Banner;
