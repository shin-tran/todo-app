import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Đi học thêm", isImportant: false, isCompleted: true },
    { id: 2, name: "Đi học võ", isImportant: true, isCompleted: false },
    { id: 3, name: "Đi ngủ", isImportant: false, isCompleted: false },
  ]);

  const handleCompleteCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const [activeTodoItemId, setActiveTodoItemId] = useState();

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleTodoItemClick = (todoId) => {
    setShowSidebar(true);
    setActiveTodoItemId(todoId);
  };

  const handleTodoItemChange = (newTodo) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const inputRef = useRef();

  const todos = todoList.map((todo) => {
    return (
      <TodoItem
        id={todo.id}
        key={todo.id}
        name={todo.name}
        isImpostant={todo.isImportant}
        isCompleted={todo.isCompleted}
        handleCompleteCheckboxChange={handleCompleteCheckboxChange}
        handleTodoItemClick={handleTodoItemClick}
      />
    );
  });

  return (
    <div className="container">
      <div>Left sidebar</div>
      <div className="main-content">
        <input
          ref={inputRef}
          type="text"
          name="add-new-task"
          placeholder="Add new task"
          className="task-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const value = e.target.value;
              setTodoList([
                ...todoList,
                {
                  id: crypto.randomUUID(),
                  name: value,
                  isImportant: false,
                  isCompleted: false,
                },
              ]);
              inputRef.current.value = "";
            }
          }}
        />
        <div>{todos}</div>
        {showSidebar && (
          <Sidebar
            key={activeTodoItemId}
            todoItem={activeTodoItem}
            handleTodoItemChange={handleTodoItemChange}
            setShowSidebar={setShowSidebar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
