// Tour mới nhất
import React from "react";
import CardItem from "./Card";
import UrlImg from "../../img/banner1.jpg";
import UrlImg2 from "../../img/banner2.jpg";
import UrlImg3 from "../../img/banner3.jpg";
import UrlImg4 from "../../img/banner4.jpg";
import UrlImg5 from "../../img/banner5.jpg";
import UrlImg6 from "../../img/banner6.jpg";
export default function TestCard() {
  const data = {
    item1: {
      title: "Du lịch Mỹ [Los Angeles - Las Vegas - Universal Studios Hollywood] [2 đêm KS 5* Bellagio, Las Vegas]",
      img: UrlImg,
      price: "49.000.000đ",
      priceOld: "100.000.000đ"
    },
    item2: {
      title: "Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long",
      img: UrlImg2,
      price: "45.000.000đ",
      priceOld: "49.000.000đ"
    },
    item3: {
      title: "Du lịch Châu Âu Pháp - Thụy Sỹ - Núi Jungfrau - Ý",
      img: UrlImg3,
      price: "40.000.000đ",
      priceOld: "222.000.000đ"
    },
    item4: {
      title: "Du lịch Pháp - Bỉ - Hà Lan [Hội Hoa Tulip Keukenhof]",
      img: UrlImg4,
      price: "49.000.000đ",
      priceOld: "100.000.000đ"
    },
    item5: {
      title: "Du lịch Đà Nẵng - KDL Bà Nà - Hội An - Cố Đô Huế",
      img: UrlImg5,
      price: "45.000.000đ",
      priceOld: "150.000.000đ"
    },
    item6: {
      title: "Du lịch Nha Trang - Hòn Lao",
      img: UrlImg6,
      price: "40.000.000đ",
      priceOld: "300.000.000đ"
    },
  };

  const ListCard = () => {
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
      <ListCard></ListCard>
    </div>
  );
}
