import React from 'react';
import About from './Components/About';
import './App.css';
import Home from './Components/Home';
import * as ReactBootStrp from 'react-bootstrap'
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      
      {/* <ReactBootStrp.Navbar bg="dark">
        <ReactBootStrp.Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </ReactBootStrp.Navbar.Brand>
        <ReactBootStrp.Nav.Item>
          <ReactBootStrp.Nav.Link eventKey="link-2">Link</ReactBootStrp.Nav.Link>
        </ReactBootStrp.Nav.Item>

        
      </ReactBootStrp.Navbar> */}

      <ReactBootStrp.Nav className="justify-content-end" activeKey="/home">
        <ReactBootStrp.Nav.Item>
          <ReactBootStrp.Nav.Link href="/home">About</ReactBootStrp.Nav.Link>
        </ReactBootStrp.Nav.Item>
        <ReactBootStrp.Nav.Item>
          <ReactBootStrp.Nav.Link> Work</ReactBootStrp.Nav.Link>
        </ReactBootStrp.Nav.Item>
        <ReactBootStrp.Nav.Item>
          <ReactBootStrp.Nav.Link eventKey="link-2">Notes</ReactBootStrp.Nav.Link>
        </ReactBootStrp.Nav.Item>
        <ReactBootStrp.Nav.Item>
      
        </ReactBootStrp.Nav.Item>
      </ReactBootStrp.Nav>

      
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
