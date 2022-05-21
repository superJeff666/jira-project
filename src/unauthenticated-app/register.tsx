import React from "react";
import { Button, Form, Input } from "antd";
import { useAuth } from "../context/auth-context";
// const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  const { register } = useAuth();
  // HTMLFormElement extends Element
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[
          {
            required: true,
            message: "请输入用户名",
          },
        ]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[
          {
            required: true,
            message: "请输入密码",
          },
        ]}
      >
        <Input placeholder={"密码"} type="text" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
