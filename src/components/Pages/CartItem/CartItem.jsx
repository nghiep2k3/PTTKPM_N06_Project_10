import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.css";
import { message } from "antd";

export default function CartItem() {
  const [tours, setTours] = useState([]);

  const NameTitle = "Giỏ hàng";
  const [TotalMoneny, setTotalMoney] = useState("0");
  document.title = NameTitle;


  useEffect(() => {
    // Get the 'tours' object from Local Storage
    const toursStr = localStorage.getItem("tours");

    // Parse the string to convert it back to an object
    const tours = JSON.parse(toursStr);

    // Initialize a variable to store the total price
    let totalPrice = 0;

    // Loop through the 'price' property of each tour, remove non-numeric characters, and add it to the total price
    for (const tour of tours) {
      const priceWithoutSpecialChars = tour.price.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      totalPrice += parseInt(priceWithoutSpecialChars); // Convert the string to a number and add it to the total
    }

    // Format the total price with the currency symbol ₫
    const formattedPrice = totalPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    setTotalMoney(formattedPrice);
  }, []);

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
    message.success("Xóa thành công");
    window.location.reload();
  };

  if (tours.length <= 0) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Bạn chưa có đơn hàng nào</h1>
        <div style={{ textAlign: "center" }}>
          <Link to="/">
            <button className={styles.ButtonContinue}>Tiếp tục mua hàng</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontSize: 15, fontWeight: "bold" }}>
        <Link to="/">Trang chủ</Link> &gt;{" "}
        <span style={{ color: "#1ba0e2" }}>Du lịch Hà Nội</span>
      </div>

      <div>
        <span style={{ fontSize: 18, fontWeight: "bold" }}>Giỏ hàng</span>
        <span>( {tours.length} tour )</span>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {tours.map((tour) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", width: 800 }}>
                  <div style={{ width: 240 }}>
                    <img
                      style={{ maxWidth: "100%" }}
                      src={`${tour.avatar}`}
                      alt=""
                    />
                  </div>

                  <div style={{ marginLeft: 40 }}>
                    <h3>{tour.title}</h3>
                    <p style={{ fontSize: 16, margin: "4px 0" }}>
                      Mã đơn hàng: {tour.id}
                    </p>
                    <p style={{ fontSize: 16, margin: "4px 0" }}>
                      Số vé: {tour.ticket}
                    </p>
                    <p style={{ fontSize: 16, margin: "4px 0" }}>
                      Tổng tiền: {tour.price}
                    </p>
                    <p style={{ fontSize: 16, margin: "4px 0" }}>Người lớn</p>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "red",
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                      onClick={() => handleDeleteTour(tour.id)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
              Tạm tính: {TotalMoneny}
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
                {TotalMoneny}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to="/Payments"><button  className={styles.ButtonPay}>Thanh toán ngay</button></Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className={styles.ButtonContinue}>
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div>

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
