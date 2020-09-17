import React from "react"
import { Form, Input, Button } from "antd"
import { formItemLayout } from "../../../models/const"

export const Register = ({ props, mapDispatchToProps }) => {
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo)
    }

    const onFinish = (values) => {
        console.log("Success:", values)
        const { name, email, password } = values

        const newUser = {
            name,
            email,
            password,
        }

        mapDispatchToProps.register(newUser)
    }

    const confirmPasswords = ({ getFieldValue }) => ({
        validator(rule, value) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve()
            }

            return Promise.reject("The two passwords that you entered do not match!")
        },
    })

    return (
        <>
            <Form
                {...formItemLayout}
                name="register"
                initialValues={{
                    remember: false,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="Username"
                    name="name"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}>
                    <Input />
                </Form.Item>

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
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => confirmPasswords({ getFieldValue }),
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item className="pt-4" style={{ marginLeft: "50%", marginRight: "50%" }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Register
