import React from 'react'; // This file Student.js is like a sub-componet of Students.js . This is like one student out of students.

const Student = (props) => {   // this is an arrow function syntax
  let unique_number = props.unique_number ? props.unique_number : 'NA';
  return (<div>Name: {props.children} | Jersey Num: {unique_number}</div>) // no need of render function in ES6 functional component.
}

export default Student;
