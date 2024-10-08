import React from 'react'
import useSound from "use-sound";
import click from "../assets/click.mp3";
import { Link } from 'react-router-dom';
function Navbar() {
  const [play] = useSound(click);
  return (
    <div className="nav-container">
      <div className="left">
        {/* <span>h</span> */}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <p>
          Active <span>!</span>
        </p>
      </div>
      <ul>
        <li>
          <button onMouseEnter={play}>
            <Link className='links' to="/about">* About *</Link>
          </button>
        </li>
        <li>
          <button onMouseEnter={play}>* Work *</button>
        </li>
        <li>
          <button onMouseEnter={play}>* Contact *</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
