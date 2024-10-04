import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaLaravel,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiThreedotjs,
  SiMui,
  SiRedux,
} from "react-icons/si";
import { Tooltip } from "@mui/material";

function Skill() {
  const skills = [
    { title: "HTML5", icon: <FaHtml5 /> },
    { title: "CSS3", icon: <FaCss3 /> },
    { title: "Tailwind CSS", icon: <SiTailwindcss /> },
    { title: "Material UI", icon: <SiMui /> },
    { title: "JavaScript", icon: <FaJs /> },
    { title: "TypeScript", icon: <SiTypescript /> },
    { title: "Java", icon: <FaJava /> },
    { title: "Python", icon: <FaPython /> },
    { title: "React", icon: <FaReact /> },
    { title: "Redux", icon: <SiRedux /> },
    { title: "Laravel", icon: <FaLaravel /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "MySQL", icon: <SiMysql /> },
    { title: "Three.js", icon: <SiThreedotjs /> },
    { title: "GitHub", icon: <FaGithub /> },
    { title: "Figma", icon: <FaFigma /> },
  ];

  return (
    <div className="skill-container">
      <h1>
        Skilled <span>With</span>
      </h1>
      <div className="logos">
        <div className="logos-slide">
          {skills.map((skill, index) => (
            <span key={index} className="logo">
              <Tooltip title={skill.title} arrow placement="top">
                <span>{skill.icon}</span>
              </Tooltip>
            </span>
          ))}
          {skills.map((skill, index) => (
            <span key={index} className="logo">
              <Tooltip title={skill.title} arrow placement="top">
                <span>{skill.icon}</span>
              </Tooltip>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
