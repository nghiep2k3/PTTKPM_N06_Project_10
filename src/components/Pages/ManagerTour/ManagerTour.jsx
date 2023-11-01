import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { Space, Spin, message } from "antd";
import { database } from "../../../firebase";
import styles from "./ManagerTour.module.css";
import { Link } from "react-router-dom";

export default function ManagerTour() {
  const dbRef = ref(database);
  const [ManagerTour, setManagerTour] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `OrderTour`));
        if (snapshot.exists()) {
          console.log("Manager");
          setManagerTour(snapshot.val());
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

  if (!ManagerTour) {
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

  return (
    <div className={styles.Parent}>
      {/* <div className={styles.Container}>
        <div>
          <p>Tên khách hàng: </p>
          <p>Số điện thoại: </p>
          <p>Email: </p>
          <p>Địa chỉ: </p>
        </div>

        <div>
          <p>Tên tour:</p> (2)
          <p>Tổng số tiền:</p>
        </div>
      </div> */}

      {Object.keys(ManagerTour).map((item, index) => (
        <div className={styles.Container}>
          <div>
            <p style={{ fontWeight: "bold" }}>Tên khách hàng:</p>
            <p>{index}</p>
            <p>{ManagerTour[item].username}</p>
            <p style={{ fontWeight: "bold" }}>Số điện thoại:</p>
            <p>{ManagerTour[item].numberPhone}</p>
            <p style={{ fontWeight: "bold" }}>Email:</p>
            <p>{ManagerTour[item].email}</p>
            <p style={{ fontWeight: "bold" }}>Địa chỉ:</p>
            <p>
              {ManagerTour[item].address.ward} -{" "}
              {ManagerTour[item].address.district} -{" "}
              {ManagerTour[item].address.city}
            </p>
            <p style={{ fontWeight: "bold" }}>Mã khuyến mãi:</p>
            <p>{ManagerTour[item].promotion}</p>
          </div>

          <div style={{ position: "absolute", right: 20, width: 310 }}>
            <p style={{ fontWeight: "bold" }}>Tên tour: ({ManagerTour[item].tours.length})</p>

            {Object.keys(ManagerTour[item].tours).map((item2) => (
              <p className={styles.CutText}>
              Số vé {ManagerTour[item].tours[item2].ticket} - {ManagerTour[item].tours[item2].title}
              </p>
            ))}
            <p style={{ fontWeight: "bold" }}>Tổng số tiền:</p>
            <p>{ManagerTour[item].priceAll}</p>
            <p style={{ fontWeight: "bold" }}>Ghi chú</p>
            <p>{ManagerTour[item].note}</p>
          </div>
          <div>
            <button
              style={{
                background: "red",
                borderRadius: 5,
                padding: 2,
                border: "2px solid gray",
                cursor: 'pointer'
              }}
            >
              Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
