import React from "react";
import { Link } from "react-router-dom";

export default function CartItem() {
  return (
    <div>
      <div style={{ fontSize: 15, fontWeight: "bold" }}>
        <Link to="/">Trang chủ</Link> &gt;{" "}
        <span style={{ color: "#1ba0e2" }}>Du lịch Hà Nội</span>
      </div>

      <div>
        <span style={{ fontSize: 18, fontWeight: "bold" }}>Giỏ hàng</span>
        <span>( 1 tour )</span>
      </div>
    </div>
  );
}
