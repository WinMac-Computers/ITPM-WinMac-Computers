import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Form, Input, InputNumber, Button, Spin } from "antd";
import { NavLink, useParams } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

const UpdateRider = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNIC] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`http://localhost:8070/delivery/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setName(json.name);
          setPhone(json.phone);
          setEmail(json.email);
          setNIC(json.nic);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `http://localhost:8070/delivery/get/${id}`,
        {
          name,
          phone,
          email,
          nic,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setName("");
        setPhone("");
        setEmail("");
        setNIC("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setName("");
      setPhone("");
      setEmail("");
      setNIC("");
      setLoading(false);
    }
  };
  
  return (
    <Form
      {...layout}
      name="nest-messages"
      onSubmit={editHandler}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="phone"
        rules={[
          {
            required: true,
            type: "number",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="email"
        label="email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nic"
        label="nic"
        rules={[
          {
            required: true,
            
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          {loading ? "Updating..." : "Update"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateRider;
