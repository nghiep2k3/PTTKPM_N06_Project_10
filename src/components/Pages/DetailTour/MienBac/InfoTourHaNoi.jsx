import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./InfoTourMienBac.module.css";
import { Carousel, Button, InputNumber } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCalendarWeek,
  faPaperPlane,
  faPhone,
  faPlane,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";

import ImgSrc from "../../../img/carousel.webp";
import ImgSrc2 from "../../../img/carousel2.webp";
import ImgSrc3 from "../../../img/carousel3.webp";

export default function InfoTourHaNoi() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef();

  const handleSlideChange = (slideIndex) => {
    if (slideIndex >= 0 && slideIndex < 3) {
      setCurrentSlide(slideIndex);
      carouselRef.current.goTo(slideIndex);
    }
  };

  // Onchange button Price, quantity
  const [Adult, setAdult] = useState('0');
  const [Baby, setBaby] = useState('0');
  const [Baby2, setBaby2] = useState('0');
  const [TotalMoney, setTotalMoney] = useState(0);


  const onChangeAdult = (value) => {
    let x = 7900000;
    const totalPrice = value * x;
    const formattedPrice = totalPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND", });
    setAdult(formattedPrice);
    console.log('Số lượng người lớn:', value, 'Giá tiền:', formattedPrice);
  };

  const onChangeBaby = (value) => {
    let x = 5670000;
    const totalPrice = value * x;
    const formattedPrice = totalPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND", });
    setBaby(formattedPrice);
    console.log('Số lượng trẻ em":', value, 'Giá tiền:', formattedPrice);
  };

  const onChangeBaby2 = (value) => {
    let x = 2100000;
    const totalPrice = value * x;
    const formattedPrice = totalPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND", });
    setBaby2(formattedPrice);
    console.log('Số lượng em bé":', value, 'Giá tiền:', formattedPrice);
  };

  useEffect(() => {
    // Convert the formatted prices to numbers for calculation
    const adultValue = parseFloat(Adult.replace(/[^0-9.-]+/g, ''));
    const babyValue = parseFloat(Baby.replace(/[^0-9.-]+/g, ''));
    const baby2Value = parseFloat(Baby2.replace(/[^0-9.-]+/g, ''));
    console.log(111, adultValue);
    console.log(222, babyValue);
    console.log(33, baby2Value);

    // Calculate TotalMoney
    const totalMoney = adultValue * 1000000 + babyValue * 1000000 + baby2Value * 1000000;

    // Update TotalMoney state
    setTotalMoney(totalMoney);
  }, [Adult, Baby, Baby2]);

  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  };

  return (
    <div>
      <div style={{ background: "none", height: "auto" }}>
        <div style={{ fontSize: 20, marginLeft: 52 }}>
          <Link to="/">Trang chủ</Link> &gt;{" "}
          <Link to="/NewTour">Tour mới nhất</Link> &gt; Du lịch Hà Nội - Lào Cai
          - Sapa - Hạ Long
        </div>
        <div className={style.Content_Header}>
          <div className={style.SetupCarousel}>
            <Carousel
              ref={carouselRef}
              // autoplay={true}
              style={{
                width: "100%",
              }}
              afterChange={setCurrentSlide}
              draggable
            >
              <div>
                <img src={ImgSrc} alt="" />
              </div>
              <div>
                <img src={ImgSrc2} alt="" />
              </div>
              <div>
                <img src={ImgSrc3} alt="" />
              </div>
            </Carousel>

            {/* <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Button
                onClick={() => handleSlideChange(currentSlide - 1)}
                disabled={currentSlide === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => handleSlideChange(currentSlide + 1)}
                disabled={currentSlide === 2}
              >
                Next
              </Button>
            </div> */}
          </div>
          <div className={style.ContentTour}>
            <h2>Du lịch Hà Nội - Lào Cai - Sapa - Hạ Long</h2>
            <p style={{ margin: "10px 0" }}>Hành trình: Hồ Chí Minh - Hà Nội</p>
            <div>
              <FontAwesomeIcon
                icon={faTrain}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: 20 }}>Di chuyển bằng Ô tô</span>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faPlane}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: 20 }}>Di chuyển bằng máy bay</span>
            </div>

            <div>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                style={{ marginRight: "8px" }}
              />
              <span style={{ fontSize: 20 }}>Chủ nhật</span>
              <p style={{ fontSize: 18, marginTop: 10 }}>
                - Tham quan Quốc Tử Giám - từng là trung tâm thờ tự và giáo dục
                Nho học lớn nhất
              </p>
              <p style={{ fontSize: 18 }}>
                - Du ngoạn vịnh Hạ Long - một trong 7 kỳ quan thiên nhiên mới
                của thế giới
              </p>
              <p style={{ fontSize: 18 }}>
                - Ngắm toàn cảnh Sapa và “Nóc nhà Đông Dương” - đỉnh Fansipan
                tại sân mây
              </p>
              <p style={{ fontSize: 18 }}>
                - Tìm hiểu đời sống dân tộc thiểu số tại bản Lao Chải - Tả Van
              </p>
            </div>

            <div className={style.SetupButton}>
              <button>
                {" "}
                <FontAwesomeIcon icon={faPaperPlane} /> Đặt Tour
              </button>
              <button>
                {" "}
                <FontAwesomeIcon icon={faPhone} /> Gọi cho tôi sau
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ButtonNextCarousel}>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(0)}>
          <img style={{ maxWidth: "100%" }} src={ImgSrc} alt="" />
        </p>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(1)}>
          <img style={{ maxWidth: "100%" }} src={ImgSrc2} alt="" />
        </p>
        <p style={{ width: 130 }} onClick={() => handleSlideChange(2)}>
          <img style={{ maxWidth: "100%" }} src={ImgSrc3} alt="" />
        </p>
      </div>

      <div className={style.SetupPriceTour}>
        <div className={style.div1}>Loại khách</div>
        <div className={style.div2}>Số lượng</div>
        <div className={style.div3}>Đơn giá</div>
        <div className={style.div4}>Tổng giá</div>

        <div className={style.div5}>Người lớn</div>
        <div className={style.div6}>
          <InputNumber
            size="large"
            min={0}
            max={100000}
            defaultValue={0}
            onChange={onChangeAdult}
          />
        </div>
        <div className={style.div7}>7.990.000₫</div>
        <div className={style.div8}>{Adult}</div>

        <div className={style.div9}>Trẻ em</div>
        <div className={style.div10}>
          <InputNumber
            size="large"
            min={0}
            max={100000}
            defaultValue={0}
            onChange={onChangeBaby}
          />
        </div>
        <div className={style.div11}>5.670.000₫</div>
        <div className={style.div12}>{Baby}</div>

        <div className={style.div13}>Em bé</div>
        <div className={style.div14}>
          <InputNumber
            size="large"
            min={0}
            max={100000}
            defaultValue={0}
            onChange={onChangeBaby2}
          />
        </div>
        <div className={style.div15}>2.100.000₫</div>
        <div className={style.div16}>{Baby2}</div>
      </div>
      Tổng tiền: {formatCurrency(TotalMoney)}
    </div>
  );
}
