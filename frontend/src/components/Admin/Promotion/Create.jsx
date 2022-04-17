import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin, Tooltip, notification, Select } from "antd";

import {
  FileDoneOutlined,
  InfoCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

import axios from "axios";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Create = () => {
  const [loader, setLoader] = useState(false);
  const [productNumber, setProductnumber] = useState("");
  const [productName, setProductname] = useState("");
  const [productCatergory, setProductcatergory] = useState("");
  const [productPrice, setProductprice] = useState("");
  const [qty, setQty] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 2000);
  }, []);

  const employeeHandler = async (placement) => {
    // create handler for saving data to the db
    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.post(
        //use axios API
        "/product/create",
        {
          productNumber,
          productName,
          productCatergory,
          productPrice,
          qty,
          image,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Successfully Added the product details 😘",
          placement,
        });
        form.resetFields();
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

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
          <div className=" mt-20 -translate-x-52">
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={() => employeeHandler("top")}
            >
              <center>
                {error && <span style={{ color: "red" }}>{error}</span>}
              </center>
              <Form.Item
                name="product name"
                label="Product Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{ width: "260%" }}
                  placeholder="Enter product name"
                  prefix={<FileDoneOutlined className="site-form-item-icon" />}
                  suffix={
                    <Tooltip title="Please Enter Product Name">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                  value={productNumber}
                  onChange={(e) => setProductnumber(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                name="discount"
                label="Discount"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{ width: "288%" }}
                  placeholder="Enter Discount"
                  prefix={<FileDoneOutlined className="site-form-item-icon" />}
                  suffix={
                    <Tooltip title="Please Enter Discount">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>
                  }
                  value={productName}
                  onChange={(e) => setProductname(e.target.value)}
                />
              </Form.Item>


              <Form.Item
                name="season"
                label="Season"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{ width: "297%" }}
                  placeholder="Enter Season"
                  prefix={
                    <DollarCircleOutlined className="site-form-item-icon" />
                  }
                  suffix={[
                    <Tooltip title="Please Enter Season">
                      <InfoCircleOutlined
                        style={{ color: "rgba(0,0,0,.45)" }}
                      />
                    </Tooltip>,
                  ]}
                  value={productPrice}
                  onChange={(e) => setProductprice(e.target.value)}
                  type="type"
                />
              </Form.Item>

              <Form.Item {...tailLayout}>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                <div className="flex ml-8">
                  <Button type="primary" htmlType="submit">
                    {loading ? (
                      <>
                        <Spin /> Submiting in Progess...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>{" "}
                  &nbsp;&nbsp;
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
      )}
    </>
  );
};

export default Create;
