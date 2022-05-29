import React from 'react'
import "./skills.css"
import "../../index.css"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {SiRedux} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {GrNode} from "react-icons/gr"
import {GrMysql} from "react-icons/gr"
import {SiMongodb} from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills" className="skills">

    <center><h1>Skills</h1></center>
    <div className="skillsContainer">
        <div className="front">
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
                <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="HTML 5" />
                <h2>HTML 5</h2>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png" alt="CSS" />
                <h2>CSS 3</h2>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg" alt="JAVA SCRIPT" />
                <h2>JAVA SCRIPT</h2>
            </a>
            <a href="https://reactjs.org/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                <h2>React JS</h2>
            </a>
            <a href="https://redux.js.org/">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" alt="Redux" />
                <h2>Redux</h2>
            </a>
        </div>
        <div className="back">
            <a href="https://nodejs.org/en/">
                <img src="https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png" alt="Node JS" />
                <h2>Node JS</h2>
            </a>
            <a href="https://expressjs.com/">
                <img src="https://www.atatus.com/images/devicon/icon-express.svg" alt="Express JS" />
                <h2>Express JS</h2>
            </a>
            <a href="https://www.mongodb.com/">
                <img src="https://e7.pngegg.com/pngimages/768/167/png-clipart-mongodb-nosql-document-oriented-database-nosql-icon-leaf-grass.png" alt="Mongo DB" />
                <h2>Mongo DB</h2>
            </a>
            <a href="https://www.npmjs.com/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png" alt="NPM" />
            <h2>NPM</h2>
            </a>
            <a href="https://github.com/MeAnkur">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
            <h2>Github</h2>
            </a>
            <a href="https://www.programiz.com/dsa">
            <img src="https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png" alt="DS ALGO" />
            <h2>DSA</h2>
            </a>
            
        </div>
    </div>


    </section>
  )
}

export default Skills

{/* <div className="front">
        <header>
            <h2>Front-end Skills</h2>
        </header>
                  <h3><AiFillHtml5/> HTML 5</h3>
                  <h3><DiCss3/> CSS</h3>
                  <h3><SiJavascript/> JS</h3>
                  <h3><FaReact/> REACT</h3>
                  <h3><SiRedux/> Redux</h3>
        </div>
        <div className="back">
        <header>
          <h2>Back-end Skills</h2>  
        </header>
        <h3><SiExpress/> EXpress JS</h3>
        <h3><GrNode/> Node JS</h3>
        <h3><GrMysql/> MySQL</h3>
        <h3><SiMongodb/> MongoDB</h3>
        </div> */}