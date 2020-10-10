import React from "react"
import axios from "axios"
import { Table, Input, Form, Button, Select } from "antd"
import style from "./order-view.module.scss"
import phonePrefixes from "./phoneNumberPrefixes.json"

const {Option} = Select;

export const Order = ({ user, orderedItems, totalPrice, uniqueOrderItems }) => {
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
        <Form.Item name="prefix" noStyle>
            <Select style={{width: 100}}>
                {phonePrefixes?.map((number) => (
                    <Option value={number?.dial_code} key={number.code}>{`${number.code} ${number.dial_code}`}</Option>
                ))}
            </Select>
        </Form.Item>
    )

    const submitOrder = async () => {
        await axios
            .put(`http://localhost:5000/api/users/${user?._id}`, {
                orderedItems: orderedItems,
                price: totalPrice,
                receiverInfo: "",
            })
            .then(() => console.log("success"))
            .catch((err) => console.log(err))
    }

    return (
        <div className={style.orderContainer}>
            <Table dataSource={dataSource} columns={columns} className={style.table} />
            <h2>Delivery Info</h2>
            <Form labelCol={{ span: 7 }} wrapperCol={{ span: 10 }} layout="horizontal">
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
                    <Input />
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
