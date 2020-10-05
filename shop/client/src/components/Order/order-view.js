import React from "react"
import axios from "axios"

export const Order = ({ props }) => {

    const submitOrder = async () => {
        debugger;
        await axios
            .put(`http://localhost:5000/api/users/${props.user?._id}`, {
                orderedItems: props.orderedItems,
                price: props.totalPrice,
                receiverInfo: "",
            })
            .then(() => console.log("success"))
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>xD</h1>
            <button onClick={submitOrder}>SUBMIT</button>
        </div>
    )
}
