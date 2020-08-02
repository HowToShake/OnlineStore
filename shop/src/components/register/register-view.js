import React from 'react'
import { Form, Input, Button } from 'antd';


const Register = () => {

    const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="d-flex flex-column justify-content-center" style={{border: '1px dashed red'}}>
            <div className="w-25 align-self-center pt-5">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
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


                    <Form.Item  style={{border: '1px solid green'}}>
                        <Button className="ml-auto" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
        </div>
    )
}

export default Register
