import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';

// import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path='/' component={LandingPage} />
        

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;