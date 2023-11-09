import {
  faLaptopCode,
  faMobilePhone,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const style = {
  box: {
    height: 400,
    width: 400,
    borderRadius: "20px 100px",
    border: "10px solid #DCDCDC",
    marginLeft: 100,
  },
  header: {
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 70,
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 2,
  },
  section1: {
    display: "flex",
    alignItems: "center",
    padding: "20px 10px 0px 10px",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 600,
  },
  circle: {
    borderRadius: "50%",
    width: 60,
    height: 60,
    marginRight: 10,
  },
  contain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
const Services = () => {
  return (
    <div className="container generalHeight" style={{ paddingTop: 80 }}>
      <div className="row">
        <div className="col-md-12">
          <h4 style={style.header} className="text-center text-danger pb-3" data-aos="fade-up" data-aos-duration="3000">
            My Services
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-black" data-aos="zoom-in-right" data-aos-duration="3000">
            <div className="card-body">
              <div>
                <div style={style.section1}>
                  <div
                    className="d-flex justify-content-center align-items-center bg-danger"
                    style={style.circle}
                  >
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="text-light"
                      size={"2x"}
                    />
                  </div>

                  <h4
                    style={style.subHeader}
                    className="text-center text-secondary"
                  >
                    Web App Development
                  </h4>
                </div>
                <p className="text-light normal-font pt-3">
                  Crafting exceptional web experiences tailored to your needs.
                  From stunning design to seamless functionality, I'll bring
                  your vision to life with pixel-perfect precision. Whether it's
                  a sleek portfolio, an e-commerce platform, or a dynamic web
                  application, I'll ensure your online presence stands out and
                  delivers results. Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-black" data-aos="zoom-out-up" data-aos-duration="3000">
            <div className="card-body">
              <div>
                <div style={style.section1}>
                  <div
                    className="d-flex justify-content-center align-items-center bg-danger"
                    style={style.circle}
                  >
                    <FontAwesomeIcon
                      icon={faMobilePhone}
                      className="text-light"
                      size={"2x"}
                    />
                  </div>

                  <h4
                    style={style.subHeader}
                    className="text-center text-secondary"
                  >
                    Mobile App Development
                  </h4>
                </div>
                <p className="text-light normal-font pt-3">
                  Unlock the power of mobile technology with a dedicated mobile
                  developer. From concept to launch, I specialize in creating
                  high-performance and intuitive mobile applications for iOS and
                  Android platforms. With a keen eye for detail and a focus on
                  user experience, I'll transform your ideas into sleek and
                  engaging mobile experiences. Let's make your app idea a
                  reality and reach millions of users worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-black" data-aos="zoom-in-left" data-aos-duration="3000">
            <div className="card-body">
              <div>
                <div style={style.section1}>
                  <div
                    className="d-flex justify-content-center align-items-center bg-danger"
                    style={style.circle}
                  >
                    <FontAwesomeIcon
                      icon={faServer}
                      className="text-light"
                      size={"2x"}
                    />
                  </div>

                  <h4
                    style={style.subHeader}
                    className="text-center text-secondary"
                  >
                    Deployment
                  </h4>
                </div>
                <p className="text-light normal-font pt-3">
                  Elevate your digital presence with custom development
                  solutions tailored to your business. From web and mobile
                  applications to software solutions, we bring innovation and
                  expertise to every project. Our team of experienced developers
                  is committed to delivering high-quality code, seamless
                  functionality, and a user-centric experience. Let's
                  collaborate and turn your ideas into reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
