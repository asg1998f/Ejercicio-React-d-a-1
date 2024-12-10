import React from 'react'
import "./Person.css"

const Person = (props) => {
  return (
  
    <span>Hello, my name is {props.name} {props.surname} and my age is {props.age}. </span>
  )
}

export default Person