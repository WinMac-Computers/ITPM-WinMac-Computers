import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Customer/DisplayProfile.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const DisplayProfile = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8070/customer").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const handleRemove = (id) => {
    axios.delete(`http://localhost:8070/customer/delete/${id}`).then((res) => {
      console.log("delete succes");
    });
  };
  const filteredData = listOfUsers.filter(
    (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
  );
  const history = useNavigate();
  console.log(filteredData);
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
              All Customer Profiles
            </span>
            <Button
              style={{ float: "right" }}
              onClick={() =>
                history(
                  `/admin-dashboard/${localStorage.getItem(
                    "username"
                  )}?listView=true`
                )
              }
            >
              Table View
            </Button>
          </center>
          <div className="homescreen__products">
            {filteredData.length === 0 ? (
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
              filteredData.map((i) => {
                const Logo = require(`../../../../public/images/${i.image}`);
                return (
                  <div
                    style={{
                      display: "flex",
                      display: "inline-block",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="product">
                      <img src={Logo} />
                      <div className="product__info">
                        <p>
                          👨<b style={{ color: "red" }}>Name : </b>
                          {i.name}
                        </p>
                        <p>
                          🏃<b style={{ color: "green" }}>Age : </b>
                          {i.age} years old
                        </p>
                        <p>
                          👫<b style={{ color: "blue" }}>Gender: </b>
                          {i.gender}
                        </p>
                        <p>
                          🏕<b style={{ color: "red" }}>Address: </b>
                          {i.address}
                        </p>
                        <p>
                          📱<b style={{ color: "green" }}>Phone: </b>
                          {i.phone}
                        </p>
                        <p>
                          💌<b style={{ color: "blue" }}>Email: </b>
                          <span style={{ fontSize: "12px" }}>{i.email}</span>
                        </p>

                        <Link
                          to={`/edit-customer/${i._id}`}
                          className="info__button"
                          style={{ width: "100%" }}
                        >
                          Edit
                        </Link>
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

export default DisplayProfile;
