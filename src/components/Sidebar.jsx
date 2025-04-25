import React, { useState } from "react";
import "../styles/Sidebar.css";
import { categoryItem } from "../constaints";
import { useAppContext } from "../context/AppContext";

const Sidebar = (props) => {
  const {setShowSidebar, activeTodoItem} = useAppContext;
  const data = activeTodoItem;
  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportant] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const [category, setCategory] = useState(data.category);

  const handleSave = () => {
    const newTodo = { ...data, name, isImportant, isCompleted, category };
    props.handleTodoItemChange(newTodo);
    setShowSidebar(false);
  };

  return (
    <div className="sidebar">
      <form action="" className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo Name</label>
          <input
            type="text"
            name="name"
            id="sb-name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is important?</label>
          <input
            type="checkbox"
            name="isImportant"
            id="sb-important"
            checked={isImportant}
            onChange={() => {
              setIsImportant(!isImportant);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is completed?</label>
          <input
            type="checkbox"
            name="isCompleted"
            id="sb-completed"
            checked={isCompleted}
            onChange={() => {
              setIsCompleted(!isCompleted);
            }}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category</label>
          <select
            id="sb-completed"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categoryItem.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button
          onClick={() => {
            props.setShowSidebar(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
