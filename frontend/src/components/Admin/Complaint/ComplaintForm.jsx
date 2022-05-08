import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Complaint/Complaint.css";
import { Spin } from "antd";

const ComplaintForm = () => {
  // a local state to store the currently selected file.

  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [selectb, setselectb] = useState("");
  const [comment, setcomment] = useState("");

  const [spin, setSpin] = useState(false);

  const resetFields = () => {
    setemail("");
    setfname("");
    setlname("");
    setselectb("");
    setcomment("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/complaint/create", {
        fname,
        lname,
        email,
        selectb,
        comment,
      });
      alert("Successfully Complaint Added");
    } catch (error) {
      alert(error);
    }
  };

  // const handleFileSelect = async (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

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
            <div className=" mt-40">
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
                        value={fname}
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
                        value={lname}
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
                          marginLeft: "50px"
                        }}
                        name="email"
                        onChange={(e) => setemail(e.target.value)}
                        required
                        placeholder="Enter Email"
                        value={email}
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
                          marginLeft: "10px"
                        }}
                        name="selectb"
                        onChange={(e) => setselectb(e.target.value)}
                        required
                        placeholder="Enter Brand Name "
                        value={selectb}
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
                        value={comment}
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
                    <input type="submit" value={"CREATE"} className="input" />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <button
                      type="button"
                      value={"RESET"}
                      style={{
                        padding: "12px",
                        background: "#04AA6D",
                        color: "white",
                      }}
                      onClick={() => resetFields()}
                    >
                      RESET
                    </button>
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

export default ComplaintForm;
