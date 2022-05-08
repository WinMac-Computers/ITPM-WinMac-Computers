import React, {useState,useEffect,Component} from 'react';
import axios from 'axios';
import { Button, Spin } from "antd";
import { Link, NavLink } from "react-router-dom";
import { DashboardFilled, DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import "./address.css";
//import "antd/dist/antd.css";



const Orders = () => {

  const [data, setOrders] = useState([]);
  const [data1, setRiders] = useState([]);
  const [spin, setSpin] = useState(false);


  useEffect(() => {
      function getOrders(){
        axios.get("http://localhost:8070/address/").then((res) => {
          console.log(res.data);
          setOrders(res.data);
        }).catch((err) => {
          alert(err.message);
        })
      }
      getOrders();
  }, [])
  
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


  
  
  
  return (
    <div className= "container">
        
     <div >
       <h1 style={{color: "black" , fontSize: "30px", textAlign: "center", marginTop:"10px"}}>Order List</h1>
     </div>
      
      <div className='search' >
          <input
          className='form-control'
          type= "search"
          placeholder='Search'
          name="searchQuery"
       //   onChange={this.handleSearchArea}
          >
          </input>
      </div>
<center>
        
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="w-3/4 border-4 border-sky-700 text-center">
                    <thead class="border-b-4 border-b-sky-700" >
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
                          Full Name
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
                         Address
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-black px-6 py-4 border-r-4 border-sky-700"
                        >
                          Assign Rider
                        </th>
                      </tr>
                    </thead>
                    {data.map((value) => {
                      return (
                        <tbody>
                          <tr class="border-b">
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value._id}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value.name}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              {value.phone}
                            </td>
                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                              <p>{value.address}</p>
                              <p>{value.city}</p>
                              <p>{value.province}</p>
                              
                            </td>
                            
                            <td class="text-2xl px-6 py-4 whitespace-nowrap border-r-4 border-sky-700">
                            <div className="cursor-pointer" >
                            <select>
                               {data1.map((value)=>(
                                 <option value="Select">{value.name}</option>
                                ))}
                            </select>
                            <button type="submit" class="primary">Assign</button>
                               
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


export default Orders;