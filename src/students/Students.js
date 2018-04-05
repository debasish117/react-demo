import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
  //set initial state
  // state = {
  //   students: [
  //     {name: "Debasish", unique_number: 22}
  //     {name: "Sachin", unique_number: 23}
  //     {name: "Leo Messi", unique_number: 10}
  //   ],
  //   title: "Students List"
  // }

  //render function

  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
        <Student>Debasish</Student>
        <Student unique_number="10">Leo Messi</Student>
        <Student unique_number="7">Ronaldo</Student>
      </div>
    )
  }
}

export default Students;
