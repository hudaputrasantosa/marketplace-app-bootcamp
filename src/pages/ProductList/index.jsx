import { createContext, useContext, useState } from "react";
import Component from "./ProductList";

const ProductContext = createContext({
  search: "",
  products: [],
  setSearch() {},
  setProducts() {},
});

export const useProductContext = () => useContext(ProductContext);

function ProductProvider({ children }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        search,
        products,
        setProducts,
        setSearch,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export default function ProductList() {
  return (
    <ProductProvider>
      <Component />
    </ProductProvider>
  );
}
