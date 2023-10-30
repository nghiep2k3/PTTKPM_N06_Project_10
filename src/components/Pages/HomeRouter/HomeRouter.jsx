import React, { useEffect, useState } from "react";
import style from "./HomeRouter.module.css";
import { Button, Dropdown, Space } from "antd";
import {
  LoginOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import imageUrl from "../../img/logo.webp";
import Search from "antd/es/input/Search";
import Footer from "../../Footer/Footer";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeRouter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const items = [
    {
      key: "1",
      label: <Link to="/TourAsia">Du lịch Châu Á</Link>,
    },
    {
      key: "2",
      label: <Link to="/TourEurope">Du lịch Châu Âu</Link>,
    },
    {
      key: "3",
      label: <Link to="/TourAutralia">Du lịch Châu Úc</Link>,
    },
    {
      key: "4",
      label: <Link to="/TourAmericars">Du lịch Châu Mỹ</Link>,
    },
  ];

  const [tours, setTours] = useState([]);

  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    }
  }, []);
  return (
    <div>
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: 200,
            }}
          >
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

            <div style={{ position: "relative" }}>
              <div
                style={{
                  background: "red",
                  textAlign: "center",
                  borderRadius: "50%",
                  width: 20,
                  height: 24,
                  position: "absolute",
                  top: -14,
                  right: -8,
                }}
              >
                {tours.length}
              </div>
              <Link to="/CartItem">
                <FontAwesomeIcon style={{color: 'white'}} icon={faCartShopping} size="2xl" />
              </Link>
              
            </div>
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
            <Link to="/">
              <li style={{ width: "300px", textAlign: "center" }}>Trang chủ</li>
            </Link>
            <Link to="/Page">
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
            </Link>
            <li
              className={style.Dropdown_Tour2}
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
                    <p>
                      <Link to="/Hanoi">Du lịch Hà Nội</Link>
                    </p>
                    <p>
                      <Link to="/HaLong">Du lịch Hạ Long</Link>
                    </p>
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
            <Link to="/TourOut">
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
            </Link>
            <Link to="/Contact">
              <li style={{ width: "300px", textAlign: "center" }}>Liên hệ</li>
            </Link>

            <Link to="/TestAntd">
              <li style={{ width: "150px", textAlign: "center" }}>Dev Mode</li>
            </Link>
          </ul>
        </div>
      </div>
      <Content
        style={{
          margin: "10px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <Outlet></Outlet>
      </Content>
      <Footer />
    </div>
  );
}
