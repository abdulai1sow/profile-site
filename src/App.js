import React from 'react';
import About from './Components/About';
import Work from './Components/Work'
import './App.css';
import Home from './Components/Home';
import * as ReactBootStrp from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
function App() {
  return (
    
    <div>
      <Navbar/>
      <Router>

        <Switch>
          <Route exact path="/home" component={Home} />;
                <Route exact path="/work" component={Work} />;
            </Switch>
      </Router>
      <Footer/>
    </div>


  );

}

export default App;
