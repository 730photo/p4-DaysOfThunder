import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Login from './components/Login'
import Player from './components/Player'
import SinglePost from './components/SinglePost'
// import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/players/:id' component={Player} />
        <Route exact path ='/players/:player_id/posts/:id' component={SinglePost} /> 

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;