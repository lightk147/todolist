import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allinfo, setAllinfo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const submit = () => {
    if (title.trim() === "" || description.trim() === "") return;

    let userdetail = { title, description };

    if (editIndex !== null) {
      const updatedInfo = [...allinfo];
      updatedInfo[editIndex] = userdetail;
      setAllinfo(updatedInfo);
      setEditIndex(null);
    } else {
      setAllinfo([...allinfo, userdetail]);
    }

    setTitle("");
    setDescription("");
  };

  const deleteItem = (index) => {
    const updatedInfo = allinfo.filter((_, i) => i !== index);
    setAllinfo(updatedInfo);
  };

  const editItem = (index) => {
    setTitle(allinfo[index].title);
    setDescription(allinfo[index].description);
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>

      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="mb-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Title"
            />
          </div>
          <div className="mb-3">
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter Description"
            />
          </div>
          <button onClick={submit} className="btn btn-primary w-100">
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </div>
      </div>

      <ul className="list-group mt-4">
        {allinfo.map((info, index) => (
          <li key={index} className="list-group-item">
            <h5>{info.title}</h5>
            <p>{info.description}</p>
            <div>
              <button
                onClick={() => editItem(index)}
                className="btn btn-warning me-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
