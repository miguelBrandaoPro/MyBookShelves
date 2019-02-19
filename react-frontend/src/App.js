import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ListPurchases from './components/ListPurchases';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1 className="pb-3 mb-4 font-italic border-bottom">Sur mes étagères</h1>
            <Router>
              <div>
                <Route exact path='/' component={Home} />
                <Route path='/achats' component={ListPurchases} />
              </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
