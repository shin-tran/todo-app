import React from "react";
import "../styles/FilterPanel.css";
import { CgInbox } from "react-icons/cg";
import { FaCheckSquare, FaFlag, FaTrash } from "react-icons/fa";
import { IconContext } from "react-icons";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <input type="text" name="search-text" id="search-text" />
      <div className="filter-container">
        <IconContext.Provider value={{ className: "filter-panel-icon" }}>
          <div className="filter-item">
            <div className="filter-name">
              <div>
                <CgInbox color="#fff" />
              </div>
              <p>All</p>
            </div>
            <p>22</p>
          </div>
          <div className="filter-item">
            <div className="filter-name">
              <FaFlag color="#ffff00" />
              <p>Important</p>
            </div>
            <p>11</p>
          </div>
          <div className="filter-item">
            <div className="filter-name">
              <FaCheckSquare color="#0add0a" />
              <p>Completed</p>
            </div>
            <p>3</p>
          </div>
          <div className="filter-item">
            <div className="filter-name">
              <FaTrash color="#fb3535" />
              <p>Delete</p>
            </div>
            <p>1</p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default FilterPanel;
