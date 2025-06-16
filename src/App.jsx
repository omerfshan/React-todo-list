import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Ekmek", complete: false },
    { id: 2, name: "Süt", complete: true },
    { id: 3, name: "Yumurta", complete: false },
  ]);
 
  const toggleComplete = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setItems(updated);
  };
  
  const Additem=(name)=>{
    const newitem={
      id:Date.now(),
      name,
      complete:false
    };
    setItems([...items,newitem]);
  };
  const DeleteItem=(id)=>{
    const filtered=items.filter(items=>items.id!==id)
    setItems(filtered);
  };
  return (
    <Router>
      <div className="container">
        <Header />
        <Form additem={Additem}/>
        <Filter />
        <ShoppingList items={items} toggleComplete={toggleComplete} Additem={Additem} DeleteItem={DeleteItem}/>
      </div>
    </Router>
  );
}


export default App;
