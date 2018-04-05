import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import Students from './students/Students';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Users/>
        <Students title ="Students List"/>
      </div>
    );
  }
}

export default App;
