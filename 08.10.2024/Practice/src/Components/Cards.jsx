import React from 'react'

function Cards({data}) {
    const obj =[
        { id:1,category:"All"},
        { id:2,category:"beauty"},
        { id:3,category:"fragrances"},
        { id:4,category:"furniture"},
        { id:5, category:"groceries"}
    ]
  return (
   <div>
     <div className='w-screen flex justify-between  px-20 mt-8'>
        {obj.map((item)=>{
            return <button key={item.id}>{item.category}</button>
        })}
     </div>
    <div className='grid grid-cols-3 w-screen px-20 gap-8 mt-12'>
        {
            data.map((item)=>{
                return <div key={item.id} className='flex flex-col items-center gap-4 w-full border-2 border-black'>
                    <img src={item.images} alt="" className='w-[33.33%]' />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                </div>
            })
        }
    </div>
   </div>
  )
}

export default Cards
