import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, decreaseCart, addToCart } from "../features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="py-8 px-16">
      <h2 className="font-normal text-[50px] text-center ">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="text-[20px] mt-8 flex flex-col items-center text-gray-400">
          <p>Your cart is currently empty</p>
          <div className="mt-4">
            <Link
              to="/"
              className="flex items-center text-gray-400 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-return-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                />
              </svg>
              <span className="ml-2">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="mt-8 mb-4 mx-0 grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-2 ">
            <h3 className="text-[14px] font-normal uppercase pl-2">Product</h3>
            <h3 className="text-[14px] font-normal uppercase">Price</h3>
            <h3 className="text-[14px] font-normal uppercase">Quantity</h3>
            <h3 className="text-[14px] font-normal uppercase pr-2 justify-self-end">
              Total
            </h3>
          </div>
          <div className="">
            {cart.cartItems?.map((cartItem) => (
              <div
                key={cartItem.id}
                className="grid items-center grid-cols-[3fr_1fr_1fr_1fr] gap-2 border-t-2 border-gray-300 py-4 px-0"
              >
                <div className="flex ">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="w-[100px] max-w-full mr-4"
                  />
                  <div>
                    <h3 className="font-normal">{cartItem.name}</h3>
                    <button
                      className="border-none outline-none mt-3 cursor-pointer bg-none text-gray-400 hover:text-red-700"
                      onClick={() => handleRemoveFromCart(cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="">${cartItem.price}</div>
                <div className="flex justify-center w-[130px] max-w-full place-items-start border-2 border-gray-300 rounded">
                  <button
                    className="py-3 px-5 cursor-pointer"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  <div className="py-3 px-0">{cartItem.cartQuantity}</div>
                  <button
                    className="py-3 px-5 cursor-pointer"
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                </div>
                <div className="justify-self-end pr-2 font-bold">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between place-items-start border-t-2 border-gray-300 pt-16">
            <button className="w-[130px] max-w-full h-[40px] rounded font-normal border-2 border-gray-400 text-gray-400 hover:border-red-700 hover:text-red-700 cursor-pointer">
              Clear Cart
            </button>
            <div className="w-[270px] max-w-full">
              <div className="flex justify-between text-[20px]">
                <span className="">Subtotal</span>
                <span className="font-bold">${cart.cartTotalAmount}</span>
              </div>
              <p className="text-[14px] font-extralight my-2 mx-0">
                Taxes and shipping calculated at checkout
              </p>
              <button className="w-full h-[40px] rounded-xl mt-8 font-normal bg-sky-500 hover:bg-sky-700 text-white tracking-wide">
                Check Out
              </button>
              <div className="mt-4">
                <Link
                  to="/"
                  className="flex items-center text-gray-400 hover:text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-return-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <span className="ml-2">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
