import React, { Component } from 'react';
import Student from './Student';

class Students extends Component {
  //set initial state
  state = {
    students: [
      {name: "Debasish", unique_number: 22},
      {name: "Sachin", unique_number: 23},
      {name: "Leo Messi", unique_number: 10}
    ],
    title: "Students List"
  }

  //Event function

  randomizeNumber = () => {
    const newState = this.state.students.map((student)=>{
      const rand = Math.floor(Math.random() * 20);
      const tempStudent = student;
      tempStudent.unique_number = rand;
      return tempStudent;
    });
    this.setState({
      newState
    });
  }

  //render function

  render(){
    return(
      <div>
      <h1>{this.state.title}</h1>
        <button onClick={this.randomizeNumber}>Randomize Unique number</button>
        {
          this.state.students.map((student)=>{
            return <Student unique_number={student.unique_number}>{student.name}</Student>
          })
        }
      </div>
    )
  }
}

export default Students;
