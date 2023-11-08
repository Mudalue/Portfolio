import React, { useState, useEffect } from "react";
import Img from "../assets/images/Pic1.jpg";
import cv from "../assets/doc/Christian_cv.pdf";
const style = {
  container: {
    minHeight: "100vh",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    paddingBottom: 100,
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  image: {
    height: 400,
    width: 400,
    borderRadius: "20px 100px",
    border: "10px solid #DCDCDC",
  },
  smallerHeader: {
    fontSize: 25,
    fontWeight: 600,
  },
  header: {
    fontSize: 53,
    fontWeight: 700,
  },
  text: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 2,
    color: "#dcdcdc"
  },
};
const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "I'm dedicated to creating software solutions that enhance people's lives. Through innovative design and development, I aim to simplify tasks and empower individuals and businesses.";

  const typingSpeed = 90; // Adjust typing speed (characters per millisecond) as needed

  useEffect(() => {
    const typeText = () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTimeout(() => {
          setTypedText(fullText.slice(0, i));
        }, i * typingSpeed);
      }
    };

    typeText();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-6" style={style.container}>
          <div className="animate__animated animate__fadeInLeft hero_txtContainer">
            {/* <h6 className="text-start text-secondary" style={style.smallerHeader}>
              I'm a
            </h6> */}
            <h1 className="text-start text-light d-flex" style={style.header}>
              FullStack Developer <span className="text-danger">.</span>
            </h1>
            <h5 className="text-start" style={style.text}>
              {typedText}
            </h5>
            <div style={{ paddingTop: 15 }}>
              <a className="btn btn-danger btn-lg btnText py-3 px-5" href={cv}>
                Download Cv
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6" style={style.container}>
          <div className="hero_imgContainer">
            <img src={Img} className="img-fluid box" alt="my_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
