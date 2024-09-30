import React from 'react'
import "./Date.css"
function Date(props) {
  let day = props.source.day;
  let month = props.source.month;
  let year = props.source.year;
  return (
    <div className='date-container'>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  )
}

export default Date
