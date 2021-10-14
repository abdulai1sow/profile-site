import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import { BrowserRouter as Link } from "react-router-dom";
import { IconContext } from 'react-icons';

const Projects = ({items}) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, url } = menuItem;
        return (
          <article key={id} className="project-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <p className="item-text">{desc}</p>
              </header>
              <a href={url}>
                <IconContext.Provider value={{ className: "appLink"}} >
                  <FiExternalLink />
                </IconContext.Provider>
              </a>
            </div>
          </article>
        );
      })}
      
    </div>
  )
}

export default Projects
