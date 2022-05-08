import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Spin,
  Tooltip,
  notification,
  Select,
  DatePicker,
} from "antd";

import {
  FileDoneOutlined,
  InfoCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

import axios from "axios";
import TextArea from "antd/lib/input/TextArea";

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

const CreateOrder = () => {
  const [loader, setLoader] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [orderedDate, setOrderedDate] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);

  const orderHandler = async (placement) => {
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
        "/order/create",
        {
          orderId,
          orderDetails,
          orderedDate,
          status,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        notification.info({
          message: `Notification`,
          description: "Successfully Added the Order details 😘",
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

  const onChangeDate = (type) => {
    setOrderedDate(type);
  };

  return (
    <>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <div className=" mt-20 -translate-x-48 ml-16">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => orderHandler("top")}
          >
            <center>
              {error && <span style={{ color: "red" }}>{error}</span>}
            </center>
            <Form.Item
              name="orderId"
              label="Order ID"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{ width: "175%" }}
                placeholder="Enter Order ID"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please Enter Order ID ex: OM90097">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="orderDetails"
              label="Order Details"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                style={{ width: 450 }}
                placeholder="Enter order details"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please Enter Product Name">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="orderedDate"
              label="Ordered Date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: 200 }} onChange={onChangeDate} />
            </Form.Item>

            <Form.Item
              name="status"
              label="Order Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Order Status"
                style={{ width: "175%" }}
                onChange={(e) => setStatus(e)}
              >
                <Option value="confirmed">Confirmed</Option>
                <Option value="rejected">Rejected</Option>
              </Select>
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

export default CreateOrder;
