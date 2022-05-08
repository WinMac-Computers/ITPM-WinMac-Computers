import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from "antd";
import "./Style.css";

import Cart from "../User/Cart";
import AdminCart from "../Cart/Cart";

const StorageDrive = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    (async () => {
      await axios
        .get("/product/")
        .then((res) => setData(res.data))
      
        .catch((error) => alert(error));
    })();

    setTimeout(() => setSpin(true), 3000);
  }, []);

  const addToCart = async (value) => {
    const productName = value.productName;
    const productNumber = value.productNumber;
    const productCategory = value.productCategory;
    const productPrice = value.productPrice;
    const productQty = value.productQty;

    const user = localStorage.getItem("username");
    try {
      Cart.set(productName, {
        productName,
        productNumber,
        productCategory,
        productPrice,
        productQty,
        user
      })
      AdminCart.set(productName, {
        productName,
        productNumber,
        productCategory,
        productPrice,
        productQty,
        user
      })
      console.log(Cart);
      alert("Successfully Added to the cart");
    } catch (error) {
      alert(error);
    }
  };

  const filterData = data.filter((el) => el.productCatergory === "Storage Drive");

  return (
    <>
      {spin === false ? (
        <center>
          <div className=" my-56">
            <Spin size="large" />
          </div>
        </center>
      ) : (
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-4 ">
              {filterData.map((value, index) => {
                return (
                  <div class="p-4 lg:w-1/3">
                    <div class="h-96  bg-opacity-75 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 pt-2 rounded-lg overflow-hidden text-center relative">
                      <div>
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center"
                          src="https://dummyimage.com/720x400"
                          alt="blog"
                        />
                      </div>
                      <h1 class="title-font sm:text-2xl text-xl font-medium text-slate-900 mb-3">
                        {value.productName}
                      </h1>
                    </div>
                    <div className=" flex justify-between">
                      <h2 class="tracking-widest text-base title-font font-medium text-red-600 mb-1">
                        Quantity: {value.qty}
                      </h2>
                      <h2 class="tracking-widest text-base title-font font-medium text-red-600 mb-1">
                        LKR, {Number(value.productPrice) * 370}.00
                      </h2>
                    </div>
                    <div>
                      <button
                        className=" mx-auto mb-4 btn-add-to-cart"
                        onClick={() => addToCart(value)}
                      >
                        <span class="text spaan">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default StorageDrive;