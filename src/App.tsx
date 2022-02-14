import React from 'react';
import Router from './router';
import './App.css';
import Header from './App/components/product/Header';
import { useAppSelector } from './App/hooks';
// import {BrowserRouter as Router,Router} from 'react-router-dom';

function App() {
  const loading = useAppSelector(state => state.fetchState.loading)
  return (
    <div className="App">
      {
        loading ? (
          <div style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, zIndex: 1}}>
            <div className="ui segment" style={{ height: '100%', background: 'unset' }}>
              <div className="ui active inverted dimmer">
                <div className="ui large text loader">Loading</div>
              </div>
              <p></p>
            </div>
          </div>
        ) : undefined
      }
      <Header />
      <Router />
    </div>
  );
}

export default App;
