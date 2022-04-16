import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Spin, notification } from "antd";
import { Link, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import moment from "moment";

const Payment = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    (async () => {
      await axios
        .get("/payment/")
        .then((res) => setData(res.data))
        .catch((error) => alert(error));
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => setSpin(true), 5000);
  }, []);

  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/payment/delete/${id}`);
      await axios
        .get("/payment/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div>
      <center>
        <div>
          <h1 className=" text-4xl">All Payment Details</h1>
        </div>
        {spin === false ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="w-3/4 border-4 border-sky-700 text-center">
                    <thead class="border-b-4 border-b-sky-700">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Item Details
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
                          Pay Date
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Net Price
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
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
                              {value.itemDetails}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value.qty}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {moment(value.payDate).format("DD/MM/YYYY")}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              Rs.{value.netPrice}
                            </td>
                            <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              <div className="cursor-pointer">
                                <NavLink
                                  to={`/admin-dashboard/edit/${value._id}`}
                                >
                                  <EditTwoTone className="p-2 text-3xl" />
                                </NavLink>
                                <DeleteTwoTone
                                  className="p-2 text-3xl"
                                  onClick={() => deleteData(value._id)}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </center>
    </div>
  );
};

export default Payment;
