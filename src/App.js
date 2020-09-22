import React from 'react';
import {BrowserRouter as Router,} from 'react-router-dom' 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';


import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      
      <Footer />
    </Router>
    
  );
}

export default App;
