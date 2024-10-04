import React, { useEffect } from "react";
import { gsap } from "gsap";

function Hero() {
  const text = " Software + Developer ";
  const fontSize = [
    "13vw",
    "12vw",
    "11vw",
    "10vw",
    "9vw",
    "8vw",
    "7vw",
    "6vw",
    "5vw",
    "3vw",
    "3vw",
    "3vw",
    "5vw",
    "6vw",
    "7vw",
    "8vw",
    "9vw",
    "10vw",
    "11vw",
    "12vw",
    "13vw",
    "13vw",
  ];

  return (
    <div className="hero">
      <div className="header">
        <div>
          <p>3</p>
        </div>
        <h2>hi, i'm jai</h2>
        <h2>A</h2>
      </div>
      <div className="role">
        <>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {text.split("").map((letter, index) => (
            <span key={index} style={{ fontSize: fontSize[index] || "16px" }}>
              {letter}
            </span>
          ))}
        </>
      </div>
    </div>
  );
}

export default Hero;
