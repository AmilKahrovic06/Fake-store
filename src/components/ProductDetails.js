import React, { useEffect, useState } from "react";
import axios from "axios";
import star from "./star.png";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2 className="product-details">{product.title}</h2>
      <p className="product-details">{product.category}</p>
      <img
        className="product-details"
        src={product.image}
        alt={product.title}
      />
      <p className="description">{product.description}</p>
      <p className="price">{product.price}$</p>
      <br></br>

      <div className="rating">
        <img src={star} alt="stars?" className="star" />
        <p className="rating-text">Rating: {product.rating.rate}</p>
      </div>
      <p className="product-details">Pieces left: {product.rating.count}</p>
      <button className="product-details">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
