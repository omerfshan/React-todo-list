function Filter({ setFilter, filter ,clear}) {
  return (
    <div className="filter-buttons border rounded p-3 mb-3 d-flex justify-content-between">
      <div className="d-flex">
        <button
          item-filter="all"
          className={`btn ${filter === "all" ? "btn-primary" : "btn-secondary"} me-1`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          item-filter="incomplete"
          className={`btn ${filter === "incomplete" ? "btn-primary" : "btn-secondary"} me-1`}
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
        <button
          item-filter="completed"
          className={`btn ${filter === "completed" ? "btn-primary" : "btn-secondary"} me-1`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn btn-outline-danger clear" onClick={()=>clear()}>Clear</button>
    </div>
  );
}

export default Filter;
