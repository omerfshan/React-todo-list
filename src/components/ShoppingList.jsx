import React from "react";
import Items from "./Items";

const ShoppingList = ({ items, toggleComplete ,DeleteItem}) => {
  return (
  
      <ul className="shopping-list list-unstyled">
      {items.map((item) => (
        <Items key={item.id} item={item} toggleComplete={toggleComplete} DeleteItem={DeleteItem} />
        ))}
    </ul>

    
  
  );
};

export default ShoppingList;
