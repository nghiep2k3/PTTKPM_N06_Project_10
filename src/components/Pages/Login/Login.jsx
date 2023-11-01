import React, { useEffect, useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "../../../firebase";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('ACCESS_TOKEN');
  //   if (accessToken) {
  //     setIsLoggedIn(true);
  //     navigate('/UserManager');
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  const dbRef = ref(database);
  const [account, setAccount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(dbRef, `users/admin`));
        if (snapshot.exists()) {
          console.log("Admin");
          setAccount(snapshot.val());
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

  // console.log(3333, account.Account);

  const onFinish = (values) => {
    console.log("Success:", values);

    console.log(account.Admin1.Account);
    console.log(account.Admin1.Password);
    if (
      values.username == account.Admin1.Account &&
      values.password == account.Admin1.Password
    ) {
      navigate("/");
      localStorage.setItem('LogIn', "true");
    } else {
      message.error("Sai tài khoản hoặc mặc khẩu");
    }

  };

  if (!account) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        className={styles.container}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 style={{ textAlign: "center" }}>Welcome</h1>
        <p style={{ textAlign: "center" }}>Login to your account</p>
        <Form.Item
          label={
            <label htmlFor="username" className={styles.textf}>
              Email
            </label>
          }
          name="username" // truyền lên data
          rules={[{ required: true, message: "Enter email" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            id="username"
            name="username"
            type="username"
            className={styles.inputf}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label={
            <label htmlFor="password" className={styles.textf}>
              Password
            </label>
          }
          name="password" // truyền lên data
          rules={[{ required: true, message: "Enter password" }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input
            className={styles.inputf}
            id="password"
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          style={{ textAlign: "center" }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className={styles.buttonL}
            style={{ width: "100%", background: "#805EDF" }}
          >
            Login
          </Button>
        </Form.Item>

        <Form.Item
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ marginTop: "5px" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: 20, fontFamily: "Poppins" }}>
              Đăng ký tài khoản
            </p>
            <Link to="/">
              <p style={{ fontSize: 20, fontFamily: "Poppins" }}>
                Quay lại trang chủ
              </p>
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
