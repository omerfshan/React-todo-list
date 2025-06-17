import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ShoppingList from "./components/ShoppingList";
import Noitem from "./components/Noitem";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Ekmek", complete: false },
    { id: 2, name: "Süt", complete: true },
    { id: 3, name: "Yumurta", complete: false },
  ]);
  const [filter, setFilter] = useState("all");

  const toggleComplete = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setItems(updated);
  };

  const Additem = (name) => {
    const newitem = {
      id: Date.now(),
      name,
      complete: false,
    };
    setItems([...items, newitem]);
  };

  const DeleteItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };

  const clearAll = () => {
    setItems([]);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "incomplete") return !item.complete;
    if (filter === "completed") return item.complete;
    return true;
  });

  return (
    <Router>
      <div className="container">
        <Header />
        <Form additem={Additem} />
        {items.length > 0 ? (
          <>
            <Filter setFilter={setFilter} filter={filter} clear={clearAll} />
            <ShoppingList
              items={filteredItems}
              toggleComplete={toggleComplete}
              Additem={Additem}
              DeleteItem={DeleteItem}
            />
          </>
        ) : (
         <Noitem/>
        )}
      </div>
    </Router>
  );
}

export default App;
