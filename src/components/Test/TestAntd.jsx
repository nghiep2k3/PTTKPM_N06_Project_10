import React, { useEffect, useState } from "react";
import { Space, Spin } from "antd";
import { database } from "../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";

export default function TestAntd() {
  const dbRef = ref(database);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `TourNew`));
        if (snapshot.exists()) {
          setData(snapshot.val());
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   get(child(dbRef, `TourNew`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setData(snapshot.val());
  //         console.log(snapshot.val());
  //         setLoad(true);
  //         //object
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  console.log(222, data.HaNoi.des);


  return (
    <div>
      Test call api
      <p>{data.HaNoi.des}</p>
    </div>
  );


  // if (load == false) {
  //   return (
  //     <div>
  //       <Spin size="large" />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       Test call api
  //       <p>{data.HaNoi.des}</p>
  //     </div>
  //   );
  // }
}
