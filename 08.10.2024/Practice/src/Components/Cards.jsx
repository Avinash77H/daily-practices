import React, { useState } from "react";
import Card from "./Card";

function Cards({ data }) {

  const [newData, setNewData] = useState(data);

  const obj = [
    { id: 1, category: "All" },
    { id: 2, category: "beauty" },
    { id: 3, category: "fragrances" },
    { id: 4, category: "furniture" },
    { id: 5, category: "groceries" },
  ];
  function handleCard(category) {
    if (category === "All") {
      setNewData(data);
    } else {
      const newItem = data.filter((item) => item.category === category);
      setNewData(newItem);
    }
  }

  return (
    <div className="border-2 border-green-500">
      <div className="w-screen flex justify-between px-20 mt-8">
        {obj.map((item) => {
          return (
            <button
              key={item.id}
              className="bg-purple-400 text-white px-2 py-1 rounded-md"
              onClick={() => handleCard(item.category)}
            >
              {item.category}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-3 w-screen px-20 gap-8 mt-12">
        {newData.map((item,index) => {
          return <Card item={item} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Cards;
