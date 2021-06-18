import React, { useState } from "react";
import "./index.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    const result = todo.filter((name) => name.includes(value));
    setSearchValue(result);
  };

  const handleSubmit = () => {
    const newArray = todo.concat(value);
    setTodo(newArray);
    setValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <>
      <div className="container">
        <h2>Todo List</h2>
        <br />
        <input type="text" value={value} onChange={handleChange} />
        <button className="todo-btn" onClick={handleSubmit}>
          Add Todo
        </button>

        <div className="todo">
          {value
            ? searchValue.map((singleTodo, idx) => (
                <div key={idx}>
                  <p className="singleTodo">{singleTodo}</p>
                </div>
              ))
            : todo.map((singleTodo, idx) => (
                <div key={idx}>
                  <p className="singleTodo">{singleTodo}</p>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteTodo(idx);
                    }} 
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default App;
