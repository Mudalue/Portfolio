import React, { useState } from "react";
import Web from "../molecules/Portfolio/Web";
import Others from "../molecules/Portfolio/Others";
import Mobile from "../molecules/Portfolio/Mobile";
const style = {
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    paddingBottom: 100,
  },
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
  },
  text: {
    fontSize: 16,
    fontWeight: 200,
    lineHeight: 2,
  },
};
const Portfolio = () => {
  const [link, setLink] = useState("web");
  return (
    <div className="container generalHeight" style={{ paddingTop: 80 }}>
      <div className="row">
        <div className="col-md-12">
          <h4 style={style.header} className="text-center text-danger">
            Experience
          </h4>
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <h6
                className={`mx-3  ${
                  link === "web" ? "text-danger" : "text-secondary"
                } cursor`}
                onClick={() => setLink("web")}
                style={style.text}
              >
                Web Application
              </h6>
              <h6
                className={`mx-3  ${
                  link === "mobile" ? "text-danger" : "text-secondary"
                } cursor`}
                onClick={() => setLink("mobile")}
                style={style.text}
              >
                Mobile Application
              </h6>
              <h6
                className={`mx-3  ${
                  link === "others" ? "text-danger" : "text-secondary"
                } cursor`}
                onClick={() => setLink("others")}
                style={style.text}
              >
                Other Projects
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          {link === "web" ? (
            <Web />
          ) : link === "mobile" ? (
            <Mobile />
          ) : link === "others" ? (
            <Others />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
