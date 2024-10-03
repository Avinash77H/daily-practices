import React from 'react'
import './Card.css'
import Item from './item'
import Date from './Date'


function Card(props) {
  return (
    <div className='card'>
      <Date source={props.source}/>
      <Item source={props.source}/>
      <button className='card'>Add to Cart</button>
    </div>
  )
}

export default Card
