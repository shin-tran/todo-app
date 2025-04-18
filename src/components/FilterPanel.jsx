import React, { useState } from "react";
import "../styles/FilterPanel.css";
import { CgInbox } from "react-icons/cg";
import { FaCheckSquare, FaFlag, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

const FilterPanel = () => {
  const [selectedFilterId, setSelectedFilterId] = useState("all");

  const filterItems = [
    { id: "all", label: "All", icon: <CgInbox color="#fff" /> },
    { id: "important", label: "Important", icon: <FaFlag color="#ffff00" /> },
    {
      id: "completed",
      label: "Completed",
      icon: <FaCheckSquare color="#0add0a" />,
    },
    { id: "delete", label: "Delete", icon: <FaTrash color="#fb3535" /> },
  ];

  return (
    <div className="filter-panel">
      <input type="text" name="search-text" id="search-text" />
      <div className="filter-container">
        <IconContext.Provider value={{ className: "filter-panel-icon" }}>
          {filterItems.map((item, index) => {
            return (
              <div
                key={`${item.id}-${index}`}
                className={`filter-item ${
                  item.id === selectedFilterId ? "selected" : ""
                }`}
              >
                <div className="filter-name">
                  <div>{item.icon}</div>
                  <p>{item.label}</p>
                </div>
                <p>22</p>
              </div>
            );
          })}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default FilterPanel;
