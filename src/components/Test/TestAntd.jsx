import React, { useEffect, useState } from "react";
import { Space, Spin } from "antd";
import { database } from "../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import CardItem from "../Pages/Home/Card";
import AComponent from "./A";
import BComponent from "./B";

export default function TestAntd() {
  const dbRef = ref(database);
  const [data, setData] = useState();

  // save object
  const [tours, setTours] = useState([]);

  // Lấy danh sách tour từ Local Storage khi tải ứng dụng
  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    }
  }, []);

  // Thêm một tour vào danh sách và lưu lại vào Local Storage
  const handleAddTour = () => {
    const CallTourCurrent = JSON.parse(localStorage.getItem("tours"));

    const newTour = {
      id: tours.length + 1,
      title: `Đây là Tour 2`,
    };

    if (CallTourCurrent) {
      // Kiểm tra nếu tour đã tồn tại dựa trên id hoặc các tiêu chí khác
      const isTourExists = CallTourCurrent.some((tour) => tour.title === newTour.title);
  
      if (isTourExists) {
        alert("Tour đã tồn tại!");
        return; // Không thêm tour mới nếu đã tồn tại
      }
    }

    const updatedTours = [...tours, newTour];
    setTours(updatedTours);
    localStorage.setItem("tours", JSON.stringify(updatedTours));
  };
  // Xóa
  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    localStorage.setItem("tours", JSON.stringify(updatedTours));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `TourNew`));
        if (snapshot.exists()) {
          setData(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("Không có dữ liệu");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 280,
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (tours <= 0) {
    return (
      <div>
        <button onClick={handleAddTour}>Thêm</button>
        <p>Không có tour </p>
      </div>
    );
  }

  return (
    <div>
      Test call api
      {/* <div style={{ display: "flex", justifyContent: "space-around", margin: '0 95px', flexWrap: 'wrap' }}>
        {Object.keys(data).map((item) => (
          <CardItem
            key={item}
            price={data[item]?.price}
            title={data[item]?.title}
            priceOld={data[item]?.price_old}
            imgSrc={data[item].SrcImg}
          />
        ))}
      </div> */}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h1>Thông tin Tour</h1>
          <button onClick={handleAddTour}>Thêm</button>
          <ul>
            {tours.map((tour) => (
              <li key={tour.id}>
                <p>Mã đơn hàng: {tour.id}</p>
                <p>Title: {tour.title}</p>
                <button onClick={() => handleDeleteTour(tour.id)}>Xóa</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Phần A</h1>
          <AComponent />
        </div>

        <div>
          <h1>Phần B</h1>
          <BComponent />
        </div>
      </div>
    </div>
  );
}
