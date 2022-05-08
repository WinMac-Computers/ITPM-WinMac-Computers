import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Customer/DisplayProfile.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Complaint = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8070/complaint/").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    axios.delete(`http://localhost:8070/complaint/delete/${id}`).then((res) => {
      console.log("delete succes");
    });
  };

  const history = useNavigate();
  console.log(listOfUsers);
  return (
    <div>
      <form
        className="d-flex"
        class="block p-2 pl-10 w-full rounded-lg border sm:text-sm"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ width: "100%" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="bg4">
        <div className="homescreen">
          <center>
            <span className="homescreen__title" style={{ color: "black" }}>
              All Customer Complaint
            </span>
  
          </center>
          <div className="homescreen__products">
            {listOfUsers.length === 0 ? (
              <div
                className="alert alert-danger"
                style={{ marginLeft: "50px" }}
              >
                <center>
                  Data is not found
                  <img src="notfound.jpg" style={{ width: "50%" }} />
                </center>{" "}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            ) : (
              listOfUsers.map((i) => {
                return (
                  <div
                    // style={{
                    //   display: "flex",
                    //   display: "inline-block",
                    //   justifyContent: "space-between",
                    // }}
                  >
                    <div className="product">
                      <div className="product__info">
                        <p>
                          📛 <b style={{ color: "red" }}>First Name : </b>
                          {i.fname}
                        </p>
                        <p>
                          📛 <b style={{ color: "green" }}>Last Name : </b>
                          {i.lname} years old
                        </p>
                        <p>
                          📧 <b style={{ color: "blue" }}>Email: </b>
                          {i.email}
                        </p>
                        <p>
                          🧑‍🏫 <b style={{ color: "red" }}>Select Brand: </b>
                          {i.selectb}
                        </p>
                        <p>
                          📝 <b style={{ color: "green" }}>Comment: </b>
                          {i.comment}
                        </p>
                        
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
