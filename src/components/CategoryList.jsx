import React, { useContext } from "react";
import "../styles/CategoryList.css";
import { categoryItem } from "../constaints";
import { AppContext } from "../context/AppContext";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId } = useContext(AppContext);
  return (
    <>
      <p>Categories</p>
      <div>
        {categoryItem.map((item) => {
          return (
            <div
              key={item.id}
              className="category-item"
              onClick={() => {
                setSelectedCategoryId(item.id);
              }}
            >
              <p className="category-name">{item.label}</p>
              <p>2</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryList;
