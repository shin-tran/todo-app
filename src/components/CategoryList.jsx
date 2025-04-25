import React, { useMemo } from "react";
import "../styles/CategoryList.css";
import { categoryItem } from "../constaints";
import { useAppContext } from "../context/AppContext";

const CategoryList = () => {
  const { selectedCategoryId, setSelectedCategoryId, todoList } = useAppContext();

  const countByCategory = useMemo(() => {
    return todoList.reduce(
      (acc, cur) => ({ ...acc, [cur.category]: acc[cur.category] + 1 }),
      {
        personal: 0,
        company: 0,
        travel: 0,
        idea: 0,
      }
    );
  }, [todoList]);

  return (
    <>
      <p>Categories</p>
      <div>
        {categoryItem.map((item) => {
          return (
            <div
              key={item.id}
              className={`category-item ${
                selectedCategoryId === item.id ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedCategoryId(item.id);
              }}
            >
              <p className="category-name">{item.label}</p>
              <p>{countByCategory[item.id]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryList;
