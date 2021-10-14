import React from 'react'
import About from './About-Section/About';
import Work from "./Work";
import Contact from './ContactForm/Contact';

const Home = () => {
  return (
    <>
      <div className="header-container" id="home">
        <h1 className="name-header">
          Hi, my name is <br /> <br />
          <span> abdulai sow.</span>
        </h1>
        <p>
          I'm a software engineer preficient in building and designing digital
          experiences. currenty, i do freelance{" "}
        </p>
      </div>

      <About />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
