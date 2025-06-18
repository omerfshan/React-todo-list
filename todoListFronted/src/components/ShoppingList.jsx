// components/ShoppingList.jsx
const ShoppingList = ({ children }) => {
  return (
    <ul className="shopping-list list-unstyled">
      {children}
    </ul>
  );
};

export default ShoppingList;
