import React from "react";

import Loading from "./loading";
const skill = [
  {
    subject: "Web Development",
    Related: ["React ", "Next.js ", "Node js ", "Firebase", "Tailwind", "MUI"],
    Proficiency: 90,
  },
  {
    subject: "App Development",
    Related: ["Flutter ", "Node js ", "Firebase "],
    Proficiency: 60,
  },
  // {
  //   subject: " AI,ML",
  //   Related: ["Tensorflow", "NumPy", "keras", "Matplotlib"],
  //   Proficiency: 35,
  // },
];

export default function Skills() {
  return (
    <div className="cards" id="skillcards">
      {skill.map((element) => {
        return (
          <div className="card" key={element.Proficiency}>
            <h2>{element.subject}</h2>
            <div>
              <div className="related-technologies" style={{color:'white',margin:'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>Related Technologies</div>
              <h3
                style={{

                  marginInline:'50px',
                  marginBlock:'10px',
                  color:'red',
                  fontWeight:'bold'

                  
                }}
              >
                {element.Related.join(' , ')}
              </h3>
            </div>
            <h3>Proficiency</h3>
            <div className="progress ">
              <Loading className="temp" completed={element.Proficiency} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
