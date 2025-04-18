import React from "react";
import "../styles/FilterPanel.css";
import { CgInbox } from "react-icons/cg";
import { FaCheckSquare, FaFlag, FaTrash } from "react-icons/fa";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <input type="text" name="search-text" id="search-text" />
      <>
        <div className="filter-item">
          <div className="filter-name">
            <CgInbox />
            <p>All</p>
          </div>
          <p>22</p>
        </div>
        <div className="filter-item">
          <div className="filter-name">
            <FaFlag />
            <p>Important</p>
          </div>
          <p>11</p>
        </div>
        <div className="filter-item">
          <div className="filter-name">
            <FaCheckSquare />
            <p>Completed</p>
          </div>
          <p>3</p>
        </div>
        <div className="filter-item">
          <div className="filter-name">
            <FaTrash />
            <p>Delete</p>
          </div>
          <p>1</p>
        </div>
      </>
    </div>
  );
};

export default FilterPanel;
