import React from 'react'
import useSound from "use-sound";
import click from "../assets/click.mp3";
function Hero_About() {
    const [play] = useSound(click);
  return (
    <div className="Hero_About-container">
      <h2>
        I'm a passionate <span>Junior Developer</span> with a solid grasp of
        technical concepts, I'm eager to advance my career in IT through{" "}
        <span>software </span>and <span>web development</span>
      </h2>
      <button onMouseEnter={play}>
        <span>8</span> More About me <span>8</span>{" "}
      </button>
    </div>
  );
}

export default Hero_About;
