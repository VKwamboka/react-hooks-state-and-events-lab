import React, {useState} from "react";

function Item({ name, category }) {
  const [addItem, setCart] = useState(false)

  // const appClass = false ? "Add items" : "Remove items"

  function addCart(){
    setCart((addItem ) =>!addItem)
    
  }
  return (
    <li className={addItem? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addItem ? "remove" : "add"} onClick={addCart}>{addItem?  "Remove From Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
