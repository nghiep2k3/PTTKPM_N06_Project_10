import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.css";

export default function CartItem() {
  const [tours, setTours] = useState([]);

  // Lấy danh sách tour từ Local Storage khi tải ứng dụng
  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    }
  }, []);

  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    localStorage.setItem("tours", JSON.stringify(updatedTours));
  };
  return (
    <div>
      <div style={{ fontSize: 15, fontWeight: "bold" }}>
        <Link to="/">Trang chủ</Link> &gt;{" "}
        <span style={{ color: "#1ba0e2" }}>Du lịch Hà Nội</span>
      </div>

      <div>
        <span style={{ fontSize: 18, fontWeight: "bold" }}>Giỏ hàng</span>
        <span>( {tours.length} tour )</span>

        {tours.map((tour) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", width: 800 }}>
              <div style={{ width: 200 }}>
                <img
                  style={{ maxWidth: "100%" }}
                  src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/53916-1315037279.jpg?v=1529554090113"
                  alt=""
                />
              </div>

              <div style={{ marginLeft: 40 }}>
                <h3>{tour.title}</h3>
                <p>Mã đơn hàng: {tour.id}</p>
                <p>Tổng tiền: {tour.price}</p>
                <p>Người lớn</p>
                <button onClick={() => handleDeleteTour(tour.id)}>Xóa</button>
              </div>
            </div>

            <div
              style={{
                border: "2px solid #1ba0e2",
                height: 190,
                borderRadius: 12,
                padding: "10px 15px",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: 16 }}>
                Tạm tính: 85.000.000đ
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  borderTop: "2px solid gray",
                  margin: "10px 0",
                  paddingTop: 10,
                }}
              >
                Thành tiền:{" "}
                <span
                  style={{ color: "#1ba0e2", fontWeight: "bold", fontSize: 20 }}
                >
                  85.000.000đ
                </span>
              </div>
              <div>
                <button className={styles.ButtonPay}>Thanh toán ngay</button>
              </div>
              <div>
                <button className={styles.ButtonContinue}>
                  Tiếp tục mua hàng
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", width: 800 }}>
            <div style={{ width: 200 }}>
              <img
                style={{ maxWidth: "100%" }}
                src="https://bizweb.dktcdn.net/thumb/grande/100/299/077/products/53916-1315037279.jpg?v=1529554090113"
                alt=""
              />
            </div>

            <div style={{ marginLeft: 40 }}>
              <h3>Du lịch Châu Âu Pháp - Thụy Sỹ - Núi Jungfrau - Ý</h3>
              <p>Mã đơn hàng: </p>
              <p>Tổng tiền: 85.000.000đ</p>
              <p>Người lớn</p>
              <button>Xóa</button>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #1ba0e2",
              height: 190,
              borderRadius: 12,
              padding: "10px 15px",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: 16 }}>
              Tạm tính: 85.000.000đ
            </div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: 16,
                borderTop: "2px solid gray",
                margin: "10px 0",
                paddingTop: 10,
              }}
            >
              Thành tiền:{" "}
              <span
                style={{ color: "#1ba0e2", fontWeight: "bold", fontSize: 20 }}
              >
                85.000.000đ
              </span>
            </div>
            <div>
              <button className={styles.ButtonPay}>Thanh toán ngay</button>
            </div>
            <div>
              <button className={styles.ButtonContinue}>
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
