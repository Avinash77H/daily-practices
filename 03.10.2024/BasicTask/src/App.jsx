import { useState } from "react";

import "./App.css";
import IfElse from "./Components/IfElse";
import Ternary from "./Components/Ternary";
import Logical from "./Components/Logical";
import Switch from "./Components/Switch";
import Nesting from "./Components/Nesting";
import Form from "./Components/Form";
import ListRendering from "./Components/ListRendering";
import Card from "./Components/Card";
import ObjectState from "./Components/ObjectState";
import ArrayState from "./Components/ArrayState";
import Counter from "./Components/Counter";
import FullForm from "./Components/FullForm";
import Timer from "./Components/Timer";


function App() {
  const data = [
    {
      name: "avinash",
      age: 23,
    },
    {
      name: "milan",
      age: 22,
    },
    {
      name: "ugam",
      age: 24,
    },
    {
      name: "shyam",
      age: 15,
    },
    {
      name: "ram",
      age: 18,
    },
  ];
  const car = ["volvo", "bugati", "audi"];

  const [timer, setTimer] = useState(true);
  //  const cars = []
  return (
    <>
      {/* <IfElse answer={true}/> */}
      {/* <Ternary age={17}/> */}
      {/* <Logical cars={car}/> */}
      {/* <Switch day={'moday'}/> */}
      {/* <Nesting message={'hello'}/> */}
      {/* <Form/> */}
      {/* <ListRendering car={car}/> */}
      {/* <ObjectState /> */}
      {/* <ArrayState/> */}
      {/* <Counter/> */}
      {/* <FullForm/> */}
      <Timer/>

   

     
    </>
  );
}

export default App;
