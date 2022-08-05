import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Header from "./components/Header";
import Slides from "./components/Slides";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div style={{fontFamily: "Poppins, sans-serif"}}>
      <Header />
      <Slides />
      <Footer />
    </div>
  );
};

export default App;
