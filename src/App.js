import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Work from './components/Work';

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
      <Route  path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Intro" component={Intro} />
        <Route exact path="/Skills" component={Skills} />
        <Route exact path="/Work" component={Work} />
      </Switch>
      
      <Footer />
    </Router>
    
  );
}

export default App;
