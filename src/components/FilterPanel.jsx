import "../styles/FilterPanel.css";
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";

const FilterPanel = ({
  selectedFilterId,
  setSelectedFilterId,
  todoList,
  searchText,
  setSearchText,
}) => {
  return (
    <div className="filter-panel">
      <input
        type="text"
        name="search-text"
        id="search-text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <FilterList
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
        todoList={todoList}
      />
      <CategoryList />
    </div>
  );
};

export default FilterPanel;
