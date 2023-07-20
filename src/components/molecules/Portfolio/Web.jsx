import React from "react";
import afiq from "../../assets/images/afiq.png";
import kita from "../../assets/images/kita.png";
import tgf from "../../assets/images/tgf.png";
const style = {
  box: {
    height: 400,
    width: 400,
    // borderRadius: "20px",
    // border: "10px solid #DCDCDC",
    // marginLeft: 100,
    paddingTop: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: 500,
  },
  header2: {
    fontSize: 25,
    fontWeight: 700,
  },
  img: {
    height:400,
    width: "",
    borderRadius: "20px",
  },
};
const Web = () => {
  return (
    <>
      <div className="row" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="col-md-6">
          <div style={{ marginTop: 100 }} className="padLeft">
            {/* <h3 className="text-danger" style={style.header}>
              Project 1
            </h3> */}
            <h6 style={style.header2} className="text-secondary">
              A social App with Crytocurrency
            </h6>
            <p className="normal-font lh-lg">
              This is an application with social media capabilties, a payment
              gateway for advertisement using PayStack payment gateway and an
              intended ability for users to share cryptocurrency as gift to
              friends.
            </p>
            <span className="normal-font cursor">
              Link:{" "}
              <a
                href="https://afriqhub.com"
                className="text-decoration-none text-danger text-sm "
              >
                https://afriqhub.com
              </a>
            </span>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center my-2">
          <div style={style.box}>
            <img
              src={afiq}
              className="img-fluid"
              alt="project 1"
              style={style.img}
            />
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="col-md-6 d-flex justify-content-center align-items-center my-2">
          <div style={style.box}>
            <img
              src={kita}
              className="img-fluid"
              alt="project 2"
              style={style.img}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div style={{ marginTop: 100 }}>
            {/* <h3 className="text-danger" style={style.header}>
              Project 2
            </h3> */}
            <h6 style={style.header2} className="text-secondary">
              A Vessel Logistic Application
            </h6>
            <p className="normal-font lh-lg">
              This is also another application i developed that enabled a marine
              logistic company to monitor their vessels and contents of their
              facilities across Nigeria. It includes the integration of apis
              with google map to produce a visual that enabled our client to
              understand at a glace the current situation of their facilities
            </p>
            <span className="normal-font cursor">
              Link:{" "}
              <a
                href="https://kita-dev.asikoenergy.com/login"
                className="text-decoration-none text-danger text-sm "
              >
                https://kita-dev.asikoenergy.com/login
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="col-md-6">
          <div style={{ marginTop: 100 }} className="padLeft">
            {/* <h3 className="text-danger" style={style.header}>
              Project 3
            </h3> */}
            <h6 style={style.header2} className="text-secondary">
              An E-commerce application
            </h6>
            <p className="normal-font lh-lg">
              This is a basic e-commerce application with carting system to
              allow users to purchase items online
            </p>
            {/* <span className="normal-font cursor">
              Link:{" "}
              <a
                href="https://tgf-demo.vercel.app/"
                className="text-decoration-none text-danger text-sm "
              >
                https://tgf-demo.vercel.app/
              </a>
            </span> */}
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center my-2">
          <div style={style.box}>
            <img
              src={tgf}
              className="img-fluid"
              alt="project 3"
              style={style.img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;
