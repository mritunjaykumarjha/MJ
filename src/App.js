import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </Switch>
      
      <Footer />
    </Router>
    
  );
}

export default App;
