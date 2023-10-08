import React from 'react'
import CardTour from '../CardTour/CardTour'
import UrlImg from '../../img/banner1.jpg'
import UrlImg2 from '../../img/banner2.jpg'
import UrlImg3 from '../../img/banner3.jpg'
import UrlImg4 from '../../img/banner4.jpg'

export default function ListCardTour() {
    const data = {
        item1: {
          title: "Du lịch Mỹ [Los Angeles - Las Vegas]",
          img: UrlImg,
          trip: "Hồ Chí Minh - Đà Nẵng",
          vehicle: "Ô tô",
          price: "49.000.000đ",
          priceOld: "100.000.000đ"
        },
        item2: {
          title: "Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long",
          img: UrlImg2,
          trip: "Hồ Chí Minh - Hà Nội",
          vehicle: "Máy bay",
          price: "45.000.000đ",
          priceOld: "49.000.000đ"
        },
        item3: {
          title: "Du lịch Châu Âu Pháp - Thụy Sỹ - Núi Jungfrau - Ý",
          img: UrlImg3,
          trip: "Hồ Chí Minh - Hà Nội",
          vehicle: "Ô tô",
          price: "40.000.000đ",
          priceOld: "222.000.000đ"
        },
        item4: {
          title: "Du lịch Pháp - Bỉ - Hà Lan [Hội Hoa Tulip Keukenhof]",
          img: UrlImg4,
          trip: "Hồ Chí Minh - Hà Nội",
          vehicle: "Ô tô",
          price: "49.000.000đ",
          priceOld: "100.000.000đ"
        }
      };

      const ListCardTour = () => {
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
          <div >
            {Object.keys(data).map((item) => (
              <CardTour
                key={item}
                price={data[item].price}
                title={data[item].title}
                priceOld={data[item].priceOld}
                vehicle={data[item].vehicle}
                imgSrc={data[item].img}
              />
            ))}
          </div>
        );
      };

  return (
    <div>
        <ListCardTour></ListCardTour>
    </div>
  )
}
