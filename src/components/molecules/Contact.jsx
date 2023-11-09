import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { InputField } from "../atoms/InputFields";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const style = {
  header: {
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 70,
  },
  btn: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
};
const Contact = () => {
  const contents = [
    { id: 1, title: "+1 (562)-306-3505", icon: faPhone },
    { id: 2, title: "emekachristian511@gmail.com", icon: faMailBulk },
    { id: 3, title: "Bakersfield, California", icon: faAddressBook },
  ];
  const socials = [
    { id: 1, link: "https://www.github.com/mudalue", icon: faGithub },
    {
      id: 2,
      link: "https://www.linkedin.com/in/emeka-mudalue",
      icon: faLinkedinIn,
    },
  ];
  return (
    <div
      className="container-fluid"
      style={{ padding: 50, backgroundColor: "#000"}}
    >
      <div className="row">
        <div className="col-md-12">
          <h4 style={style.header} className="text-center text-danger" data-aos="fade-up" data-aos-duration="3000">
            Contact
          </h4>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in-right" data-aos-duration="3000">
              <h4
                style={{ fontSize: 25, fontWeight: "600" }}
                className="text-secondary"
              >
                Drop Me a Message
              </h4>
              <p className="normal-font text-light w-75">
                Ready to connect and discuss your project? Reach out to me
                through the contact details below. I'm excited to hear about
                your ideas, answer any questions you may have, and explore how
                we can work together to achieve your goals. Let's start the
                conversation and bring your vision to life
              </p>
              <div style={{ marginTop: 30 }}>
                {contents.map((content) => (
                  <div style={{ display: "flex" }}>
                    <button style={style.btn} className="btn mb-2 bg-danger" >
                      <FontAwesomeIcon icon={content.icon} className="text-light"/>
                    </button>
                    <p className="mx-2 normal-font text-light lh-lg">
                      {content.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                {/* <div className="card" style={{ height: "auto", width: "400px" }}>
                  <div className="card-body">
                    <form>
                      <InputField placeholder={"Name"} background={"#000"} />
                      <InputField placeholder={"Email"} background={"#000"} />
                      <div class="form-floating">
                        <textarea
                          className="form-control bg-dark text-danger"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style={{
                            height: "100px",
                            marginTop: 20,
                            fontSize: 12,
                            boxShadow: "none",
                          }}
                        ></textarea>
                        <label
                          for="floatingTextarea2"
                          className="text-secondary"
                          style={{ fontSize: 12, fontWeight: 300 }}
                        >
                          Comments
                        </label>
                      </div>
                      <div className="pt-3 mb-3">
                        <button className="btn btn-dark py-2 px-5 normal-font">
                          send
                        </button>
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ marginTop: 100 }}>
          <hr className="text-light" />
        </div>
        <div className="col-md-12">
          <>
            <div className="d-flex justify-content-end">
              {socials.map((content) => (
                <div style={{ display: "flex" }}>
                  <button
                    style={style.btn}
                    className="btn mb-2 mx-2"
                    onClick={() => (window.location.href = content.link)}
                  >
                    <FontAwesomeIcon icon={content.icon} />
                  </button>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Contact;
