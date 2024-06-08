import { useContext } from "react";
import { CategoriesContext } from "../context/categoeiesContext";
import { Navigate } from "react-router-dom";

export default function CategoryRoute( children ) {
  const { categories } = useContext(CategoriesContext);

  if (categories == "") {
    return <Navigate to="/Products" />;
  }
  // return <Navigate to="/Products" />;

  return children;
}