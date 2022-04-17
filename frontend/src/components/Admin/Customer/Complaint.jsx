import React from "react";
import { Card } from "antd";
import "./Complaint.css";

const Complaint = () => {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
};

export default Complaint;
