import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";

function Card({ item }) {
  const[like,setLike] = useState(false)

  function handleLike() {
    if (like) {
      setLike(false);
      toast("Product unliked!")
    } else {
      setLike(true);
      toast("Product liked!")
    }
  }
  return (
    <div
      key={item.id}
      className="flex flex-col items-center gap-4 w-full border-2 border-black relative"
    >
      <img src={item.images} alt="" className="w-[33.33%]" />
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <div className="absolute right-7 top-3" onClick={handleLike}>
        {like ? (
          <FcLike className="size-8" />
        ) : (
          <FcLikePlaceholder className="size-8" />
        )}
      </div>
    </div>
  );
}

export default Card;
