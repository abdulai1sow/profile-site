import React from 'react'
import { AboutIcon } from './AboutData'
import './about.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* <div className="about">About</div> */}
      <div className='skills'>
        {AboutIcon.map(icons => {
          const { id, icon, title, paragraph } = icons;
          return (
            <article key={id} className="icons">
              <div className="icons-shape">
                <header>{icon}</header>
              </div>
                <h2 className='h2'>{title}</h2>
                <p className='paragragh'>{paragraph}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default About;
