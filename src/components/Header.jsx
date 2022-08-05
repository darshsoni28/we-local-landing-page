import React from "react";
import { PageHeader } from 'antd';

const Header = () => {
  return (
    <div style={{color: "white"}}>
      <PageHeader
        className="site-page-header"
        title="WeLocal"
        textColor="white"
      />
    </div>
  );
};

export default Header;
