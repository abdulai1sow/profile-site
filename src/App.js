import React from 'react';
import About from './Components/About';
import Work from './Components/Work'
import './App.css';
import * as ReactBootStrp from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
  return (
    
    <div>
      <Navbar/>
      {/* <About/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={About} />;
          <Route exact path="/work" component={Work} />;
            </Switch>
      </Router>
      <Footer/>
      
    </div>


  );

}

export default App;
