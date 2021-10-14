import React, {useState, useRef, useEffect} from 'react'
import { links, social } from './NavData';
import { FaBars } from "react-icons/fa";
import './NavStyle.css';
import logo from './logo.png';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 95
    })
    }


  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksContainerRef.current.getBoundingClientRect())
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map(link => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} onClick={handleClick}>{text}</a>
                  </li>
                );
              })}
            </ul>
        </div>

        <ul className="social-icons">
          {social.map(socialIcon => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;