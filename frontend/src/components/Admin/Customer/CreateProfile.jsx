import React, { useState } from "react";
import axios from "axios";
import "./CreateProfile.css";

const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = async (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <div className=" bg-zinc-400 shadow-2xl w-3/4 h-1/2 ml-60 mt-60 text-left">
      <div className=" mt-10">
        <form onSubmit={handleSubmit}>
          <br/>
          <table style={{width:"100%"}}>
            <tr>
              <td>
                <label>Email :</label>{" "}&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="email"
                  style={{ background: "gray", width: "70%", height: "50%" }}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </td>
              <td>
                <label>Name :</label>{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  style={{ background: "gray", width: "70%", height: "50%" }}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Address :</label>{" "}
                <input
                  type="text"
                  style={{ background: "gray", width: "70%", height: "50%" }}
                  name="address"
                  onChange={(e) => setaddress(e.target.value)}
                  required
                />
              </td>
              <td>
                {" "}
                <label>Phone Number :</label>{" "}
                <input
                  type="phone"
                  style={{ background: "gray", width: "70%", height: "50%" }}
                  name="phone"
                  onChange={(e) => setphone(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>Age :</label>{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="number"
                  style={{ background: "gray", width: "70%", height: "50%" }}
                  name="age"
                  onChange={(e) => setage(e.target.value)}
                  required
                />
              </td>
              <td>
                {" "}
                <label for="gender" className="form-label">
                  Gender
                </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  style={{ background: "gray", width: "70%", height: "50%" }}
                  type="text"
                  placeholder="Enter the gender"
                  className="form-control"
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
          <input type="submit" value={"submit"} />

          
        </form>
      </div>
    </div>
  );
};

export default Form;
