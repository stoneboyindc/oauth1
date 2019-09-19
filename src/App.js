import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

import User from './User/User';

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: null,
      user: null
    };
  }

  setUser(user) {
    this.setState({ user: user });
  }

  setRoom(room) {
    this.setState({ activeRoom: room });
  }

  render() {
    return (
      <div className="App">
        <nav id="main">
          <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user} />
        </nav>

        <aside id="sidebar">
          <div id="logo"></div>
          <h1 id="wordmark">Tomato</h1>
        </aside>


      </div>
    );
  }
}

export default App;
