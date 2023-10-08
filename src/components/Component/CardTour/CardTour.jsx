import React from "react";
import style from "./CardTour.module.css";
import {
  CarOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
export default function CardTour(props) {
  return (
    <div
      style={{
        marginTop: "45px",
        height: "max-content",
        position: "relative",
        background: "#eeeeff",
        width: 1110,
        borderRadius: '10px',
        overflow: 'hidden'
      }}
    >
      <div style={{ display: "flex" }}>
        <div className={style.CardTourImg}>
          <img
            src={props.imgSrc}
            alt=""
          />
        </div>

        <div>
          <h2 style={{ margin: "5px 10px" }}>{props.title}</h2>
          <p style={{ margin: "5px 10px" }}>
            Hành trình: Hồ Chí Minh - Singapore
          </p>
          <p>
            {" "}
            <CarOutlined style={{ fontSize: 20, margin: "5px 10px" }} />
            {props.vehicle}
          </p>
          <p>
            {" "}
            <CalendarOutlined style={{ fontSize: 20, margin: "5px 10px" }} />
            Thứ 2 hằng tuần
          </p>
          <p>
            <ClockCircleOutlined style={{ fontSize: 20, margin: "5px 10px" }} />
            4 ngày 3 đêm
          </p>
        </div>
      </div>

      <div className={style.DetailTour}>
        <div>
          <p>Giá từ</p>
          <p>{props.price}đ</p>
          <button>Chi tiết</button>
        </div>
      </div>
    </div>
  );
}
