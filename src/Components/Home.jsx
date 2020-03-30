import React, { Component } from "react";
import App from "../App.css";

import * as ReactBootStrp from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <h1 className="name-header"> I'm Abdulai</h1>
          <h2 className="title">I' m a Software Engineer</h2>
          <div className="container_1">
            <img className="con1-pic" src="./Logo1.png" alt="header image" />
          </div>
          <div className="container_2">
            <img className="hi-image" src="./images-hi.png" alt="smile face" />
            <h2 className="con2-hi">Hi</h2>
            <p className="con2-para">
              I'm a Software Engineer from Atlanta, Georgia. <br /> I have
              passion for web development and <br />I love to create functional
              applications.
            </p>
          </div>
          <div className="container_3">
            {/* can do for first header */}

            <h1 className="div-header">What I can do.</h1>
            <div className="">
              {/* build what you want para */}
              <div className="can-do-pic">
                <img className="can-pic" src="./can-do-2.png" alt="" />

                <h2 className="build-h2">Build what you want.</h2>
                <p className="build-para">
                  I like to keep it simple. My goals are to focus on
                  <br />
                  functionality, content and making <br />
                  it easy for end users.
                </p>
              </div>
              {/* dev para section */}
              <div className="dev-para">
                <img className="dev-pic" src="./2-pic-can.png" alt="" />
                <h2 className="header-dev">Develop what you need.</h2>
                <p className="dev-discription">
                  I'm a engineer, so i know how to create your applications{" "}
                  <br />
                  to run across devices using the latest <br /> technologies
                  available.
                </p>
              </div>
              <p></p>
            </div>
          </div>
          <div className="container_4">
            <h1 className="con4-header">I can Help.</h1>
            <h3 className="con4-title">I'm currently available for work.</h3>
            <div className="con4-para">
              If you are looking for my skills and knowledge, <br />
              or just want to say hey, then get in touch.
            </div>
            <ReactBootStrp.Button
              className="btn-messageMe"
              variant="primary"
              size="lg"
              active
            >
              MESSAGE ME
            </ReactBootStrp.Button>{" "}
          </div>
        </div>
      </div>
    );
  }
}
