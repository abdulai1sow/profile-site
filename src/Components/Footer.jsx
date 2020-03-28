import React, { Component } from 'react'
import * as ReactBootStrp from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
          <footer className="footer">
            <ReactBootStrp.Nav className='social-links' defaultActiveKey="/home" as="ul"> 
              <ReactBootStrp.Nav.Item as="li">
                <ReactBootStrp.Nav.Link href="/home">
                  LinkedIn
                </ReactBootStrp.Nav.Link>
              </ReactBootStrp.Nav.Item>
              <ReactBootStrp.Nav.Item as="li">
                <ReactBootStrp.Nav.Link eventKey="link-1">
                  Twitter
                </ReactBootStrp.Nav.Link>
              </ReactBootStrp.Nav.Item>
              <ReactBootStrp.Nav.Item as="li">
                <ReactBootStrp.Nav.Link eventKey="link-2">
                  Link
                </ReactBootStrp.Nav.Link>
              </ReactBootStrp.Nav.Item>
            </ReactBootStrp.Nav>
          </footer>
        );
    }
}

