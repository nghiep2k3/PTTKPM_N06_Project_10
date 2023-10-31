import React from "react";
import { database } from "../../firebase";
import { getDatabase, ref, child, get, set } from "firebase/database";

const AddDataToFirebase = () => {
//   const dbRef = ref(database);

//   const data = get(child(ref(database), `users`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });

    // sẽ bằng tên nhập vào
    set(ref(database, 'users/B'), {
        username: "name2",
        email: "email",
        profile_picture : "imageUrl"
    });


  const handleAddData = () => {
    // Tạo một đối tượng mới để thêm vào Firebase
    const newObject = {
      id: 2,
      title: "Đây là B",
    };

    // Tham chiếu đến nút "Order" trên Firebase Realtime Database
    const orderRef = database.ref("OrderTour");

    // Thêm đối tượng mới vào nút "Order"
    orderRef.child("B").set(newObject, (error) => {
      if (error) {
        console.error("Lỗi khi thêm dữ liệu vào Firebase:", error);
      } else {
        console.log("Đã thêm dữ liệu thành công vào Firebase.");
      }
    });
  };

  return (
    <div>
      <button>Thêm đối tượng B vào Firebase</button>
    </div>
  );
};

export default AddDataToFirebase;
