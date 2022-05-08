import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateProfile.css";
import { Spin } from "antd";

const Form = () => {
  // a local state to store the currently selected file.

  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [selectb, setselectb] = useState("");
  const [comment, setcomment] = useState("");
  
  const [spin, setSpin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("selectb", selectb);
    formData.append("comment", comment);


    try {
      const response = await axios({
        method: "post",
        url: "/customer/create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Successfully Complaint Added");
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
                      <label>First Name :</label> &nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="fname"
                        onChange={(e) => setfname(e.target.value)}
                        required
                        placeholder="Enter First Name"
                      />
                    </td>
                    <td>
                      <label>Last Name :</label>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="lname"
                        onChange={(e) => setlname(e.target.value)}
                        required
                        placeholder="Enter Last Name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Email :</label>{" "}
                      <input
                        type="email"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="email"
                        onChange={(e) => setemail(e.target.value)}
                        required
                        placeholder="Enter Email"
                      />
                    </td>
                    <td>
                      {" "}
                      <label>Enter Brand Name :</label>{" "}
                      <input
                        type="text"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="selectb"
                        onChange={(e) => setselectb(e.target.value)}
                        required
                        placeholder="Enter Brand Name "
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <label>Comment :</label>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        style={{
                          width: "70%",
                          height: "40px",
                          borderRadius: "10%",
                        }}
                        name="comment"
                        onChange={(e) => setcomment(e.target.value)}
                        required
                        placeholder="Enter Comment"
                      />
                    </td>
                    
                  </tr>
                </table>{" "}
                <br />
               
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <input type="submit" value={"UPDATE"} />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <input
                      type="submit"
                      value={"RESET"}
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
