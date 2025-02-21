import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [CartData, setCartData] = useState([]);
  const [ProductData, setProductData] = useState([]);

  const DataCalling = async () => {
    const Response = await axios.get("https://fakestoreapi.com/products");
    setCartData(Response.data);
  };

  const addToCart = (idx) => {
    setProductData([...ProductData, CartData[idx]]);
  };

  const RemoveCart = (idx) => {
    setProductData(ProductData.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Header */}
      <div className="h-16 w-full bg-green-500 flex items-center justify-center shadow-lg rounded-lg">
        <button
          onClick={DataCalling}
          className="px-7 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 active:scale-95 transition-all"
        >
          Load Products
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col lg:flex-row gap-5 mt-6">
        {/* Products Section */}
        <div className="w-full lg:w-3/4 bg-white p-5 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CartData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <img
                  className="h-32 w-32 object-contain"
                  src={item.image}
                  alt=""
                />
                <h1 className="text-md font-semibold mt-2">{item.category}</h1>
                <h2 className="text-lg font-bold text-gray-700">${item.price}</h2>
                <button
                  onClick={() => addToCart(idx)}
                  className="mt-3 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 active:scale-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="w-full lg:w-1/4 bg-white p-5 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Cart</h1>
          <div className="flex flex-col gap-4">
            {ProductData.length === 0 ? (
              <p className="text-gray-500 text-center">No items in cart</p>
            ) : (
              ProductData.map((elem, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 rounded-lg p-3 flex items-center gap-4 shadow-md"
                >
                  <img className="h-14 w-14 object-contain" src={elem.image} alt="" />
                  <div className="flex flex-col flex-grow">
                    <h1 className="text-sm font-semibold">{elem.category}</h1>
                    <h2 className="text-md font-bold text-gray-700">${elem.price}</h2>
                  </div>
                  <button
                    onClick={() => RemoveCart(idx)}
                    className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600 active:scale-95 transition"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="h-16 w-full bg-green-500 text-white text-center flex items-center justify-center mt-4 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold">
              Items in Cart: {ProductData.length}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
