import React from "react";
import { Link } from "react-router-dom";
import style from "./TourDomestic.module.css";
import { Select, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import CardTourMini from "../../../../Component/CardTourMini/CardTourMini";


export default function HaNoi() {
  const handleChange = (value) => {
    console.log(`Mức giá đã chọn ${value}`);
  };

  return (
    <div>
      <div style={{fontSize: 24, fontWeight: 'bold', margin: '0 114px'}}>
        <Link to="/">Trang chủ</Link> &gt;{" "}
        <span style={{ color: "#1ba0e2" }}>Du lịch Hà Nội</span>
      </div>
      <div
        className={style.Before}
        style={{
          textAlign: "center",
          color: "#1ba0e2",
          fontSize: 25,
          position: "relative",
          fontWeight: 500,
        }}
      >
        Du lịch Hà Nội
      </div>

      <div
        style={{
          margin: "20px 80px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Select
          defaultValue="Theo mức giá"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "2000000",
              label: "Dưới 2.000.000đ",
            },
            {
              value: "2000000 - 4000000",
              label: "2.000.000đ - 4.000.000đ",
            },
            {
              value: "4000.000 - 6000000",
              label: "4.000.000đ - 6.000.000đ",
            },
            {
              value: "6000000 - 8000000",
              label: "6.000.000đ - 8.000.000đ",
            },
            {
              value: "8000000đ - 10000000",
              label: "8.000.000đ - 10.000.0000đ",
            },
            {
              value: "10000000",
              label: "Trên 10.000.000đ",
            },
          ]}
        />

        <Select
          defaultValue="Điểm đi"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Hà Nội",
              label: "Hà Nội",
            },
            {
              value: "Hồ Chí Minh",
              label: "Hồ Chí Minh",
            },
          ]}
        />

        <Select
          defaultValue="Điểm đến"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Cao Bằng",
              label: "Cao Bằng",
            },
            {
              value: "Hà Nội",
              label: "Hà Nội",
            },
            {
              value: "Hải Dương",
              label: "Hải Dương",
            },
          ]}
        />

        <Select
          defaultValue="Theo đánh giá"
          style={{
            width: 250,
          }}
          onChange={handleChange}
          options={[
            {
              value: "1",
              label: <StarFilled style={{ color: "#FFC107" }} />,
            },
            {
              value: "2",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
            {
              value: "3",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
            {
              value: "4",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
            {
              value: "5",
              label: (
                <div>
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                  <StarFilled style={{ color: "#FFC107" }} />
                </div>
              ),
            },
          ]}
        />
      </div>

      <div style={{margin: "20px 80px", display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <CardTourMini/>
          <CardTourMini/>
          <CardTourMini/>
          <CardTourMini/>
      </div>
    </div>
  );
}
