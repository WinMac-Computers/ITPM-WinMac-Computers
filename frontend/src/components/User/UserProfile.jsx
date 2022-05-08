import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input, Spin, notification } from "antd";
import { FileDoneOutlined, ContactsOutlined } from "@ant-design/icons";

import axios from "axios";

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

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loader, setLoader] = useState(false);

  const id = localStorage.getItem("id");

  useEffect(() => {
    (async () => {
      await axios
        .get(`/api/auth/get/${id}`)
        .then((res) => {
          form.setFieldsValue({
            username: res.data.username,
            email: res.data.email,
          });
          setUsername(res.data.username);
          setEmail(res.data.email);
        })
        .catch((err) => alert(err));
    })();
  }, []);

  const updateHandler = async (placement) => {
    // create handler for saving data to the db

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/api/auth/update/${id}`,
        {
          username,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setConfirmLoading(true);
        notification.info({
          message: `Notification`,
          description: "Successfully Update details..",
          placement: "top",
        });
        setVisible(false);
      }, 2000); //5seconds timeout
    } catch (error) {
      notification.error({
        message: `Notification`,
        description: error.response.data.error,
        placement,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 2000);
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Button
        className="w-20"
        onClick={() =>
          showModal(
            `/user-dashboard/${localStorage.getItem("username")}/profile/${id}`
          )
        }
      >
        Profile
      </Button>

      <Modal
        style={{ width: 500 }}
        title="My Account Details"
        visible={visible}
        onOk={() => {
          updateHandler();
          handleOk();
        }}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {loader === false ? (
          <center>
            <Spin style={{ marginTop: "150px" }} />
          </center>
        ) : (
          <div className=" mt-20 -translate-x-36">
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={() => updateHandler("top")}
            >
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{ width: "140%" }}
                  placeholder="Enter Username"
                  prefix={<FileDoneOutlined className="site-form-item-icon" />}
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{ width: "155%" }}
                  prefix={<FileDoneOutlined className="site-form-item-icon" />}
                  disabled
                  type="email"
                />
              </Form.Item>
            </Form>
          </div>
        )}
      </Modal>
    </>
  );
};

export default UserProfile;
