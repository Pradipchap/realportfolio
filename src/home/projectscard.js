import React from "react";



export default function Projectscard(props) {
  const style = {
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    overflow: " hidden",
  };

  const projects = [
    {
      pName: "OSAC ",
      type: "web app",
      img: "../osac.png",
      description: "A blog website for Open Source Ascol Circle",
      key: 1,
    },
    {
      pName: "Parwa App ",
      type: "Mobile app",
      img: "../loginpage.png",
      description: "An app to visit and book religious tours,festivals,concerts",
      key: 1,
    },
    
  ];
  return (
    <div className="projectcards" id="projectcards" ref={props.refscroll}>
      <h1 style={{ color: `${props.color}` }}>My Projects</h1>
      <div className="cover">
        {projects.map((element) => {
          return (
            <div className="card1" key={element.key}>
              <div
                className="innercard"
                style={{
                  backgroundImage: `url(${element.img})`,
                  width: "100%",
                  height: "100%",


                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: " hidden",
                }}
              >
                <div className="card1-info">
                  <p className="title">{element.pName}</p>
                  <p className="subtitle">{element.type}</p>
                </div>
                <div className="card1-bio">
                  <p>{element.description}</p>
                  <a href={element.link}>Visit</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
