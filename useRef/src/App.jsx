import reactLogo from "./assets/react.svg";

import "./App.css";
import { useRef, useState } from "react";

function App() {
  const fName = useRef();
  const lName = useRef();
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[show,setShow] = useState(false)
  const handleSubmit = (event)=>{
    event.preventDefault()
    setFirstName(fName.current.value)
    setLastName(lName.current.value)
    fName.current.value = "";
    lName.current.value = "";
    setShow(true)
  }
  return (
    <div>
     <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="firstName">First Name</label><br />
          <input type="text" ref={fName} className="border border-gray-600 pl-2" placeholder="enter first name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label><br />
          <input type="text" ref={lName} className="border border-gray-600 pl-2" placeholder="enter last name" />
        </div>

        <button className="place-self-center bg-green-400 text-white px-2 py-1 rounded-md">Submit</button>
      </form>

     {
      show &&  <div>
      <p>First Name:{firstName}</p>
      <p>Last Name:{lastName}</p>
    </div>
     }
     </div>
    </div>
  );
}

export default App;
