import React from "react";
import { Footer  } from "antd/lib/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const FooterComp = () => {
  return (
    <div style={{}}>
      <Footer
        style={{
          backgroundColor: "#6292f5",
          borderTop: "1px solid #e8e8e8",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          display: "flex",
          margin: "auto",
          color: "white"
        }}
      >
        <div style={{ margin: "auto", textAlign: "center", fontSize: "small" }}>
          <label>
            <Avatar style={{marginRight: "2px"}} size="small" icon={<UserOutlined />} />
            Darsh Soni
          </label>
          <h1>{""}</h1>
          <label>
            <Avatar style={{marginRight: "2px"}} size="small" icon={<UserOutlined />} />
            Vishal Chaudhary
          </label>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComp;
