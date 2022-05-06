import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Spin,
  Tooltip,
  notification,
  DatePicker,
} from "antd";
import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";

import axios from "axios";
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

const Edit = () => {
  const [loader, setLoader] = useState(false);
  const [itemDetails, setItemDetails] = useState("");
  const [qty, setQty] = useState("");
  const [payDate, setPayDate] = useState("");
  const [netPrice, setNetPrice] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [error, setError] = useState(false);

  const search = window.location.search;

  const param = new URLSearchParams(search);

  const idEdit = param.get("id");

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, marginBottom: "2px" }} spin />
  );

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
    (async () => {
      await axios
        .get(`/payment/get/${idEdit}`)
        .then((res) => {
          setItemDetails(res.data.itemDetails);
          setQty(res.data.qty);
          setPayDate(res.data.payDate);
          setNetPrice(res.data.netPrice);
        })
        .catch(() => null);
    })();
  }, []);

  const paymentHandlerUpdate = async (placement) => {
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
        `/payment/update/${idEdit}`,
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
        notification.info({
          message: `Notification`,
          description: "Successfully updated the Payment Details 😘",
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

  return (
    <>
      {loader === false ? (
        <center>
          <Spin style={{ marginTop: "200px" }} />
        </center>
      ) : (
        <div className="mt-10">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={() => paymentHandlerUpdate("top")}
          >
            <Form.Item
              name="itemDetails"
              label="Item Details"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={itemDetails}
            >
              <Input
                style={{ width: "150%" }}
                placeholder="Item Details"
                suffix={
                  <Tooltip title="Item Details ex: WD HardDisk">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                value={itemDetails}
                onChange={(e) => setItemDetails(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="qty"
              label="Qty"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={qty}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Quantity"
                suffix={
                  <Tooltip title="Quantity">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
                showCount
                maxLength={100}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                type="number"
              />
            </Form.Item>

            <Form.Item
              name="payDate"
              label="Pay Date"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={moment(payDate)}
            >
              <DatePicker
                style={{ width: "100%" }}
                placeholder="PayDate"
                onChange={(e) => setPayDate(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="netPrice"
              label="Net Price (Rs.)"
              rules={[
                {
                  required: true,
                },
              ]}
              initialValue={netPrice}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Net Price"
                suffix={[
                  <Tooltip title="Net Price ex:rs.36000">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>,
                ]}
                showCount
                value={netPrice}
                onChange={(e) => setNetPrice(e.target.value)}
                type="number"
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;
              <Button type="primary" htmlType="submit">
                {loading ? (
                  <>
                    <Spin indicator={antIcon} /> Updating in Progess...
                  </>
                ) : (
                  "Update"
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

export default Edit;
