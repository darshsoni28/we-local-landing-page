import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "auto",
  width: "100%",
  maxHeight: "700px",
  maxWidth: "900px",
  margin: "auto",
  lineHeight: "160px",
  textAlign: "center",
  boxShadow: "0px 2px 8px 0px black"//box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
};

const Slides = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const slideImages =
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";

  return (
    <div>
      <Carousel autoplay afterChange={onChange}>
        <div>
          <img style={contentStyle} src={slideImages} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={slideImages} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={slideImages} alt="" />
        </div>
        <div>
          <img style={contentStyle} src={slideImages} alt="" />
        </div>
      </Carousel>
      <div style={{marginLeft: "30px", marginRight: "30px", marginTop: "50px", marginBottom: "50px"}}>
        <p>
            
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Slides;
