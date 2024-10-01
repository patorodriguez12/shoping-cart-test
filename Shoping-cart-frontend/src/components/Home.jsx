import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
