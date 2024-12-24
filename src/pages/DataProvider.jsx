// DataContext.js
import React, { createContext, useState, useContext } from "react";

// יצירת ה-Context
const DataContext = createContext();

// ספק נתונים (Provider)
export const DataProvider = ({ children }) => {
  const [dataFor2, setDataFor2] = useState(""); // מידע מ-1 ל-2
  const [dataFor4, setDataFor4] = useState(""); // מידע מ-3 ל-4

  return (
    <DataContext.Provider
      value={{
        dataFor2,
        setDataFor2,
        dataFor4,
        setDataFor4,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook לשימוש ב-Context
export const useDataContext = () => {
  return useContext(DataContext);
};
