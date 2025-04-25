import "../styles/FilterPanel.css";
import CategoryList from "./CategoryList";
import FilterList from "./FilterList";
import { useAppContext } from "../context/AppContext";

const FilterPanel = () => {
  const { searchText, setSearchText } = useAppContext;
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
      <FilterList />
      <CategoryList />
    </div>
  );
};

export default FilterPanel;
