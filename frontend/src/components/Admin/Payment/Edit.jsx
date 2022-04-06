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

const Edit = () => {
  const [itemDetails, setItemDetails] = useState("");
  const [qty, setQty] = useState("");
  const [payDate, setPayDate] = useState("");
  const [netPrice, setNetPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await fetch(`/payment/get/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setItemDetails(json.itemDetails);
          setQty(json.qty);
          setPayDate(json.payDate);
          setNetPrice(json.netPrice);
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
        `/payment/update/${id}`,
        {
          itemDetails,
          qty,
          payDate,
          netPrice,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setItemDetails("");
        setQty("");
        setPayDate("");
        setNetPrice("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setItemDetails("");
      setQty("");
      setPayDate("");
      setNetPrice("");
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
        name="item details"
        label="Item Details"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="qty"
        label="Qty"
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
        name="pay date"
        label="Pay Date"
        rules={[
          {
            required: true,
            type: "Date",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="net price"
        label="Net Price"
        rules={[
          {
            required: true,
            type: "number",
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

export default Edit;
