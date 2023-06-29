// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Search from "./Search.js";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleProduct = (query) => {
//     setSearchQuery(query);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleProductDetails = (productId) => {
//     window.location.href = `/products/${productId}`;
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="Products">
//       <Search handleSearch={handleProduct} />
//       {filteredProducts.map((product) => (
//         <div className="ProductCard" key={product.id}>
//           <img src={product.image} alt={product.title} />
//           <h3>{product.title}</h3>
//           <p>{product.price} $</p>
//           <button onClick={() => handleProductDetails(product.id)}>
//             See More
//           </button>
//         </div>
//       ))}
//     </div>s
//   );
// };

// export default Products;
