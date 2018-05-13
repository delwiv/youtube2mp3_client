import 'rxjs';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';
import store, { history } from './store';

import { ConnectedRouter } from 'react-router-redux';
import Footer from './components/Footer';
// common components
import Header from './components/Header';
import { Provider } from 'react-redux';
// routes
import routes from './asyncRoutes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            <div className="wrap">{routes}</div>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
