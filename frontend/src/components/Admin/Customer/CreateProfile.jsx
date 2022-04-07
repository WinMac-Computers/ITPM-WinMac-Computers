import React, { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; //for toast messages
import {Form,Input,InputNumber,Cascader,Select,Row,Col,Checkbox,Button,AutoComplete,} from "antd";
import { useParams } from "react-router-dom";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateProfile = () => {

    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [address, setaddress] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [image, setimage] = useState("");
    const [gender, setgender] = useState("");
    const [loading, setLoading] = useState(false); //additional

    const { id } = useParams();

    useEffect(() => {
      //component mount
      (async () => {
        await fetch(`/customer/get/${id}`)
          .then((res) => res.json())
          .then((json) => {
            setphoneNumber(json.phoneNumber);
            setemail(json.email);
          })
          .catch((err) => null);
      })();
    }, []);

    const createHandler = async (e) => {
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
          await axios.post(
            //use axios API
            "/customer/create",
            {
                name,
                age,
                address,
                phoneNumber,
                email,
                password,
                image,
                gender,
            },
            config
          );
    
          setTimeout(() => {
            //set a time out
            setLoading(false);
            toast("Success!  😘");
            setname("");
            setage("");
            setaddress("");
            setphoneNumber("");
            setemail("");
            setpassword("");
            setimage("");
            setgender("");
          }, 5000); //5seconds timeout
        } catch (error) {
          alert(error?.response?.data?.error);
          setname("");
          setage("");
          setaddress("");
          setphoneNumber("");
          setemail("");
          setpassword("");
          setimage("");
          setgender("");
          setLoading(false);
        }
      };
    

    const onReset = () => {
        form.resetFields();
      };

  const [fileList, setFileList] = useState([
  
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="94">+94</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

 

  return (
    <div  className=" bg-gray-300 shadow-2xl w-1/2 h-1/2 ml-96 mt-20">
      {" "}
      <div className=" mt-10">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="nickname"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          tooltip="Whats your address?"
          rules={[
            {
              required: true,
              message: "Please input your address!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="number"
          label="Age"
          tooltip="Enter your age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <center>
          <ImgCrop rotate>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </ImgCrop>
        </center>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default CreateProfile;
