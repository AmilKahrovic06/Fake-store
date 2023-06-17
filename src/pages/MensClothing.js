import React, { useEffect, useState } from "react";
import axios from "axios";

const MensClothing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSeeMore = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <div className="Products">
      {products.map((product) => (
        <div key={product.id} className="ProductCard">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}$</p>
          <button onClick={() => handleSeeMore(product.id)}>See More</button>
        </div>
      ))}
    </div>
  );
};

export default MensClothing;
