import React from "react";
import Img from "../assets/images/Pic1.jpg";
import cv from '../assets/doc/emeka.pdf'
const style = {
  container: {
    minHeight: "100vh",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    paddingBottom: 100,
  },
  image: {
    height: 400,
    width: 400,
    borderRadius: "20px 100px",
    border: "10px solid #DCDCDC"
  },
  smallerHeader: {
    fontSize: 25,
    fontWeight: 600
  },
  header: {
    fontSize: 53,
    fontWeight: 700
  },
  text: {
    fontSize: 20,
    fontWeight: 600, 
    lineHeight: 2
  }
};
const HeroSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6" style={style.container}>
          <div className="animate__animated animate__fadeInLeft hero_txtContainer">
            <h6 className="text-start text-secondary" style={style.smallerHeader}>
              I'm a
            </h6>
            <h1 className="text-start text-danger" style={style.header}>
              Frontend Developer
            </h1>
            <h5 className="text-start text-secondary" style={style.text}>
              React and React Native
            </h5>
            <div style={{paddingTop: 15}}>
              <a className="btn btn-danger btn-lg btnText py-3 px-5" href={cv}>Download Cv</a>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={style.container}>
          <div className="hero_imgContainer">
            <img
              src={Img}
              className="img-fluid box"
              alt="my_img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
