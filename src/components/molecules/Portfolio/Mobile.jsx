import React from "react";
import pawa from "../../assets/images/ pawa.png";
const style = {
  box: {
    height: 700,
    width: 400,
    // borderRadius: "20px",
    // border: "10px solid #DCDCDC",
    marginLeft: 100,
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
    height: 600,
    width: 300,
    borderRadius: "20px",
  },
};

const Mobile = () => {
  return (
    <>
      <div className="row" style={{ marginTop: 80, marginBottom: 80 }}>
        <div className="col-md-6">
          <div style={{ marginTop: 100, width: 500 }} className="padLeft">
            {/* <h3 className="text-danger" style={style.header}>
              Project 1
            </h3> */}
            <div data-aos="fade-right" data-aos-duration="3000">
              <h6 style={style.header2} className="text-secondary">
                PAWA2U
              </h6>
              <p className="normal-font lh-lg text-light">
                This is also an e-commerce application on mobile that also
                allows users to buy utility goods for example gas and petrol.
                online with payment gateway also implemented with Paystack.
              </p>
              <span className="normal-font cursor text-light">
                App name: <span className=" text-danger text-sm ">Pawa2u</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div style={style.box}>
            <img
              src={pawa}
              className="img-fluid"
              alt="project 2"
              style={style.img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
