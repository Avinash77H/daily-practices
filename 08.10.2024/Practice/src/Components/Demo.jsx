import React, { useEffect,useState } from 'react'
import Cards from './Cards';

const api = 'https://dummyjson.com/products';

function Demo() {
    
    const[product,setProduct]=useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(api);
                const data = await response.json()           
                setProduct(data.products)
            }
            catch{
                alert("something went wrong")
            }
        }
        fetchData()
    },[])
   
  return (
    <div>
      { product && <Cards data={product}/>}
     {/* {
       product && product.map((item)=>{
            return <div>
                <p>{item.title}</p>
                <p>{item.category}</p>
                <img src={item.images } alt="" className='w-20 h-20'/>
            </div>
        })
     } */}
    </div>
  )
}

export default Demo
