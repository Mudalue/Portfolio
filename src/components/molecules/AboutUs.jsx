import React from "react";
import Img from "../assets/images/IMG_1186.jpeg";
const style = {
  header: {
    fontSize: 25,
    fontWeight: 600,
  },
  text: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 2,
  },
};
const AboutUs = () => {
  return (
    <div className="container-fluid generalHeight bg-secondary">
      <div className="row">
        <div className="col-md-6 aboutmeimg">
          <div>
            <img src={Img} className="img-fluid box" alt="my_img" />
          </div>
        </div>
        <div className="col-md-6 aboutmetext">
          <h4 style={style.header} className="text-light">
            About Me
          </h4>
          <p style={style.text} className="text-light">
            Hi, I'm Emeka Mudalue, a frontend developer with 2+ years of
            experience in mobile and web development. I specialize in creating
            captivating and user-friendly interfaces using HTML, CSS, JavaScript, React and React-native. I'm passionate about crafting responsive websites and
            mobile apps that engage users. Let's collaborate on your next
            project!
          </p>
          <div className="d-flex">
            <button className="btn btn-danger btn-lg btnText px-5 py-3">
              Hire Me
            </button>
            <button className="btn mx-2 btn-lg btn-outline-light text-light btnText px-5 py-3">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
