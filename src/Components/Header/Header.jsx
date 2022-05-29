import React from "react";
import "./header.css";
// import CTA from "./CTA";
import ME from "../../assets/ME6.png";
import Navbar from "../Navbar/Navbar";
// import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div id="#" className="header">
    <header>
      <div className="container header_container">
        <center>
          <h5>Hello I'm</h5>
          <h1>Ankur Sharma</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <div className="me">
            <img src={ME} alt="Me" />
          </div>
        </center>
        {/* <CTA /> */}
        <div className="top-portion">
          <div className="about">
            An independent and self-motivated graduate with problem solving
            skills (DSA) and hands on experienced MERN Developer (Mongo DB,
            Express JS, React JS, Node JS). Going forward, I would like to work
            in an organization that challenges me on a daily basis and offers
            opportunities to enhance my professional skills and knowledge. I
            also hope to work in an environment that helps my overall growth and
            development alongside it.
          </div>
          <div className="cta">
            <a
              href="https://drive.google.com/file/d/1qsxBdoEpH4iyZKpVbej-iHoimp8Q--qG/view?usp=sharing"
              target="_blank"
              className="btn"
            >
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
        {/* <HeaderSocial /> */}
        

        {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
      </div>
    </header>
    <div className="navbar-external"><Navbar/></div>
    

    </div>
  );
};

export default Header;
