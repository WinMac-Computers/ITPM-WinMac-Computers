import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateProfile.css";
import { Spin, notification, Form } from "antd";
import {useNavigate } from "react-router-dom"

const EditProfile = () => {
  // a local state to store the currently selected file.
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");

  const search = window.location.search;
  const param = new URLSearchParams(search);

  const id = param.get("id");
  const history = useNavigate()
  

  useEffect(() => {
    (async () =>
      await axios
        .get(`/customer/get/${id}`)
        .then((res) => {
          setName(res.data.name);
          setEmail(res.data.email);
          setage(res.data.age);
          setaddress(res.data.address);
          setphone(res.data.phone);
          setgender(res.data.gender);
          setSelectedFile(res.data.image);
        }))();
    setTimeout(() => setLoading(false), 5000);
  }, []);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", selectedFile);
  //   formData.append("email", email);
  //   formData.append("name", name);
  //   formData.append("address", address);
  //   formData.append("phone", phone);
  //   formData.append("age", age);
  //   formData.append("gender", gender);

  //   try {
  //     const response = await axios({
  //       method: "get",
  //       url: "/customer/get",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     alert("Successfully Customer Updated");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const handleFileSelect = async (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const resetFields = () => {
    setName("")
    setEmail("")
    setage("")
    setaddress("")
    setphone("")
    setgender("")
    setSelectedFile("")
  };

  // const resetFields = () => {
  //   window.location.reload();
  // };

  const ProfileHandlerUpdate = async (e,placement) => {
    e.preventDefault()
    // create handler for saving data to the db
    setLoading(false);


    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/customer/update/${id}`,
        {
          selectedFile,
          email,
          name,
          age,
          address,
          phone,
          gender,
        },
        config
      );
      setTimeout(() => {
        //set a time out
        setLoading(true);
        notification.info({
          message: `Notification`,
          description: "Successfully updated the Customer Details ????",
          placement,
        });
        form.resetFields();
        history("/admin-dashboard/customermanager?displayProfile=true")
      }, 5000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
      setError(true);
      form.resetFields();
      setLoading(false);
    }
  };

  const [form] = Form.useForm();

  return (
    <div>
      <center>
        {loading === true ? (
          <div className=" my-56">
            <Spin size="large" />
          </div>
        ) : (
          <div className=" bg-zinc-400 shadow-2xl w-3/4 h-1/2 ml-60  text-left">
            <div className=" mt-10">
              <form onSubmit={(e)=>ProfileHandlerUpdate(e,"top")}>
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
                        value={email}
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
                        value={name}
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
                        value={address}
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
                        value={phone}
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
                        value={age}
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
                        value={gender}
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
                  <img src={"/images/" + selectedFile} style={{width:"200px" , height:"200px"}} />
                </div>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{padding:"12px" , background:"#04AA6D" , color:"white"}}>
                    
                    <input type="submit" value={"SUBMIT"} />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <input
                    style={{padding:"12px" , background:"#04AA6D" , color:"white"}}
                      type="submit"
                      value={"RESET"}
                      
                      onClick={() => resetFields()}
                      
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

export default EditProfile;
