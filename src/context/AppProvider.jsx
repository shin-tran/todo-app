import React, { useState } from "react";
import { AppContext } from "./AppContext";

const AppProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState();

  return (
    <AppContext.Provider value={{ selectedCategoryId, setSelectedCategoryId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
