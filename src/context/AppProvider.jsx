import React, { useRef, useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      name: "Đi học thêm",
      isImportant: false,
      isCompleted: true,
      isDeleted: false,
      category: "personal",
    },
    {
      id: "2",
      name: "Đi học võ",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: "personal",
    },
    {
      id: "3",
      name: "Đi ngủ",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: "travel",
    },
  ]);
  const inputRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTodoItemId, setActiveTodoItemId] = useState();
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [selectedFilterId, setSelectedFilterId] = useState("all");
  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

  return (
    <AppContext.Provider
      value={{
        inputRef,
        todoList,
        setTodoList,
        selectedCategoryId,
        setSelectedCategoryId,
        searchText,
        setSearchText,
        showSidebar,
        setShowSidebar,
        activeTodoItemId,
        setActiveTodoItemId,
        selectedFilterId,
        setSelectedFilterId,
        activeTodoItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
