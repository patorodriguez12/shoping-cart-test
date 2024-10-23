import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart")
  };

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
              <div
                key={product.id}
                className="w-[250px] max-w-full  flex flex-col justify-between my-8 mx-auto p-4 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-[25px] font-normal">{product.name}</h3>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-4/5 mt-4 mx-auto"
                />
                <div className="flex flex-col justify-between items-center">
                  <span>{product.description}</span>
                  <span className="text-[20px] font-bold">
                    ${product.price}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full h-[40px] rounded-xl mt-8 font-normal bg-sky-500 hover:bg-sky-700 text-white tracking-wide"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
