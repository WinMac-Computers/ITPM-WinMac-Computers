import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
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
import TextArea from "antd/lib/input/TextArea";
import {
  FileDoneOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const layout = {
  labelCol: {
    span: 8,
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

const { Option } = Select;

const EditOrder = () => {
  const [loader, setLoader] = useState(false);
  const [orderId, setorderId] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [orderedDate, setOrderedDate] = useState("");
  const [status, setStatus] = useState("");

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("_id");
  const history = useNavigate();

  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
    (async () => {
      await axios
        .get(`/order/get/${id}`)
        .then((res) => {
          form.setFieldsValue({
            orderId: res.data.orderId,
            orderDetails: res.data.orderDetails,
            orderedDate: res.data.orderedDate,
            status: res.data.status,
          });
          setorderId(res.data.orderId);
          setOrderDetails(res.data.orderDetails);
          setOrderedDate(res.data.orderedDate);
          setStatus(res.data.status);
        })
        .catch(() => null);
    })();
  }, []);

  const orderHandlerUpdate = async (placement) => {
    // create handler for saving data to the db
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
        `/order/update/${id}`,
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
          description: "Successfully updated the order details 😘",
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
        <div className=" mt-10">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => orderHandlerUpdate("top")}
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
                style={{ width: "100%" }}
                placeholder="enter your order id"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Enter Order ID ex: OM001">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                value={orderId}
                onChange={(e) => setorderId(e.target.value)}
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
                style={{ width: "100%" }}
                placeholder="enter your order details"
                prefix={<FileDoneOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Please provide Order details">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                maxLength={100}
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Ordered Date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                defaultValue={moment(Date(orderedDate))}
                style={{ width: 200 }}
                onChange={onChangeDate}
                required
              />
            </Form.Item>

            <Form.Item className=" mr-5"
              name="status"
              label="Order Status"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select className=" ml-2"
                placeholder="Select Order Status"
                style={{ width: "150%" }}
                onChange={(e) => setStatus(e)}
              >
                <Option value="confirmed">Confirmed</Option>
                <Option value="rejected">Rejected</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <Button type="primary" htmlType="submit">
                {loading ? (
                  <>
                    <Spin indicator={<LoadingOutlined />} /> Updating in
                    Progess...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
            </Form.Item>
          </Form>
        </div>
      )}
    </>
  );
};

export default EditOrder;
