import React, { useEffect } from "react"
import style from "./user-view.module.scss"
import { Table } from "antd"

export const User = ({ user, orders }) => {
    useEffect(() => {}, [orders, user])

    const dataSource = orders?.map((order) => {
        return {
            id: order._id,
            price: order.price,
            status: order.status,
        }
    })

    const columns = [
        {
            title: "Order ID",
            dataIndex: "id",
            key: "id",
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
    ]

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} className={style.table} rowKey="id" />
        </div>
    )
}
