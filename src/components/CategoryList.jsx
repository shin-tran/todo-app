import React from "react";
import "../styles/CategoryList.css";

const CategoryList = () => {
  const categoryItem = [
    { id: "personal", label: "Personal" },
    { id: "company", label: "Company" },
    { id: "travel", label: "travel" },
    { id: "idea", label: "Idea" },
  ];
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
