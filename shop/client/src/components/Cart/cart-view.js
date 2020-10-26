import React, { useEffect, useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button, Card } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import Meta from "antd/lib/card/Meta"
import style from "./cart-view.module.scss"


export const Cart = ({ props, mapDispatchToProps }) => {
    let history = useHistory()

    const [totalPrice, setTotalPrice] = useState(0)
    const [order, setOrder] = useState([])

    useEffect(() => {
        if (props.user) {
            mapDispatchToProps.createUserCart(props.user._id)
        }

        let price = 0
        props.cart.order.map((el, index) => {
            price += el.price
            if (index === props.cart.order.length - 1) {
                setTotalPrice(price.toFixed(2))
                mapDispatchToProps.setPrice(price.toFixed(2));
            }
        })

        let order = []
        const uniqueBands = [...new Set(props.cart.order.map((item) => item._id))]

        uniqueBands.map((music, index) => {
            let counter = 0
            let buffer = {}
            props.cart.order.map((element, index) => {
                if (element._id === music) {
                    counter++
                }
                if (index === props.cart.order.length - 1) {
                    buffer[music] = counter
                    order = [...order, { ...buffer }]
                }
            })
        })
        setOrder(order)
        mapDispatchToProps.setOrderedItems(order);
    }, [props.user, props.cart.order.length])

    const onSubmitButtonClicked = () => {
        history.push("/order")
    }

    const renderUserCart = () => {
        let column = 2
        let row = 1

        return (
            <>
                <div className={style.orderContainer}>
                    {props.cart.order?.map((el, index) => {
                        if (index % 5 === 0) {
                            row++
                            column = 2
                        } else {
                            column++
                        }
                        const description = `Band: ${el.band} | Category: ${el.category} | Price: ${el.price}$`
                        return (
                            <Card
                                key={el.albumName + index}
                                cover={
                                    <img
                                        alt="img"
                                        src={`${el.imgURL}`} //TODO add el.imgURL
                                    />
                                }
                                actions={[
                                    <Button onClick={() => mapDispatchToProps.removeItemFromCart(el)}>
                                        <DeleteOutlined />
                                    </Button>,
                                ]}
                                className={style.Card}
                                style={{ gridColumnStart: column, gridRowStart: row }}>
                                <Meta key={el.albumName} title={el.albumName} description={description} />
                            </Card>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <>
            <div className={style.header}>
                <h1>Your order:</h1>
            </div>
            {props.isAuthenticated && props.user !== null ? (
                <>
                    {renderUserCart()}
                    <div className={style.orderSection}>
                        {props.order.length !== 0 && (
                            <>
                                <h2>Total price: {`${totalPrice}$`}</h2>
                                <Button type="primary" shape="round" className={style.Submit} onClick={() => onSubmitButtonClicked()} size="large">
                                    Submit
                                </Button>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <h1>Only authenticated users can add products to cart!</h1>
                    <h3>
                        If you still don't have account <Link to="/auth">Join us!</Link>
                    </h3>
                </>
            )}
        </>
    )
}
