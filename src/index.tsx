import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './App/store';
//https://www.youtube.com/watch?v=0W6i5LYKCSI
//https://github.com/dmalvia/React_Redux_Tutorial


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route>
        <App />
      </Route>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

