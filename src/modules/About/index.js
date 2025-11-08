import React from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./skills";

const About = () => {
  return (
    <>
      
      <div className="max-w-[1250px]  mx-auto">
        <AboutMe />
        <Education />
        <Skills/>
      </div>
    </>
  );
};

export default About;
