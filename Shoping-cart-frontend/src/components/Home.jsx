import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error ocurred...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div>
            {data?.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div>
                  <span>{product.description}</span>
                  <span>${product.price}</span>
                </div>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
