import React, { useEffect, useState } from "react";
import { Space, Spin } from "antd";
import { database } from "../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";
import CardItem from "../Pages/Home/Card";

export default function TestAntd() {
  const dbRef = ref(database);
  const [data, setData] = useState();

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
      <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: 280 }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      Test call api
      <p>{data.HaNoi.id}</p>
      <p>{data.HaNoi.price}</p>
      <p>{data.HaNoi.title}</p>
      <p>{data.HaNoi.time}</p>

      <div style={{ display: "flex", justifyContent: "space-around", margin: '0 95px', flexWrap: 'wrap' }}>
        {Object.keys(data).map((item) => (
          <CardItem
            key={item}
            price={data[item]?.price}
            title={data[item]?.title}
            priceOld={data[item]?.price_old}
            imgSrc={data[item].SrcImg}
          />
        ))}
      </div>
    </div>
  );
}
