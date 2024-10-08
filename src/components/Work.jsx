import React from "react";
import useSound from "use-sound";
import click from "../assets/click.mp3";

function Work() {
  const [play] = useSound(click);

  const projects = [
    { title: "Used cars", img: "/assets/usedcars.png" },
    { title: "Dribble", img: "/assets/image.png" },
    { title: "Gemini", img: "/assets/germini_ai.png" },
    { title: "Blog", img: "/assets/Laravel-blog.png" },
    { title: "Todo", img: "/assets/todo_juno.png" },
    { title: "Teleporthq", img: "/assets/teleporthqDark.png" },
  ];

  return (
    <div className="work-container">
      <div className="work-header">
        <span>
          Works <span>D</span>
        </span>
      </div>
      <div className="work-cards">
        <div className="cards">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <img className="card-img" src={project.img} alt={project.title} onMouseEnter={play} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
