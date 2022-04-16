import React, {useState,useEffect,Component} from 'react';
import axios from 'axios';
import { Button, Spin } from "antd";
import { Link, NavLink } from "react-router-dom";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";

const Riderlist = () => {

  const [data, setRiders] = useState([]);
  const [spin, setSpin] = useState(false);


  useEffect(() => {
      function getRiders(){
        axios.get("http://localhost:8070/delivery/").then((res) => {
          console.log(res.data);
          setRiders(res.data);
        }).catch((err) => {
          alert(err.message);
        })
      }
      getRiders();
  }, [])
  
  const deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`http://localhost:8070/delivery/delete/${id}`);
      await axios
        .get("/payment/")
        .then((res) => setRiders(res?.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className= "container">

     
      
    
<center>
        
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
                          Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                         NIC
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
                              {value.name}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value.phone}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value.email}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value.nic}
                            </td>
                            <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            <div className="cursor-pointer">
                                <NavLink
                                  to={`/updaterider/${value._id}`}
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
      </center>
    </div>
  )
}

export default Riderlist;