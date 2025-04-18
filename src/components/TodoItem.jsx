import React from "react";

const TodoItem = (props) => {
  return (
    <div
      className="todo-item"
      onClick={() => {
        props.handleTodoItemClick(props.id);
      }}
    >
      <div style={{ display: "flex", gap: 4 }}>
        <input
          type="checkbox"
          style={{ marginRight: 3 }}
          checked={props.isCompleted}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={() => {
            props.handleCompleteCheckboxChange(props.id);
          }}
        />
        <p className="todo-item-text">{props.name}</p>
      </div>
      {props.isImpostant && <p>🌟</p>}
    </div>
  );
};

export default TodoItem;
