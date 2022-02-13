import React from 'react';
import Router from './router';
import './App.css';
import Header from './App/components/product/Header';
// import {BrowserRouter as Router,Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Header />
    <Router />
    </div>
  );
}

export default App;
