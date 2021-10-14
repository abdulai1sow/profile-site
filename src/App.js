import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About-Section/About'
import Contact from './Components/ContactForm/Contact'
import './App.css';

function App() {
  return (
    <main>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route path="/about" component={About} />;
          <Route path="/work" component={Work} />;
          <Route path="/work" component={Contact} />;
            </Switch>
      </Router>
      <Footer/>
    </main>

  );
}

export default App;
