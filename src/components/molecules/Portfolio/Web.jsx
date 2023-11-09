import React from "react";
import afiq from "../../assets/images/afiq.png";
import kita from "../../assets/images/kita.png";
import tgf from "../../assets/images/tgf.png";
const style = {
  box: {
    height: 218,
    width: 'auto!important',
    borderRadius: "10px",
    border: "4px solid #5cb85c",
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
    height: 200,
    width: "auto",
    borderRadius: "5px",
  },
};
const Web = () => {
  return (
    <>
      <div className="row" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="col-md-6">
          <div style={{ marginTop: 50 }} className="padLeft">
            <div data-aos="fade-left" data-aos-duration="3000">
              <h6 style={style.header2} className="text-secondary">
                Afiqhub
              </h6>
              <p className="normal-font lh-lg text-light">
                This is an application with social media capabilties, a payment
                gateway for advertisement using PayStack payment gateway and an
                intended ability for users to share cryptocurrency as gift to
                friends.
              </p>
              <span className="normal-font cursor text-light">
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
          <div style={{ marginTop: 30 }}>
            <div data-aos="fade-right" data-aos-duration="3000">
              <h6 style={style.header2} className="text-secondary">
                Kita
              </h6>
              <p className="normal-font lh-lg text-light">
                This is also another application i developed that enabled a
                marine logistic company to monitor their vessels and contents of
                their facilities across Nigeria. It includes the integration of
                apis with google map to produce a visual that enabled our client
                to understand at a glace the current situation of their
                facilities
              </p>
              <span className="normal-font cursor text-light">
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
      </div>

      <div className="row" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="col-md-6">
          <div style={{ marginTop: 50 }} className="padLeft">
         <div data-aos="fade-left" data-aos-duration="3000">
         <h6 style={style.header2} className="text-secondary">
              TGF Stores
            </h6>
            <p className="normal-font lh-lg text-light">
              This is a basic e-commerce application with carting system to
              allow users to purchase items online
            </p>
         </div>
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
