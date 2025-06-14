import React from "react";

const ShoppingList = ({ items, toggleComplete }) => {
  return (
    <>
      <ul className="shopping-list list-unstyled">
        {items.map((item) => (
          <li
            key={item.id}
            className="d-flex justify-content-between align-items-center mb-2 p-3 rounded border bg-white"
            style={{ cursor: "pointer" }}
            onClick={() => toggleComplete(item.id)}
          >
            <span className={item.complete ? "text-decoration-line-through text-muted" : ""}>
              {item.name}
            </span>
            <span>
              {item.complete ? (
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
              ) : (
                <i className="bi bi-circle text-secondary fs-5"></i>
              )}
            </span>
          </li>
        ))}
      </ul>

      <button className="btn btn-outline-danger clear">Clear</button>
    </>
  );
};

export default ShoppingList;
