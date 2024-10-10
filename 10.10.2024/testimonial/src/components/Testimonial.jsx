import React, { useState } from 'react'
import Card from './Card'
import { CiCircleChevLeft } from "react-icons/ci";  
import { CiCircleChevRight } from "react-icons/ci";


function Testimonial(props) {
  const data = props.data
  const [index,setIndex] = useState(0)
  function handleLeftSlider(){
    if(index - 1 < 0){
      setIndex(data.length - 1)
    }
    else{
      setIndex(index - 1)
    }
  }
  function handleRightSlider(){
    if(index >= data.length - 1){
      setIndex(0)
    }
    else{
      setIndex(index + 1)
    }
  }

  function handleRandomSlider(){
    let number = Math.floor(Math.random()*data.length)
    setIndex(number)
  }

  return (
    <div className=' relative flex flex-col justify-center items-center'>
      <Card data={data[index]}/>
      <button onClick={handleLeftSlider}><CiCircleChevLeft className='size-8 absolute -left-12 top-[50%]'/></button>
      <button onClick={handleRightSlider}><CiCircleChevRight className='size-8 absolute -right-12 top-[50%]'/></button>
      <button onClick={handleRandomSlider} className='bg-green-500 text-white px-2 py-1 rounded-md ' >Random</button>
    </div>
  )
}

export default Testimonial
