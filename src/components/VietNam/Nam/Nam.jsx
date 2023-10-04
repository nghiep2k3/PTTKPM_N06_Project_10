// Tour nước ngoài
import React from "react";
import CardItem from "../../Pages/Home/Card";
import UrlImg from "../../img/banner2.jpg";
import UrlImg2 from "../../img/banner6.jpg";
import UrlImg3 from "../../img/banner4.jpg";
export default function TestCard() {
  const data = {
    item1: {
      title: "Du lịch Miền Nam",
      img: UrlImg,
      price: "40.000.000đ",
      priceOld: "100.000.000đ"
    },
    item2: {
      title: "Du thuyền Miền Nam",
      img: UrlImg2,
      price: "100.000.000đ",
      priceOld: "190.000.000đ"
    },
    item3: {
      title: "Du lịch Hàn Quốc - Hoa anh đào",
      img: UrlImg3,
      price: "150.000.000đ",
      priceOld: "220.000.000đ"
    }
  };

  const ListCard3 = () => {
    const DataKeys = Object.keys(data);
    const dataToDisplay = DataKeys.slice(0, 4);

    //Hiển thị giới hạn
    // return (
    //   <div>
    //     {dataToDisplay.map((productKey) => (
    //       <Card
    //         key={productKey}
    //         name={data[productKey].name}
    //         price={data[productKey].price}
    //         imgSrc={data[productKey].img}
    //       />
    //     ))}
    //   </div>
    // );

    //Hiển thị tất cả
    return (
      <div style={{display: 'flex', justifyContent: "space-around", margin: '0 95px', flexWrap: 'wrap'}}>
        {Object.keys(data).map((item) => (
          <CardItem
            key={item}
            price={data[item].price}
            title={data[item].title}
            priceOld={data[item].priceOld}
            imgSrc={data[item].img}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <ListCard3></ListCard3>
    </div>
  );
}
