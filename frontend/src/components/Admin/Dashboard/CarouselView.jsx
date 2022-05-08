import React, { useState, useEffect } from "react";
import { Carousel, Spin } from "antd";
import "antd/dist/antd.css";

const contentStyle = {
  height: "570px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselView = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);
  return (
    <>
      <div className=" mt-24">
        <Carousel autoplay effect="fade">
          {loader === false && <Spin />}
          <div>
            <img
              src="https://i.ibb.co/nLtBwRD/pexels-designecologist-1779487.jpg"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/3cwCS60/pexels-fox-1038916.jpg"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              src="https://i.ibb.co/xCB7C4M/pexels-lee-campbell-115655.jpg"
              style={contentStyle}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselView;
