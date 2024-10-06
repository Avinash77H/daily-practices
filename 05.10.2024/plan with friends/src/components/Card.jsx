import React, { useState } from "react";

function Card({ item,Method,index }) {
  const [active, setActive] = useState(false);
  let str = item.info;
  let newStr;

  if (active) {
    newStr = str;
  } else {
    newStr = str.substring(0, 100);
  }

  return (
    <div className="w-3/4 p-4 border-2 border-green-500 flex flex-col gap-4">
      <img
        className="object-fill w-full aspect-square"
        src={item.image}
        alt=""
      />
      <p>{item.price}</p>
      <p>{item.name}</p>
      <p>
        {newStr}{" "}
        <span onClick={()=>setActive(!active)} className="text-sky-400">{active ? "Show Less" : "...Read More"}</span>
      </p>
      <button onClick={()=>Method(index)}>Remove</button>
    </div>
  );
}

export default Card;
