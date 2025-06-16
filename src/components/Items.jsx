function Items({ item, toggleComplete, DeleteItem }) {
  return (
    <li
      key={item.id}
      className="d-flex justify-content-between align-items-center mb-2 p-3 rounded border bg-white"
      style={{ cursor: "pointer" }}
    >
      
      <span onClick={() => DeleteItem(item.id)} style={{ marginRight: "10px", color: "red", cursor: "pointer" }}>
        <i className="bi bi-x-circle"></i>
      </span>

      
      <span
        className={item.complete ? "text-decoration-line-through text-muted flex-grow-1" : "flex-grow-1"}
        onClick={() => toggleComplete(item.id)}
      >
        {item.name}
      </span>

     
      <span onClick={() => toggleComplete(item.id)}>
        {item.complete ? (
          <i className="bi bi-check-circle-fill text-success fs-5"></i>
        ) : (
          <i className="bi bi-circle text-secondary fs-5"></i>
        )}
      </span>
    </li>
  );
}

export default Items;
