import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore3 } from './redux/configureStore3';

const store = ConfigureStore3();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;