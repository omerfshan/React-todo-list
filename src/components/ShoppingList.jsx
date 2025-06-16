import React from "react";
import Items from "./Items";

const ShoppingList = ({ items, toggleComplete ,DeleteItem}) => {
  return (
    <>
      <ul className="shopping-list list-unstyled">
      {items.map((item) => (
        <Items key={item.id} item={item} toggleComplete={toggleComplete} DeleteItem={DeleteItem} />
    ))}

      </ul>

      <button className="btn btn-outline-danger clear">Clear</button>
    </>
  );
};

export default ShoppingList;
