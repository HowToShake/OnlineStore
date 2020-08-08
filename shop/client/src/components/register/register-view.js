import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';

const Register = () => {

    const onFinish = values => {
        console.log('Success:', values);
    };
    
    const [wasError, setWasError] = useState([false, {}])

    const renderFailedMessage = () => {
        return(
            <>
                <h1 className="text-center pt-5">{errorInfo}</h1>
            </>
        )
    }

    const onFinishFailed = errorInfo => {
        setWasError([true, errorInfo]);
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
            span: 8
          }
        }
      };


    return (
        <div className="d-flex flex-row justify-content-between pt-5 mt-5 pb-5" style={{border: '1px solid blue'}}>
            
            <div className="d-flex flex-column justify-content-center pt-5" style={{width: '50vw', borderRight: '1px solid #5559'}}>
                <h1 className=" text-center">Login</h1>
                <div className="align-self-center pt-5 align-self-center" style={{width: '50vw',  height: '80%'}}>
                    <Form
                    {...formItemLayout}
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
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
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item  className="pt-4" style={{marginLeft: '50%', marginRight: '50%'}}>
                        <Button type="primary" htmlType="submit" >
                        Submit
                        </Button>
                    </Form.Item>
                    </Form>
                </div>
        
            </div>


            <div className="d-flex flex-column justify-content-center pt-5" style={{width: '50vw'}}>
                <h1 className="text-center">Register</h1>
                <div className="align-self-center pt-5 align-self-center" style={{width: '50vw', height: '80%'}}>
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
                            name="confirmPassword"
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

        {wasError ? renderFailedMessage : <></> }

        </div>
    )
}

export default Register
