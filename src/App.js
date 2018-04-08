import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import Students from './students/Students';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
  return (<h1>Welcome {params.username}</h1>)
}

class App extends Component {
  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color: 'blue' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color: 'blue' }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/students" exact activeStyle={
              { color: 'blue' }
            }>Students</NavLink>
          </li>
          <li>
            <NavLink to="/user/peter" exact activeStyle={
              { color: 'blue' }
            }>Peter</NavLink>
          </li>
        </ul>

        <Prompt
          when= {!this.state.loggedIn}
          message={(location)=>{
            return location.pathname.startsWith('/user') ? 'Are you sure?' : true
          }}
        />

        <input type="button" value={this.state.loggedIn ? 'Log Out' : 'Log In'} onClick={this.loginHandle.bind(this)} />
          <Route path='/' exact render={
            ()=>{
              return (<h1>Welcome</h1>)
            }
          }/>

          <Route path='/about' exact render={
            ()=>{
              return (<h1>About</h1>)
            }
          }/>

          <Route path='/students' exact strict component={Students}/>

          <Route path='/users' exact strict component={Users}/>

          <Route path='/user/:username' exact strict render = {({match})=>(
            this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
