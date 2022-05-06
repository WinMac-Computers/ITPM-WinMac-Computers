import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateProfile.css";
import { Spin } from "antd";

const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [spin, setSpin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("age", age);
    formData.append("gender", gender);

    try {
      const response = await axios({
        method: "post",
        url: "/customer/create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Successfully Customer Added");
    } catch (error) {
      alert(error);
    }
  };

  const handleFileSelect = async (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // const resetFields = () => {
  //   window.location.reload();
  // };

  useEffect(() => {
    setTimeout(() => setSpin(true), 5000);
  }, []);

  return (
    <div>
      <center>
        {spin === false ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <div className=" bg-zinc-400 shadow-2xl w-3/4 h-1/2 ml-60  text-left">
            <div className=" mt-10">
              <form onSubmit={handleSubmit}>
                <br />
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>
                      <label>Email :</label> &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="email"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter Email"
                      />
                    </td>
                    <td>
                      <label>Name :</label>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter Name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Address :</label>{" "}
                      <input
                        type="text"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="address"
                        onChange={(e) => setaddress(e.target.value)}
                        required
                        placeholder="Enter Address"
                      />
                    </td>
                    <td>
                      {" "}
                      <label>Phone Number :</label>{" "}
                      <input
                        type="phone"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="phone"
                        onChange={(e) => setphone(e.target.value)}
                        required
                        placeholder="Enter Phone Number"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <label>Age :</label>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="number"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="age"
                        onChange={(e) => setage(e.target.value)}
                        required
                        placeholder="Enter Age"
                      />
                    </td>
                    <td>
                      {" "}
                      <label for="gender" className="form-label">
                        Gender
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        type="text"
                        placeholder="Enter Gender"
                        name="gender"
                        onChange={(e) => setgender(e.target.value)}
                        required
                        pattern="[A-Za-z]+"
                        title="Gender cannot contain any numbers or special characters"
                      />
                    </td>
                  </tr>
                </table>{" "}
                <br />
                <div className="ml-20">
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    name="image"
                    required
                  />
                </div>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <input type="submit" value={"SUBMIT"} className="input"/>
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <input
                      type="submit"
                      value={"RESET"} className="input"
                      // onClick={resetFields}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </center>
    </div>
  );
};

export default Form;
