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
      <section className="section3">
        <div className=" font-semibold text-4xl text-center  mt-10">
          HAPPY CUSTOMERS
        </div>
        <div class="testimonial">
          <div class="card">
            <div class="layer"></div>
            <div class="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div class="image">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"
                  alt="avatar"
                />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br /> <span>Web Designer</span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="layer"></div>
            <div class="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div class="image">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"
                  alt="avatar"
                />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br /> <span>Graphic Designer</span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="layer"></div>
            <div class="content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div class="image">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"
                  alt="avatar"
                />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br /> <span>Product Designer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
