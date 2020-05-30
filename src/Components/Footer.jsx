import React, { Component } from 'react'
import * as ReactBootStrp from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
          <footer className="footer">
            <ReactBootStrp.Nav
              className="social-links"
              defaultActiveKey="/home"
              as="ul"
            >
              <ReactBootStrp.Nav.Item as="li">
                <ReactBootStrp.Nav.Link href="/home">
                  <a href="https://www.linkedin.com/in/abdulai-sow-50924325/">
                    LinkedIn
                  </a>
                </ReactBootStrp.Nav.Link>
              </ReactBootStrp.Nav.Item>
              <ReactBootStrp.Nav.Item as="li">
                <ReactBootStrp.Nav.Link href="/home">
                  <a href="https://github.com/abdulai1sow">Github</a>
                </ReactBootStrp.Nav.Link>
              </ReactBootStrp.Nav.Item>
            </ReactBootStrp.Nav>
                <p className="copy">&copy; 2020 Abdulai Sow</p>
          </footer>
        );
    }
}

