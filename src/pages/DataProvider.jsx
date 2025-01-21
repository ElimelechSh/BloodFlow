// DataContext.js
import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

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


export const useDataContext = () => {
  return useContext(DataContext);
};
