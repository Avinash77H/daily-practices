import { useState,useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import {toast} from 'react-toastify';

// const api = "https://api.escuelajs.co/api/v1/categories";
   const api = "https://dummyjson.com/products"


const filterData = [
  {
    id: 1,
    title: "nuevo",
  },
  {
    id: 2,
    title: "Electronics",
  },
  {
    id: 3,
    title: "Furniture",
  },
  {
    id: 4,
    title: "Shoes",
  },
  {
    id: 5,
    title: "Testing Category",
  },
];

function App() {

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true)

  async function fetchData(){
    setLoading(true)
    try {
      let response = await fetch(api);
      let output = await response.json();
      console.log(output)
      setData(output)
    } catch (error) {
      toast.error('Something went Wrong')
    }
    setLoading(false)
  }

 useEffect(()=>{
  fetchData()
 },[])

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {/* <Filter filterData={filterData}/> */}
      </div>
      <div>
        {/* {loading ? <Spinner/> : <Cards data={data}/>} */}
      </div>
    </div>
  );
}

export default App;
