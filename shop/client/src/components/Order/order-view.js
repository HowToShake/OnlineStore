import React from "react"
import axios from "axios"
import { Table, Input, Form, Button, Select, DatePicker, message } from "antd"
import style from "./order-view.module.scss"
import phonePrefixes from "./phoneNumberPrefixes.json"
import moment from "moment"

const { Option } = Select

export const Order = ({ user, orderedItems, totalPrice, uniqueOrderItems }) => {
    const [form] = Form.useForm()

    const monthFormat = "YYYY/MM"

    const columns = [
        {
            title: "Album Name",
            dataIndex: "albumName",
            key: "albumName",
        },
        {
            title: "Band",
            dataIndex: "band",
            key: "band",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Total Price",
            dataIndex: "totalPrice",
            key: "totalPrice",
        },
    ]

    const dataSource = uniqueOrderItems.map((element) => {
        const amount = orderedItems.find((obj) => obj[element._id])
        const totalPrice = orderedItems.find((obj) => obj[element._id])
        return {
            key: element._id,
            albumName: element.albumName,
            band: element.band,
            category: element.category,
            price: element.price.toFixed(2),
            amount: amount[element._id],
            totalPrice: (totalPrice[element._id] * element.price).toFixed(2),
        }
    })

    const prefixSelector = (
        <Form.Item name="phoneNumberPrefix" noStyle>
            <Select style={{ width: 100 }}>
                {phonePrefixes?.map((number) => (
                    <Option value={number?.dial_code} key={number.code}>{`${number.code} ${number.dial_code}`}</Option>
                ))}
            </Select>
        </Form.Item>
    )

    const submitOrder = async (values) => {
        await axios
            .put(`http://localhost:5000/api/users/${user?._id}`, {
                orderedItems: orderedItems,
                price: totalPrice,
                receiverInfo: {
                    name: values.name,
                    surname: values.surname,
                    address: values.address,
                    phoneNumber: values.phoneNumber,
                    phoneNumberPrefix: values?.phoneNumberPrefix,
                    deliveryMethod: values.deliveryMethod,
                    paymentMethod: values.paymentMethod,
                    cardNumber: values?.cardNumber,
                    cardOwnerName: values?.cardOwnerName,
                    validUntil: values?.validUntil,
                    CVC: values?.CVC,
                },
            })
            .then((res) => {
                if (res?.status === 200 && res?.data?.success) {
                    if (values?.paymentMethod === "bankTransfer") {
                        message.success(`Success! Make bank transfer to our company! You'll be redirect to homepage after 3s.`)
                    } else {
                        message.success(`Success! Money will be taken from your account! You'll be redirect to homepage after 3s.`)
                    }
                    setTimeout(() => {
                        window.location.href = "http://localhost:3000"
                    }, 3000)
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={style.orderContainer}>
            <Table dataSource={dataSource} columns={columns} className={style.table} />
            <h2>Buyer Info</h2>
            <Form labelCol={{ span: 7 }} wrapperCol={{ span: 10 }} layout="horizontal" onFinish={(values) => submitOrder(values)} form={form}>
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
                <Form.Item
                    name="surname"
                    label="Surname"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Surname!",
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Address!",
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Phone Number!",
                        },
                    ]}>
                    <Input addonBefore={prefixSelector} />
                </Form.Item>
                <Form.Item
                    name="deliveryMethod"
                    label="Delivery Method"
                    rules={[
                        {
                            required: true,
                            message: "Please select Delivery Method!",
                        },
                    ]}>
                    <Select>
                        <Option value="UPC">UPC</Option>
                        <Option value="DHL">DHL</Option>
                        <Option value="FedEx">FedEx</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="paymentMethod"
                    label="Payment Method"
                    rules={[
                        {
                            required: true,
                            message: "Please select Payment Method!",
                        },
                    ]}>
                    <Select>
                        <Option value="creditCard">Credit Card</Option>
                        <Option value="bankTransfer">Bank Transfer</Option>
                    </Select>
                </Form.Item>
                <Form.Item shouldUpdate={(prevValues, currentValues) => prevValues.paymentMethod !== currentValues.paymentMethod} noStyle>
                    {({ getFieldValue }) => {
                        return (
                            getFieldValue("paymentMethod") === "creditCard" && (
                                <>
                                    <Form.Item
                                        name="cardNumber"
                                        label="Card Number"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input Card Number!",
                                            },
                                        ]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="cardOwnerName"
                                        label="Card Owner Name"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input Card Owner!",
                                            },
                                        ]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="validUntil"
                                        label="Valid Until"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input date until card is valid!",
                                            },
                                        ]}>
                                        <DatePicker format={monthFormat} picker="month" />
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{ span: 1 }}
                                        name="CVC"
                                        label="CVC"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input CVC Number!",
                                            },
                                        ]}>
                                        <Input type="number" min={100} max={999} />
                                    </Form.Item>
                                </>
                            )
                        )
                    }}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 12 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
