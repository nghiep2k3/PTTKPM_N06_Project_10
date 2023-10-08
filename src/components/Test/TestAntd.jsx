import React from "react";
import style from "./TestAntd.module.css";
import { Form } from "react-router-dom";
import { Checkbox } from "antd";

const ScrollBox = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="scroll-box">
      <div className="content">
        <Form
          name="basic"
          style={{
            maxWidth: 245,
            height: 140,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          
        </Form>
      </div>
    </div>
  );
};

export default ScrollBox;
