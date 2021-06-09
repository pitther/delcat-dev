import React from "react";
import Button from "antd-button-color";
import { Skeleton, Card, Layout, Rate, Typography, Space } from "antd";
import { MailOutlined, CarOutlined, RightOutlined } from "@ant-design/icons";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const { Text, Link } = Typography;

const CompanyCardItemSkeleton = () => {
  return (
    <Card
      className="company-card"
      style={{ width: 250, height: 300 }}
      cover={
        <img
          alt="example"
          src="https://i2.wp.com/itc.ua/wp-content/uploads/2020/01/ukrposhta-1.png"
        />
      }
      actions={[
        <div
          style={{
            fontFamily: "sans-serif",
            backgroundColor: "",
            padding: "10px",
            cursor: "default",
            fontSize: "18px",
          }}
        ></div>,
        <Skeleton.Button active="false" size="big" shape="default" />,
      ]}
    >
      <Meta title={[]} description={[]} />
    </Card>
  );
};

export default CompanyCardItemSkeleton;
