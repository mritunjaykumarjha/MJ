import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path= {process.env.PUBLIC_URL + '/'} component={Home} />
      
      
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
