import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductDetails = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <div className="Products">
      {products.map((product) => (
        <div className="ProductCard" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price} $</p>
          <button onClick={() => handleProductDetails(product.id)}>
            See More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
