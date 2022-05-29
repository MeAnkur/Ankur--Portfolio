import React from 'react'
import "./contact.css"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {IoIosCall} from "react-icons/io"
import {SiGmail} from "react-icons/si"
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Contact = () => {
  return (
    <div id="contact" className="contect">
        <center>
            <h1>
            Have an <name>idea?</name> <br />
            Get in Touch!
            </h1>
            <br />
            <name>Ankur Sharma</name>
            <br />
            <br />
            <div className="contact-info">
                <a target="_blank"  href="https://www.linkedin.com/in/ankur-sharma-a34827172/"><AiFillLinkedin/></a>
                <a target="_blank"  href="https://github.com/MeAnkur"><BsGithub/></a>
            </div>
            <div className="call">
                <IoIosCall/> +91 9997087433                
            </div>
            <div className="mail">
            <SiGmail/> ankur999sh@gmail.com
            </div>
        </center>
        <footer className="bottom">
            <AiOutlineCopyrightCircle/>2022 Designed and Build by Ankur Sharma with ❤️
        </footer>
    </div>
  )
}

export default Contact
