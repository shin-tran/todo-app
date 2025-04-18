import React from "react";
import "../styles/FilterPanel.css"

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <input type="text" name="search-text" id="search-text" />
      <>
        <div className="filter-item">
          <div className="filter-name">
            <img src="" alt="" />
            <p>All</p>
          </div>
          <p>22</p>
        </div>
      </>
    </div>
  );
};

export default FilterPanel;
