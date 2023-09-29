import React from "react";
import { Button, Carousel, Dropdown, Space } from "antd";
import style from "./Navbar.module.css";
import {
  LoginOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import imageUrl from "../../img/logo.webp";

import imageUrl1 from "../../img/banner1.jpg";
import imageUrl2 from "../../img/banner2.jpg";
import imageUrl3 from "../../img/banner3.jpg";
import imageUrl4 from "../../img/banner4.jpg";
import imageUrl5 from "../../img/banner5.jpg";
import imageUrl6 from "../../img/banner6.jpg";

import BgCF1 from '../../img/background_img1.webp'
import BgCF2 from '../../img/bg2.webp'
import BgCF3 from '../../img/bg3.webp'
import BgCF4 from '../../img/bg4.webp'
import BgCF5 from '../../img/bg5.webp'


import Search from "antd/es/input/Search";
import Card from "../Home/Card";
import CardFavorite from "./CardFavorite";
import Footer from "../../Footer/Footer";
import "animate.css";

// autoplay autoplaySpeed={5000}
const Home = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <div style={{ height: "5000px" }}>
      <div style={{ position: "relative" }}>
        <Carousel
          style={{ cursor: "pointer", position: "relative" }}
          dots
          autoplay autoplaySpeed={3000}
          draggable
        >
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://tindep.com/wp-content/uploads/2019/10/hinh-nen-1920-1080.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://tophinhanhdep.com/wp-content/uploads/2021/10/HD-Mountain-Wallpapers.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://tindep.com/wp-content/uploads/2019/10/hinh-nen-1920-1080-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src="https://img1.kienthucvui.vn/uploads/2022/01/15/hinh-anh-thien-nhien-can-nha-go-giua-con-song_094858391.jpg"
              alt=""
            />
          </div>
        </Carousel>

        <div className={style.Navbar}>
          <div className={style.Navbar_header}>
            <div>
              <PhoneOutlined className={style.Reverse} />
              <span>0378936624</span>
              <MailOutlined style={{ marginLeft: "30px" }} />
              <span>nguyennghiep1320@gmail.com</span>
            </div>

            <div>
              <LoginOutlined /> <span>Đăng nhập</span>
              <UserAddOutlined style={{ marginLeft: "30px" }} />
              <span>Đăng ký</span>
            </div>
          </div>

          <div className={style.Navbar_mid}>
            <div style={{ width: "175px" }}>
              <img style={{ maxWidth: "100%" }} src={imageUrl} alt="logo" />
            </div>

            <div>
              <Search
                placeholder="Tìm kiếm tại đây..."
                allowClear
                bordered={true}
                // enterButton={<button style={{ border: 'none' }}>search</button>}
                enterButton={
                  <Button
                    type="submit"
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      height: "38px",
                    }}
                  >
                    <SearchOutlined style={{ fontSize: "18px" }} />
                  </Button>
                }
                style={{
                  width: "420px",
                  marginLeft: "-20px",
                  border: "none",
                  height: "35px",
                  backgroundColor: "transparent",
                }}
              />
            </div>

            <div>
              <PhoneOutlined
                style={{
                  border: "2px solid yellow",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#91caff",
                  marginRight: "10px",
                }}
                className={style.Reverse}
              />
              <span>0378936624</span>
            </div>
          </div>

          <div className={style.Navbar_bottom}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                lineHeight: "50px",
                justifyContent: "space-around",
                backgroundColor: "#00000033",
              }}
            >
              <li style={{ width: "300px", textAlign: "center" }}>Trang chủ</li>
              <li
                style={{
                  width: "300px",
                  textAlign: "center",
                  borderLeft: "2px solid gray",
                  borderRight: "2px solid gray",
                }}
              >
                Giới thiệu
              </li>
              <li
                style={{
                  width: "300px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Button className={style.Dropdown_Tour}>
                  Tour trong nước
                  <div className={style.dropdown}>
                    <div className={style.local_1}>
                      <b>MIỀN BẮC</b>
                      <p>Du lịch Hà Nội</p>
                      <p>Du lịch Hạ Long</p>
                      <p>Du lịch Hải Phòng</p>
                    </div>

                    <div className={style.local_1}>
                      <b>MIỀN TRUNG</b>
                      <p>Du lịch Quảng Bình</p>
                      <p>Du lịch Huế</p>
                      <p>Du lịch Đà Nẵng</p>
                    </div>

                    <div className={style.local_1}>
                      <b>MIỀN NAM</b>
                      <p>Du lịch Phú Quốc</p>
                      <p>Du lịch Côn Đảo</p>
                      <p>Du lịch Vũng Tàu</p>
                    </div>
                  </div>
                </Button>
              </li>
              <li
                style={{
                  width: "300px",
                  textAlign: "center",
                  borderLeft: "2px solid gray",
                  borderRight: "2px solid gray",
                }}
              >
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomLeft"
                >
                  <Button style={{ fontSize: "16px" }}>Tour nước ngoài</Button>
                </Dropdown>
              </li>
              <li style={{ width: "300px", textAlign: "center" }}>Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={style.Content}>
        <div className={style.Content_header}>
          <h1>
            Tour <span style={{ color: "#1ba0e2" }}>Mới Nhất</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Hệ thống đặt Tour hàng đầu Việt Nam. Hơn 300 tours du lịch ở Việt
            Nam và Quốc tế
          </p>
        </div>

        <div className={style.Card_title}>
          <Card imgSrc={imageUrl1} />
          <Card imgSrc={imageUrl2} />
          <Card imgSrc={imageUrl3} />
        </div>

        <div className={style.Card_title}>
          <Card imgSrc={imageUrl4} />
          <Card imgSrc={imageUrl5} />
          <Card imgSrc={imageUrl6} />
        </div>
      </div>

      <div className={style.Content_2}>
        <div className={style.Content_header}>
          <h1>
            Tour <span style={{ color: "#1ba0e2" }}>Trong Nước</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Tour du lịch Trong nước tại Ant Du lịch. Hành hương đầu xuân - Tận
            hưởng bản sắc Việt.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            <p className={style.Active}>Miền Bắc</p>
            <p style={{ margin: "0 20px" }}>Miền Trung</p>
            <p>Miền Nam</p>
          </div>
        </div>

        <div className={style.Card_title_2}>
          <Card imgSrc={imageUrl1} />
          <Card imgSrc={imageUrl2} />
          <Card imgSrc={imageUrl3} />
        </div>
      </div>

      <div className={style.Content_3}>
        <div className={style.Content_header}>
          <h1>
            Tour <span style={{ color: "#1ba0e2" }}>Nước Ngoài</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Tour du lịch Nước ngoài tại Ant Du lịch. Du lịch 5 châu - Trải
            nghiệm sắc xuân thế giới
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            <p className={style.Active}>Du lịch Châu Á</p>
            <p style={{ margin: "0 20px" }}>Du lịch Châu Âu</p>
            <p style={{ marginRight: "20px" }}>Du lịch Châu Úc</p>
            <p>Du lịch Châu Mỹ</p>
          </div>
        </div>

        <div className={style.Card_title_2}>
          <Card imgSrc={imageUrl1} />
          <Card imgSrc={imageUrl2} />
          <Card imgSrc={imageUrl3} />
        </div>
      </div>

      <div className={style.Content_4}>
        <div className={style.Content_header}>
          <h1>
            Điểm đến <span style={{ color: "#1ba0e2" }}>Ưu Thích</span>
          </h1>
          <div>
            <div className={style.tl_1}></div>
            <div className={style.tl_2}></div>
            <div className={style.tl_1}></div>
          </div>
          <p>
            Những địa điểm du lịch hot nhất dịp Tết ở Việt Nam. Tham khảo những
            điểm du lịch đặc sắc nhất từ Bắc tới Nam cùng với chúng tôi.
          </p>
        </div>
        
        <div className={style.Card_favorite}>
            <CardFavorite SrcImg={BgCF1} title="Phú Quốc"/>
            <CardFavorite SrcImg={BgCF2} title="Châu Á"/>
            <CardFavorite SrcImg={BgCF3} title="Châu Âu"/>
            <CardFavorite SrcImg={BgCF4} title="Châu Mỹ"/>
            <CardFavorite SrcImg={BgCF5} title="Châu Phi"/>
        </div>

        <Footer/>
      </div>
    </div>
  );
};
export default Home;
