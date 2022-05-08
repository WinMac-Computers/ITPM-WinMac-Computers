import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Button, notification, message } from "antd";
import axios from "axios";

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const history = useNavigate();

  useEffect(() => {
    (async () => {
      await fetch("/product/")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          console.log(json);
          setLoader(!loader);
        });
    })();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/product/delete/${id}`);
      notification.info({
        title: "Delete Form",
        message: "Successfully Delete the product",
        placement: "top",
      });
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const columns = [
    {
      title: "Prodcut Number",
      dataIndex: "productNumber",
      sorter: (a, b) => a.productNumber.length - b.productNumber.length,
      sortDirections: ["descend"],
      render: (record) => (
        <a
          onClick={() =>
            history(
              `/admin-dashbord/${localStorage.getItem(
                "username"
              )}?_optProduct=true&id=${record._id}`
            )
          }
        >
          {record}
        </a>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Product Category",
      dataIndex: "productCatergory",
      sorter: (a, b) => a.productCatergory.length - b.productCatergory.length,
      filters: [
        {
          text: "Laptop",
          value: "laptop",
        },
        {
          text: "Monitor",
          value: "monitor",
        },
        {
          text: "Graphic Card",
          value: "graphic card",
        },
        {
          text: "Memory",
          value: "memory",
        },
        {
          text: "Power Supply & UPS",
          value: "power supply & ups",
        },
        {
          text: "Storage Drive",
          value: "storage drive",
        },
        {
          text: "Cooling Fan",
          value: "cooling fan",
        },
        {
          text: "PC case",
          value: "pc case",
        },
        {
          text: "Keyboard & Mouse",
          value: "keyboard & mouse",
        },
        {
          text: "Headset & Speaker",
          value: "headset & speaker",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) =>
        record.productCatergory.toLowerCase().indexOf(value) === 0,
    },
    {
      title: "Product Price",
      dataIndex: "productPrice",
      sorter: (a, b) => a.productPrice.length - b.productPrice.length,
    },
    {
      title: "Product Quantity",
      dataIndex: "qty",
      sorter: (a, b) => a.qty.length - b.qty.length,
    },
    {
      title: "Action",
      render: (record) => (
        <div className="flex">
          <div>
            <Button
              style={{ background: "red", color: "white" }}
              onClick={() => deleteHandler(record._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ),
      width: 120,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      loading={loader}
      sticky
    />
  );
};

export default AllProducts;