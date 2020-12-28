import React from "react";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Products from "./components/Products";

import { ProductData,ProductDataDessert } from "./components/Products/Data";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./globalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Sidebar />
      <Products  heading="Choose your favorite" data={ProductData}/>
      <Feature />
      <Products  heading="Sweets That Eveyone Likes" data={ProductDataDessert}/>
      <Footer />
    </>
  );
};
export default App;
