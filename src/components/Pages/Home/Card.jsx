import React from "react";
import style from "./Navbar.module.css";
import SrcImg from "../../img/banner1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarWeek,
  faPlane,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
export default function Card(props) {
  // sử dụng props truyền src img
  const { imgSrc } = props;
  return (
    <div>
      <div className={style.Container}>
        <div className={style.Img}>
          <img style={{transition: "transform 0.5s linear"}} src={imgSrc} alt="banner1" />
        </div>

        <div className={style.Text}>
          <div className={style.Text_title}>
            <b>
              Du lịch Mỹ [Los Angeles - Las Vegas - Universal Studios Hollywood]
              [2 đêm KS 5* Bellagio, Las...]
            </b>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <b style={{ color: "#1ba0e2" }}>49.000.000đ</b>
            <div>
              <FontAwesomeIcon
                icon={faTrain}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <FontAwesomeIcon icon={faPlane} size="lg" />
            </div>
          </div>
          <p style={{ textDecoration: "line-through" }}>54.000.000đ</p>
          <p>
            {" "}
            <FontAwesomeIcon
              style={{ marginRight: "8px" }}
              icon={faCalendarDays}
            />
            Khởi hành: Thứ 2 - 7 hằng tuần
          </p>
          <p>
            {" "}
            <FontAwesomeIcon
              style={{ marginRight: "8px" }}
              icon={faCalendarWeek}
            />
            Thời gian: 6 ngày 5 đêm
          </p>
        </div>
      </div>
    </div>
  );
}
