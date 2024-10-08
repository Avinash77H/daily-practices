import React, { useEffect,useState } from 'react'
import Cards from './Cards';
import Loader from './Loader';

const api = 'https://dummyjson.com/products';

function Demo() {
    
    const[product,setProduct]=useState(null)
    const[isActive,setIsActive]= useState(true)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(api);
                const data = await response.json()           
                setProduct(data.products)
                setIsActive(false)
            }
            catch{
                alert("something went wrong")
            }
            
        }
        fetchData()
    },[])
   
  return (
    <div>
      
      {isActive?<Loader/>:<Cards data={product}/>}
    
    </div>
  )
}

export default Demo
