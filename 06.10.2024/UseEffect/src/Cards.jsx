import React from 'react'

function Cards(props) {
  let data = props.data;
  console.log(data)
  console.log(typeof data)
  return (
    <div>
      {data.map((item)=>{
       return <p>{item.name}</p>
      })}
    </div>
  )
}

export default Cards
