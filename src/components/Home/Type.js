import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React JS Developer",
          "Frontend Developer",
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Full Stack Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
