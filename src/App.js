import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Register from './components/Register';
import SignIn from './components/SignIn';
import { BrowserRouter as router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      imageUrl: '',
      user: {
        id: '',
        email: '',
        password: '',
        joinedAt: new Date().getTime(),
        name: 'haroon',
        entries: 0
      }
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={() => <SignIn /> } />
        </div>
      </Router>
    );
  }
}

export default App;
