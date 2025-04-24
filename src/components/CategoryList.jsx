import React from "react";
import "../styles/CategoryList.css";
import { categoryItem } from "../constaints";

const CategoryList = () => {
  return (
    <>
      <p>Categories</p>
      <div>
        {categoryItem.map((item) => {
          return (
            <div key={item.id} className="category-item">
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
