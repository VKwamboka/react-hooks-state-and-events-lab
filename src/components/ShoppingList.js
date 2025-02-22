import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCat, setSelectedCat] = useState("All");

  function handleSelectedCat(event) {
    setSelectedCat(event.target.value);
  }
  
  const selectedItems = items.filter((item) => {
    if (selectedCat === "All") {
      return true;
    } else {
      return item.category === selectedCat;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCat}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
