import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="p-8 px-16">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error ocurred...</p>
      ) : (
        <>
          <h2 className="text-[40px] font-normal text-center">New Arrivals</h2>
          <div className="flex flex-wrap justify-between mt-8">
            {data?.map((product) => (
              <div key={product.id} className="w-[250px] max-w-full  flex flex-col justify-between my-8 mx-auto p-4 shadow-2xl rounded-xl">
                <h3 className="text-[25px] font-normal">{product.name}</h3>
                <img src={product.image} alt={product.name} className="w-4/5 mt-4 mx-auto"/>
                <div className="flex flex-col justify-between items-center">
                  <span>{product.description}</span>
                  <span className="text-[20px] font-bold">${product.price}</span>
                </div>
                <button className="w-full h-[40px] rounded-xl mt-8 font-normal bg-[#4b70e2] text-white tracking-wide">Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
