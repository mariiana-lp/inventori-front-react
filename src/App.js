import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.js";
import ProductsList from "./components/ProductsList";


function App() {


  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState({});
  const url = "http://localhost:3000/products";

  const fetchProducts = (url) => {
    axios
      .get(url)
      .then((data) => {
        setProducts(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchProducts(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchProducts(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);


  return (
    <>
      <Navbar brand="Inventory" />

      <div className="container py-5">
        <nav>
         
        </nav>
      </div>

      <ProductsList products={products} />

      <div className="container pb-5">
        <nav>
         
        </nav>
      </div>
    </>
  );
  


}


export default App;
