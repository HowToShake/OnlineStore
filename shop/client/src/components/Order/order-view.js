import React from "react"
import axios from "axios"
import {Table} from 'antd'

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
        const amount = orderedItems.find(obj => obj[element._id])
        const totalPrice = orderedItems.find(obj => obj[element._id])
        return{
        key: element._id,
        albumName: element.albumName,
        band: element.band,
        category: element.category,
        price: element.price,
        amount: amount[element._id],
        totalPrice: totalPrice[element._id]*element.price,
        }
    })


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
        <div>
            <Table dataSource={dataSource} columns={columns} />
            <button onClick={submitOrder}>SUBMIT</button>
        </div>
    )
}
