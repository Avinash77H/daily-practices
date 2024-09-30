import React from "react";
import "./Item.css";

function Item(props) {
  let name = props.source.name;
  return (
    <div className="item-name">
      <span>{name}</span>
    </div>
  );
}

export default Item;
