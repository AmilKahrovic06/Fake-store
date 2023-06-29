import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const data = response.data;
  return data;
};

const Jewelery = ({ searchTerm }) => {
  const handleProductDetails = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  const { data, isLoading, isError, error } = useQuery("products", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul className="ListOfProducts">
        {filteredData.map((product) => (
          <div className="ProductCard" key={product.id}>
            <li>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} $</p>
              <button onClick={() => handleProductDetails(product.id)}>
                See More
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Jewelery;
