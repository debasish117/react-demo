import React from 'react';

const User = (props) => {
  console.log(props)
  return (<div>Name: {props.children} | Age: {props.age}</div>)
}

export default User;
