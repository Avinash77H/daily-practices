import React from 'react'
import Card from './Card'
import './Layout.css'

function Layout(props) {
  return (
    <div className='layout'>
      <Card source={props.source[0]}/>
      <Card source={props.source[1]}/>
      <Card source={props.source[2]}/>
    </div>
  ) 
}

export default Layout
