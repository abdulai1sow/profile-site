import React, { Component } from 'react'
import { IconContext } from 'react-icons';
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
          <footer>
            <div className="footerContent">
              {/* <h3>abdulai sow</h3> */}
              <ul className="socials">
                <li>
                  <a href="#">
                    <IconContext.Provider value={{className:'footerIcons'}}>
                      <AiOutlineLinkedin />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
              <ul className="socials">
                <li>
                  <a href="#">
                    <IconContext.Provider value={{className:'footerIcons'}}>
                      <AiFillGithub />
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
              <ul className="socials">
                <li>
                  <a href="#">
                    <IconContext.Provider value={{className:'footerIcons'}}>
                      <AiOutlineLinkedin />
                    </IconContext.Provider>
                      
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-Bottom">
              <p>Designed & Built by abdulai sow &copy;2020</p>
            </div>
          </footer>
        );
    }
}
