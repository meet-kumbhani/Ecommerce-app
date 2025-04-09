import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { categoriesURL, productURL } from '../config/url';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
     const [products, setProducts] = useState([]);
     const [categories, setCategories] = useState([]);

     useEffect(() => {
          axios.get(categoriesURL).then((res) => {
               setCategories(res.data);
          }).catch((err) => {
               console.log(err);
          });
     }, []);


     useEffect(() => {
          axios.get(productURL).then((res) => {
               setProducts(res.data);
          }).catch((err) => {
               console.log(err);
          });
     }, []);

     return (
          <GlobalContext.Provider
               value={{
                    products,
                    setProducts,
                    categories
               }}
          >
               {children}
          </GlobalContext.Provider>
     );
};
