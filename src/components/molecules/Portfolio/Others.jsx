import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
const style = {
  box: {
    height: 400,
    width: 400,
    borderRadius: "20px",
    border: "10px solid #DCDCDC",
    marginLeft: 100,
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
    height: 350,
    width: 400,
    borderRadius: "20px",
  },
};
const Others = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div style={{ marginTop: 100, width: "90%" }} className="padLeft">
            {/* <h3 className="text-danger" style={style.header}>
              Project 1
            </h3> */}
            <h6 style={style.header2} className="text-secondary">
              An Nft Minting Smart-Contract
            </h6>
            <p className="normal-font lh-lg">
              This is a personal project that allows users to mint nft online
              using the ethereum blockchain.
            </p>
            <span className="normal-font cursor">
              <FontAwesomeIcon icon={faGithubAlt} size={"lg"} />{" "}
              <a
                href="https://github.com/Mudalue/Nft-Minting-smart-contract"
                className="text-decoration-none text-danger text-sm "
              >
                https://github.com/Mudalue/Nft-Minting-smart-contract
              </a>
            </span>
          </div>
          <div style={{ marginTop: 100, width: "90%" }} className="padLeft">
            {/* <h3 className="text-danger" style={style.header}>
              Project 2
            </h3> */}
            <h6 style={style.header2} className="text-secondary">
              The Backend Code Base for a Tipping Application
            </h6>
            <p className="normal-font lh-lg">
              This is the backend code written in Nodejs for an application i am
              developing to help solve the problem of tipping, where service
              providers get their tips directly rather than the tips going to
              the organization they work for.
            </p>
            <span className="normal-font cursor">
              <FontAwesomeIcon icon={faGithubAlt} size={"lg"} />{" "}
              <a
                href="https://github.com/Mudalue/Tip-me-Backend"
                className="text-decoration-none text-danger text-sm "
              >
                https://github.com/Mudalue/Tip-me-Backend
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
