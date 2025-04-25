import React, { useMemo } from "react";
import { CgInbox } from "react-icons/cg";
import { FaCheckSquare, FaFlag, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useAppContext } from "../context/AppContext";

const FilterList = () => {
  const { selectedFilterId, setSelectedFilterId, todoList } = useAppContext();

  const countByFilterType = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => {
        let newAcc = { ...acc };
        if (cur.isCompleted) {
          newAcc = { ...newAcc, completed: newAcc.completed + 1 };
        }
        if (cur.isImportant) {
          newAcc = { ...newAcc, important: newAcc.important + 1 };
        }
        if (cur.isDeleted) {
          newAcc = { ...newAcc, deleted: newAcc.deleted + 1 };
        }
        return newAcc;
      },
      { all: todoList.length, important: 0, completed: 0, deleted: 0 }
    );
  }, [todoList]);

  const filterItems = [
    { id: "all", label: "All", icon: <CgInbox color="#fff" /> },
    { id: "important", label: "Important", icon: <FaFlag color="#ffff00" /> },
    {
      id: "completed",
      label: "Completed",
      icon: <FaCheckSquare color="#0add0a" />,
    },
    { id: "deleted", label: "Deleted", icon: <FaTrash color="#fb3535" /> },
  ];
  return (
    <div className="filter-container">
      <IconContext.Provider value={{ className: "filter-panel-icon" }}>
        {filterItems.map((item, index) => {
          return (
            <div
              key={`${item.id}-${index}`}
              className={`filter-item ${
                item.id === selectedFilterId ? "selected" : ""
              }`}
              onClick={() => setSelectedFilterId(item.id)}
            >
              <div className="filter-name">
                <div>{item.icon}</div>
                <p>{item.label}</p>
              </div>
              <p>{countByFilterType[item.id]}</p>
            </div>
          );
        })}
      </IconContext.Provider>
    </div>
  );
};

export default FilterList;
