import { useState } from "react";
import "./app.css";
import "normalize.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    const todo = {
      title: "New Activity",
      date: new Date(),
    };

    setTodos((prev) => [...prev, todo]);
  };

  return (
    <div>
      <div className="header">
        <div>
          <h3 className="header-title poppins-semibold">To Do List App</h3>
        </div>
      </div>

      <div className="main-content">
        <div className="content-header">
          <h1 className="content-header__title">Activity</h1>

          <div>
            <button
              className="btn btn-primary btn-rounded"
              onClick={createTodo}
            >
              <span className="material-symbols-outlined">add</span>
              Tambah
            </button>
          </div>
        </div>

        <div className="todos">
          {todos.map((item, index) => (
            <div className="todo-item" key={index}>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div>
            <div className="empty-state">
              <img src="/ilustration/activity-empty-state.png" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
