import React, { useState, useEffect } from "react";
import axios from "axios";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Spin, notification } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import moment from "moment";

const AllOrders = () => {
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await axios
        .get("/order/")
        .then((res) => {
          setData(res.data);
          console.log(res);
        })
        .catch((error) => alert(error));
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => setSpin(true), 5000);
  }, []);

  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/order/delete/${id}`);
      await axios
        .get("/order/")
        .then((res) => setData(res?.data))
        .catch((error) => alert(error));
    }
  };

  const filteredData = data.filter(
    (el) => el.orderId.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
  console.log(filteredData);

  const history = useNavigate();

  return (
    <div>
      <center>
        <div>
          <h1 className=" text-4xl">All Order Details</h1>
        </div>
        {spin === false ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <div class="flex flex-col">
            <div class="overflow-mx-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <form
                    className="flex"
                    class="block p-2 pl-10 w-full rounded-lg border sm:text-sm"
                  >
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ width: "50%" }}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </form>
                  <table class=" mt-3 w-3/4 border-4 border-sky-700 text-center mx-auto">
                    <thead class="border-b-4 border-b-sky-700">
                      <tr>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Order ID
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Order Details
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Ordered Date
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Order Status
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    {filteredData.length === 0 ? (
                      <center>
                        <span style={{color: "red", marginLeft: "500px"}}>No Results Match</span>
                      </center>
                    ) : (
                      filteredData.map((value) => {
                        return (
                          <tbody>
                            <tr class="border-b">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                {value.orderId}
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                {value.orderDetails}
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                {moment(value.orderedDate).format("DD/MM/YYYY")}
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                {value.status}
                              </td>
                              <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                                <div className="cursor-pointer">
                                  <EditTwoTone
                                    className="p-2 text-3xl"
                                    onClick={() =>
                                      history(
                                        `/admin-dashboard/${localStorage.getItem(
                                          "username"
                                        )}?oedit=true&id=${value._id}`
                                      )
                                    }
                                  />

                                  <DeleteTwoTone
                                    className="p-2 text-3xl"
                                    onClick={() => deleteData(value._id)}
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })
                    )}
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

export default AllOrders;
