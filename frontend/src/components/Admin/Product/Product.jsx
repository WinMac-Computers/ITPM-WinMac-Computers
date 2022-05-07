import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .get("/product/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  const deleteProduct = async (id) => {
    //method for deleting a todo
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/product/delete/${id}`);
      await axios
        .get("/product/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <center>
      <div>
        <h1 className=" text-4xl">All Products</h1>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="w-4/5 border-4 border-sky-700 text-center max-w-full">
                <thead class="border-b-4 border-b-sky-700">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Product
                      <br />
                      Number
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Product
                      <br />
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Product
                      <br />
                      Catergory
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Product
                      <br />
                      Price
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-sky-700"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {data.map((value) => {
                  return (
                    <tbody>
                      <tr class="border-b">
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {value.productNumber}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {value.productName}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {value.productCatergory}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {value.productPrice}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {value.qty}
                        </td>
                        <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          {value.status}
                        </td>
                        <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                          <EditOutlined
                            style={{ color: "green" }}
                            onClick={() =>
                              history(
                                `/admin-dashbord/${localStorage.getItem(
                                  "username"
                                )}?update=true&id=${value._id}`
                              )
                            }
                          />{" "}
                          <DeleteOutlined
                            style={{ color: "red" }}
                            onClick={() => deleteProduct(value._id)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>

          <div className=" float-left ml-32 translate-x-2 mx-auto">
            <Button
              type="primary"
              danger
              onClick={() =>
                history(
                  `/admin-dashboard/${localStorage.getItem(
                    "username"
                  )}?_product=addproduct`
                )
              }
            >
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Product;
