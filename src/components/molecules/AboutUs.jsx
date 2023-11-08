import React, { useEffect, useState } from "react";
import Img from "../assets/images/IMG_1186.jpeg";

const style = {
  header: {
    fontSize: 25,
    fontWeight: 600,
  },
  text: {
    fontSize: 14,
    fontWeight: 200,
    lineHeight: 2,
  },
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fade-up-text");
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const triggerHeight = windowHeight * 0.6;
        if (rect.top < triggerHeight) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="container-fluid justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="about-pad">
            <div className="text-center">
              <img
                src={Img}
                className="img-fluid"
                alt="my_img"
                style={{
                  width: 150,
                  height: 150,
                  border: "4px solid #5cb85c",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h4
                style={style.header}
                className="text-danger text-center lh-lg"
              >
                About Me
              </h4>
            </div>

            <div>
              <p
                id="fade-up-text"
                style={style.text}
                className={`fade-up-text ${
                  isVisible ? "fade-up" : ""
                } text-light text-center`}
              >
                Hello, I'm{" "}
                <span className="text-info fw-bold">Emeka Mudalue Christian</span>, a Full
                Stack Developer with over 2 years of experience in both frontend
                and backend development. I specialize in building captivating
                and user-friendly applications, leveraging a range of
                technologies including{" "}
                <span className="text-warning fw-bold">
                  HTML, CSS, JavaScript, Python, React, React-Native, Django,
                  and Node.js.
                </span>{" "}
                My passion lies in creating responsive web interfaces and mobile
                applications that engage users. Let's team up for your next
                project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
