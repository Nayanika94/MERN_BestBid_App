import React, { createContext, useState } from "react";

export const ProductContext = createContext({ products: [], setProducts: function () { } });

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};