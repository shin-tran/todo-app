import React, { useState } from "react";
import "../styles/Sidebar.css";
import { categoryItem } from "../constaints";

const Sidebar = (props) => {
  const data = props.todoItem;
  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportant] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);

  const handleSave = () => {
    const newTodo = { ...data, name, isImportant, isCompleted };
    props.handleTodoItemChange(newTodo);
    props.setShowSidebar(false);
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
          <select id="sb-completed">
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
