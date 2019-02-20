import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AllPurchases from './components/AllPurchases';
import BookDetails from './components/BookDetails';


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
                <Route exact path='/livres' component={AllPurchases} />
                <Route path='/livres/:bookId' component={BookDetails}/>
              </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
