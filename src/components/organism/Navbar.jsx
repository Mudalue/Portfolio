import React from "react";
import cv from "../assets/doc/emeka.pdf";
const style = {
  Header: {
    fontSize: 35,
    fontWeight: "800",
  },
};
const Navbar = () => {
  const emailAddress = 'emekachristian511@gmail.com';
  const subject = 'Inquiry';
  const body = 'Hello,\n\nI am reaching out for...';

  const handleContactClick = () => {
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ padding: 20 }}
    >
      <div className="container-fluid">
        <a className="cursor navbar-brand" href="0#" style={style.Header}>
          EM
        </a>

        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="mx-2 nav-item">
              <a
                href="#scrollspyHeading1"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                className="nav-link active normal-font"
              >
                Home
              </a>
            </li>
            <li className="mx-2 nav-item">
              <a
                href="#scrollspyHeading2"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                className="nav-link  normal-font"
              >
                About Me
              </a>
            </li>
            <li className="mx-2 nav-item">
              <a
                href="#scrollspyHeading3"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                className="nav-link normal-font"
              >
                Portfolio
              </a>
            </li>
            <li className="mx-2 nav-item">
              <a
                href="#scrollspyHeading4"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                className="nav-link normal-font"
              >
                Services
              </a>
            </li>
            <li className="mx-2 nav-item">
              <a
                href="#scrollspyHeading5"
                style={{
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                className="nav-link normal-font"
              >
                Experience
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <div>
              <a
                className="btn  btnText btn-outline-danger text-decoration-none"
                href={cv}
              >
                Resume
              </a>
            </div>
            <div className="mx-2">
              <button className="btn btnText btn-outline-dark" onClick={handleContactClick}>Contact</button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
