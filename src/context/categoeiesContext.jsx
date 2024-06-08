import { createContext, useState } from "react";

export const CategoriesContext = createContext();

export function CategoriesContextProvider( {children} ) {
  const [categories, setCategories] = useState("");

  const addCategory = (category) => {
    setCategories(category);
  };

  return (
    <CategoriesContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
}
