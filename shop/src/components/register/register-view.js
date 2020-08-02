import React from 'react'
import { Form, Input, Button } from 'antd';

const Register = () => {

    const onFinish = values => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const confirmPasswords = ({getFieldValue}) => ({
        validator (rule, value) {
        if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
        }

        return Promise.reject(
            "The two passwords that you entered do not match!"
        );
        }
    })

    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 8
          }
        },
        wrapperCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 16
          }
        }
      };


    return (
        <div className="d-flex flex-column justify-content-center" style={{border: '1px dashed red', minWidth: '100vw'}}>
            <div className="align-self-center pt-5 align-self-center" style={{width: '40vw'}}>
                <Form
                    {...formItemLayout}
                    name="register"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
    
                        label="Username"
                        name="username"
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                
                        name="email"
                        label="E-mail"
                        hasFeedback
                        rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!"
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!"
                        }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: "Please confirm your password!"
                        },
                        ({ getFieldValue }) => confirmPasswords({ getFieldValue })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                
                    <Form.Item  className="pt-4" style={{marginLeft: '50%', marginRight: '50%'}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
        </div>
    )
}

export default Register
