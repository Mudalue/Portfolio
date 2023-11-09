import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faDocker,
  faHtml5,
  faJira,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
const style = {
  header: {
    fontSize: 25,
    fontWeight: 600,
    marginBottom: 70,
  },
};
const Experience = () => {
  const icons = [
    { id: 1, name: faReact, color: "#61dbfb", title: "React" },
    { id: 2, name: faHtml5, color: "#e34c26", title: "Html5" },
    { id: 3, name: faCss3, color: "#264de4", title: "Css3" },
    { id: 4, name: faBootstrap, color: "#6610f2", title: "Bootstrap" },
    { id: 5, name: faNodeJs, color: "#68a063", title: "Node js" },
    { id: 6, name: faJs, color: "#f0db4f", title: "Javascript" },
    { id: 7, name: faJira, color: "#2962ff", title: "Jira" },
    { id: 8, name: faPython, color: "#4b8bbe", title: "Python" },
    { id: 9, name: faDocker, color: "#0db7ed", title: "Docker" }
  ];
  return (
    <div className="container experience-section">
      <div className="row">
        <div className="col-md-12">
          <h4 style={style.header} className="text-center text-danger pt-3" data-aos="fade-up" data-aos-duration="3000">
            Skills and Technologies
          </h4>
        </div>
        <div className="col-md-12">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {icons.map((icon) => (
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 100,
                  paddingTop: 50,
                }}
              >
                <FontAwesomeIcon
                  icon={icon.name}
                  size={"3x"}
                  color={icon.color}
                />
                <div>
                  <p className="normal-font lh-lg">{icon.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
