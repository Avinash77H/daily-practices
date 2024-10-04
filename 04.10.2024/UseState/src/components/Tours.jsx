import React from 'react'
import Card from './Card'

function Tours({tour,removeTour}) {
  return (
    <div className='container'>
        <div>
          <h2 className='title'>Plan with Avinash</h2>
        </div>

        <div className='cards'>
          {
            tour.map((item,index)=>{
             return <Card key={index} {...item} removeTour= {removeTour}></Card>
            })
          }
        </div>
    </div>
  )
}

export default Tours
