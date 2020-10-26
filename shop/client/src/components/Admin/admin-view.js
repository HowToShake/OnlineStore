import React from "react"
import NotFoundPage from "../404/404-view"
import axios from "axios"
import { message, Table, Button, Form, Input } from "antd"
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons"
import style from "./admin-view.module.scss"

export class Admin extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await axios
            .get("http://localhost:5000/api/users/usersWithOrders")
            .then((res) => {
                if (res?.status === 200) {
                    const dataSource = res?.data.map((user) => {
                        return {
                            userId: user._id,
                            userEmail: user.email,
                            name: user.name,
                            order: user.orders.map((order) => {
                                return {
                                    orderId: order._id,
                                    price: order.price,
                                    status: order.status,
                                }
                            }),
                        }
                    })

                    const dataToTable = dataSource.map((user) =>
                        user.order.map((order) => {
                            return {
                                ...order,
                                name: user.name,
                                userEmail: user.userEmail,
                                userId: user.userId,
                            }
                        })
                    )

                    let dataToShowInTable = []

                    dataToTable.map((obj) => {
                        obj.map((order) => {
                            dataToShowInTable.push(order)
                        })
                    })

                    this.setState({ dataToShowInTable })
                } else {
                    message.error("There was a problem during connection to backend. Please try again later!")
                }
            })
            .catch((err) => console.log(err))
    }

    async componentDidUpdate() {
        await axios
            .get("http://localhost:5000/api/users/usersWithOrders")
            .then((res) => {
                if (res?.status === 200) {
                    const dataSource = res?.data.map((user) => {
                        return {
                            userId: user._id,
                            userEmail: user.email,
                            name: user.name,
                            order: user.orders.map((order) => {
                                return {
                                    orderId: order._id,
                                    price: order.price,
                                    status: order.status,
                                }
                            }),
                        }
                    })

                    const dataToTable = dataSource.map((user) =>
                        user.order.map((order) => {
                            return {
                                ...order,
                                name: user.name,
                                userEmail: user.userEmail,
                                userId: user.userId,
                            }
                        })
                    )

                    let dataToShowInTable = []

                    dataToTable.map((obj) => {
                        obj.map((order) => {
                            dataToShowInTable.push(order)
                        })
                    })

                    this.setState({ dataToShowInTable })
                } else {
                    message.error("There was a problem during connection to backend. Please try again later!")
                }
            })
            .catch((err) => console.log(err))
    }

    config = {
        headers: {
            "Content-type": "application/json",
        },
    }

    resolveOrder = async (order) => {
        await axios
            .put(`http://localhost:5000/api/users/order/${order.userId}/${order.orderId}`, {}, this.config)
            .then((res) => {
                if (res?.status === 200) {
                    return message.success("You have changed status to resolved!")
                }
            })
            .catch((err) => console.log(err))
    }

    actionButtons = (order) => (
        <>
            <Button icon={<CheckOutlined />} onClick={() => this.resolveOrder(order)} />
        </>
    )

    columns = [
        {
            title: "User ID",
            dataIndex: "userId",
            key: "userId",
        },
        {
            title: "User email",
            dataIndex: "userEmail",
            key: "userEmail",
        },
        {
            title: "User name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Order ID",
            dataIndex: "orderId",
            key: "orderId",
        },
        {
            title: "Total Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Action",
            render: (order) => this.actionButtons(order),
            align: "center",
        },
    ]

    submitOrder = (values) => {
        console.log(values)
    }

    render() {
        return (
            <>
                {this.props.role !== "admin" ? (
                    <NotFoundPage />
                ) : (
                    <div>
                        <Table dataSource={this.state?.dataToShowInTable} columns={this.columns} className={style.table} rowKey="orderId" />
                        <Form labelCol={{ span: 7 }} wrapperCol={{ span: 10 }} layout="horizontal" onFinish={(values) => this.submitOrder(values)}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Name!",
                                    },
                                ]}>
                                <Input />
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 12, offset: 12 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                )}
            </>
        )
    }
}
