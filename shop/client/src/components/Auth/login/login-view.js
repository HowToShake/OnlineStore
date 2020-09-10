import React from "react";
import { Form, Input, Button } from "antd";
import { formItemLayout } from "../../../models/const";

export const Login = ({ props, mapDispatchToProps }) => {
  const onFinish = (values) => {
    mapDispatchToProps.clearErrors();
    console.log("Success:", values);
    mapDispatchToProps.login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...formItemLayout}
      name="login"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        label="E-mail"
        hasFeedback
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        className="pt-4"
        style={{ marginLeft: "50%", marginRight: "50%" }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
