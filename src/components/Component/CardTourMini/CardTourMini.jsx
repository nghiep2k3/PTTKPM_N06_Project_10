import React from "react";
import SrcImg from "../../img/banner1.jpg";
import style from "./CardTourMini.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarWeek,
  faPlane,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardTourMini() {
  return (
    <div>
      <Link to="/InfoTourHaNoi" style={{textDecoration: "none", color: 'black'}}>
        <div className={style.Container}>
          <div className={style.CardTourMiniImg}>
            <img
              src={SrcImg}
              style={{ transition: "transform 0.5s linear" }}
              alt=""
            />
          </div>

          <div style={{ margin: 8 }}>
            <b style={{ fontSize: 18 }}>
              Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long
            </b>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <b style={{ color: "#1ba0e2", fontSize: 18 }}>7.999.999đ</b>
              <div>
                <FontAwesomeIcon
                  icon={faTrain}
                  size="lg"
                  style={{ marginRight: "8px" }}
                />
                <FontAwesomeIcon icon={faPlane} size="lg" />
              </div>
            </div>
            <p style={{ textDecoration: "line-through" }}>10.000.000đ</p>
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
      </Link>
    </div>
  );
}
