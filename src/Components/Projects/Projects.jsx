import React from "react";
import "./projects.css";
import {GrDeploy} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import bathBody from "../../assets/bath-body.png"
import buyWow from "../../assets/buy-wow.png"
import appleTV from "../../assets/Apple-tv.png"

const Projects = () => {
  return (
    <div id="projects" className="project">
      <center><h1>Projects</h1></center>
        
        {/* First Project */}
      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={bathBody} alt="Bath Body Works" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML 5"
              />
              <h2>HTML 5</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS 3</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>
            <a target="_blank"  href="https://reactjs.org/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="React"
              />
              <h2>React JS</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h1>Bath Body and Works</h1>
          <p>
            Bath & Body Works, LLC. is an American retail store chain which
            sells soaps, lotions, fragrances, and candles.
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Buying products and services</li>
              <li>Sign-In and Sign-Up pages.</li>
              <li>Sorting products on different parameters.</li>
              <li>Cart item count.</li>
              <li>Checkout.</li>
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://bathandbodyworksclone.netlify.app/" target="_blank"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/ribhar/Bath-BodyWorks" target="_blank"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
      {/* Second Project */}
      
      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={buyWow} alt="Buy Wow" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML 5"
              />
              <h2>HTML 5</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS 3</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developers.google.com/maps/documentation/geolocation/overview">
              <img
                src="https://w7.pngwing.com/pngs/1014/646/png-transparent-google-maps-api-google-maps-navigation-map-app-text-logo-sign.png"
                alt="Google Location API"
              />
              <h2>Location API</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h1>Buy WOW Science</h1>
          <p>
            Buy Wow is an E-commerce company which sells natural skill care products and services
            to the customers.
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-up/Login.</li>
              <li>Product search.</li>
              <li>Sorting and Filtering products.</li>
              <li>Cart functionality.</li>
              <li>Checkout.</li>
              <li>Fetching Address using google Map API </li>
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://dazzling-horse-5169fb.netlify.app/"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/kosireddisreeram/unit3_constructweek"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
      

      {/* Thirt Project */}
      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={appleTV} alt="Apple TV" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML 5"
              />
              <h2>HTML 5</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS 3</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVA SCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
              <img
                src="http://www.multipetros.gr/wp-content/uploads/2013/03/html5-local-storage.jpg"
                alt="Local Storage"
              />
              <h2>Local Storage</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h1>Apple TV</h1>
          <p>
          The Apple TV app is a line of media player software programs developed by Apple Inc. for viewing television shows and films delivered by Apple to consumer electronic devices.
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-In and Sign-Up functionality.</li>
              <li>Local Storage to store data.</li>
              <li>Dom Manipulation.</li>
              <li>Attractive GUI</li>
            </ul>
            </p>
            <br />
            <div className="live-links">
                <a target="_blank"  href="https://nameh-dhiman.github.io/Apple-TV-Clone-Project.github.io/"><GrDeploy/> Live Site</a>
                <a target="_blank"  href="https://github.com/Nameh-Dhiman/Apple-TV-Clone-Project.github.io"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
