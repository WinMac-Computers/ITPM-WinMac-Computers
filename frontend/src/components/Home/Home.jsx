import React from "react";
import { Carousel, Card, Image, Button } from "antd";

import "antd/dist/antd.css";
import "./Home.css";

import img1 from "../../assets/About/bg.jpg";
import processor from "../../assets/Home/processor.jpg";
import motherbord from "../../assets/Home/motherbord.jpg";
import monitor from "../../assets/Home/monitor.jpg";
import casing from "../../assets/Home/casing.jpg";
import storage from "../../assets/Home/storage.jpg";
import graphic from "../../assets/Home/graphics.jpg";

const Home = () => {
  const contentStyle = {
    height: "400vh",
    lineHeight: "100px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <section>
        {" "}
        <Carousel autoplay>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img1} />
          </div>
        </Carousel>
      </section>
      <section className=" bg-gray-800 block mx-auto">
        <center>
          <div className="container">
            <div className=" inline-block columns-2  my-20 gap-24">
              <div>
                <Image style={{ width: 400 }} src={processor} preview={false} />
                <div className="top-1/2 w-full text-center text-4xl">
                  <Button type="primary" size="large" block>
                  <div className=" font-semibold text-xl">PROCESSOR</div>
                  </Button>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image
                  style={{ width: 400 }}
                  src={motherbord}
                  preview={false}
                />
                <div className="top-1/2 w-full text-center text-4xl">
                  <Button type="primary" size="large" block>
                  <div className=" font-semibold text-xl">MOTHERBORDS</div>
                  </Button>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image style={{ width: 400 }} src={graphic} preview={false} />
                <div className="top-1/2 w-full text-center text-4xl">
                  <Button type="primary" size="large" block>
                  <div className=" font-semibold text-xl">GRAPHIC CARDS</div>
                  </Button>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image style={{ width: 400 }} src={monitor} preview={false} />
                <div className="top-1/2 w-full text-center text-4xl">
                  <Button type="primary" size="large" block>
                  <div className=" font-semibold text-xl">MONITORS</div>
                  </Button>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image style={{ width: 400 }} src={storage} preview={false} />
                <div className="top-1/2 w-full text-center text-4xl">
                  <Button type="primary" size="large" block>
                  <div className=" font-semibold text-xl">STORAGE DRIVES</div>
                  </Button>
                </div>
              </div>
              <br />
              <br />
              <div>
                <Image style={{ width: 400 }} src={casing} preview={false} />
                <div className="top-1/2 w-full text-center text-4xl">
                  <Button type="primary" size="large" block>
                    <div className=" font-semibold text-xl">CASING</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </section>
    </>
  );
};

export default Home;
