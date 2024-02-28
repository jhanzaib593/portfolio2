import Header from "../../Comp/header";
import Home from "../Home";
import "./index.css";
import About from "../../Comp/about";
import Service from "../../Comp/service";
import Experience from "../../Comp/experience";
import Process from "../../Comp/process";
import Portfolio from "../../Comp/portfolio";
import Footer from "../../Comp/Footer";

const Layout = () => {
  return (
    <>
      <div className="wappers ">
        <div className="container "></div>
        <Header />
        <Home />
      </div>
      <div className="container">
        <About />
      </div>
      <div className="wapper_s">
        <div className="container">
          <Service />
        </div>
      </div>
      <div className="wapper_t">
        <div className="container">
          <Process />
        </div>
      </div>
      <div className="wapper_f">
        <div className="container">
          <Experience />
        </div>
      </div>
        <Portfolio />
      <div className="wapper_l">
      <div className="container">
        <Footer/>
      </div></div>
    </>
  );
};

export default Layout;
