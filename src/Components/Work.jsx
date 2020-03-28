import React, { Component } from 'react'


export default class Work extends Component {
    render() {
        return (
          <div>
            <div className="w-container-1">
              <h1>Work</h1>
            </div>

            <div className="w-container-2">
              <h2>what I've been up to.</h2>
              <p>
                Here's a selection of some recent work. for more up to the
                minute work you can visit me linkedIn or twitter.
              </p>
            </div>

            <div className="w-container-3">
                <img src="" alt="project-one"/>
                <h1>Connect-4</h1>
                <p>Html/Css/JavaScript</p>
            </div>
          </div>
        );
    }
}
