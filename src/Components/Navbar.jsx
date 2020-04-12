import React, { Component } from 'react'
import * as ReactBootStrp from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from './Work.jsx';

export default class Navbar extends Component {
    render() {
       

        return (
            <div >
              <ReactBootStrp.Nav
                className="justify-content-end"
                activeKey="/home"
              >
                <ReactBootStrp.Nav.Item>
                  <ReactBootStrp.Nav.Link href="/">
                    Home
                  </ReactBootStrp.Nav.Link>
                </ReactBootStrp.Nav.Item>

                <ReactBootStrp.Nav.Item>
                  <ReactBootStrp.Nav.Link href="/work">
                    Work
                  </ReactBootStrp.Nav.Link>
                </ReactBootStrp.Nav.Item>

                {/* <ReactBootStrp.Nav.Item>
                  <ReactBootStrp.Nav.Link eventKey="link-2">
                    Notes
                  </ReactBootStrp.Nav.Link>
                </ReactBootStrp.Nav.Item> */}

                <ReactBootStrp.Nav.Item></ReactBootStrp.Nav.Item>
              </ReactBootStrp.Nav>
            </div>

           
        );
    }
}
