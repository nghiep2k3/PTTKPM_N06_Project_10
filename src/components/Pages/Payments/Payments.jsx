import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import styles from "./Payments.module.css";
export default function Payments() {
  const [ship, setShip] = useState(1);
  const onChangeShip = (e) => {
    console.log("radio checked", e.target.value);
    setShip(e.target.value);
    setSelectedDiv(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validatePhone = (rule, value, callback) => {
    const phonePattern = /^[0-9]*$/; // Biểu thức chính quy kiểm tra xem nó chỉ chứa số.
    if (!value) {
      callback("Nhập số điện thoại của bạn!");
    } else if (!phonePattern.test(value)) {
      callback("Số điện thoại chỉ được chứa số và không có ký tự đặc biệt.");
    } else if (value.length > 10) {
      callback("Số điện thoại chỉ được chứa số và không có ký tự đặc biệt.2");
    } else {
      callback();
    }
  };
  const [selectedDiv, setSelectedDiv] = useState(null);
  // địa chỉ
  const [dataCountry, setDatadataCountry] = useState([]);
  const [loading, setLoading] = useState(true); // Biến trạng thái tải dữ liệu

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      )
      .then((response) => {
        setDatadataCountry(response.data);
        setLoading(false); // Đã tải xong dữ liệu
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Đã tải xong dù có lỗi
      });
  }, []);

  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);

  const handleCityChange = (event) => {
    const selectedCityName = event.target.value; // Lấy giá trị đã chọn
    setSelectedCity(selectedCityName);

    // Lấy danh sách quận/huyện dựa trên tỉnh/thành phố đã chọn
    const selectedCityData = dataCountry.find(
      (item) => item.Name === selectedCityName
    );
    if (selectedCityData) {
      const districtList = selectedCityData.Districts.map((item) => item.Name);
      setDistricts(districtList);
    } else {
      setDistricts([]);
    }

    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);

    // Lấy danh sách xã/phường dựa trên quận/huyện đã chọn
    const selectedCityData = dataCountry.find(
      (item) => item.Name === selectedCity
    );
    if (selectedCityData) {
      const selectedDistrictData = selectedCityData.Districts.find(
        (item) => item.Name === event.target.value
      );
      if (selectedDistrictData) {
        const wardList = selectedDistrictData.Wards.map((item) => item.Name);
        setWards(wardList);
      } else {
        setWards([]);
      }
    } else {
      setWards([]);
    }
  };

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  } else {
    return (
      <div>
        <h1 style={{ color: "#2a9dcc", textAlign: "center" }}>Ant Du lịch</h1>
        <div>
          <div>
            <div style={{ margin: "14px 0 0 115px" }}>
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: 340,
                    }}
                  >
                    <b style={{ fontSize: 20 }}>Thông tin nhận hàng</b>
                    <button
                      style={{
                        color: "#2a9dcc",
                        border: "none",
                        backgroundColor: "transparent",
                        fontSize: 15,
                      }}
                    >
                      <UserOutlined />
                      Đăng nhập
                    </button>
                  </div>

                  <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <div className={styles.parent}>
                      <Form.Item
                        name="Email3"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập vào email !",
                          },
                        ]}
                      >
                        <input id="Email" placeholder="Email "></input>
                      </Form.Item>

                      <Form.Item
                        name="Username"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập vào họ và tên!",
                          },
                        ]}
                      >
                        <input id="Username" placeholder="Họ và Tên "></input>
                      </Form.Item>

                      <Form.Item
                        name="Phone"
                        rules={[
                          {
                            validator: validatePhone,
                          },
                        ]}
                      >
                        <input id="Phone" placeholder="Số điện thoại "></input>
                      </Form.Item>

                      <Form.Item
                        name="City"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập vào thành phố của bạn!",
                          },
                        ]}
                      >
                        <div>
                          <select
                            id="City"
                            value={selectedCity}
                            style={{ color: "gray !important" }}
                            onChange={handleCityChange}
                          >
                            <option value=""> Chọn tỉnh/thành phố </option>
                            {dataCountry.map((item, index) => (
                              <option key={index} value={item.Name}>
                                {item.Name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Form.Item>

                      <Form.Item
                        name="District"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập vào thành phố của bạn!",
                          },
                        ]}
                      >
                        <div>
                          <select
                            id="District"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                          >
                            <option value=""> Chọn quận/huyện </option>
                            {districts.map((district, index) => (
                              <option key={index} value={district}>
                                {district}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Form.Item>

                      <Form.Item
                        name="Ward"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập vào thành phố của bạn!",
                          },
                        ]}
                      >
                        <div>
                          <select id="Ward">
                            <option value=""> Chọn xã </option>
                            {wards.map((ward, index) => (
                              <option key={index} value={ward}>
                                {ward}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Form.Item>

                      <Form.Item style={{ height: "100%" }}>
                        <textarea name="Note" id="Note"></textarea>
                      </Form.Item>
                    </div>

                    <Form.Item>
                      <button type="primary" htmlType="submit">
                        Submit
                      </button>
                    </Form.Item>
                  </Form>
                </div>
              </div>

              <div>
                <div>
                  <p>
                    Hình thức thanh toán <MoneyCollectOutlined />
                  </p>

                  <div>
                    <Radio.Group onChange={onChangeShip} value={selectedDiv}>
                      <div
                        className={`${styles.ClickPay} ${
                          selectedDiv === 1 ? styles.SelectedDiv2 : ""
                        }`}
                      >
                        <Radio value={1}>Thanh toán khi nhận hàng</Radio>
                      </div>
                      <div
                        className={`${styles.ClickPay} ${
                          selectedDiv === 2 ? styles.SelectedDiv2 : ""
                        }`}
                      >
                        <Radio value={2}>Thanh toán bằng Qr Code</Radio>
                      </div>
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "30%" }}>2</div>
          </div>
        </div>
      </div>
    );
  }
}
