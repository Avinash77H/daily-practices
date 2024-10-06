import React, { useEffect,  useState } from "react";

function Timer() {
  const[second,setSecond] = useState(0)
  const[minute,setMinute] = useState(0)
  
  const[isActive,setIsActive] = useState(false)

   let key = null;

   useEffect(()=>{

    if(isActive){
      key = setInterval(()=>{
        console.log("setinterval call")
        setSecond(prev=>prev + 1)
        if(second == 59){
          setMinute((prev)=>prev + 1);
          setSecond(0)
        }
      },1000)
    }
  
    return () =>{
      console.log('clear ')
      clearInterval(key)
    }
   })


  return (
    <div className="border-2 border-black w-screen h-screen grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl">{minute < 10 ? "0"+minute:minute}:{second < 10? "0"+second:second}</p>
        <div className="flex gap-4">
          <button onClick={()=>setIsActive(true)} className="px-2 py-1 bg-green-500 text-white rounded-lg">start</button>
          <button onClick={()=>setIsActive(false)} className="px-2 py-1 bg-red-500 text-white rounded-lg">stop</button>
          <button onClick={()=>{
            setSecond(0)
            setMinute(0)
          }} className="px-2 py-1 bg-purple-500 text-white rounded-lg">reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
