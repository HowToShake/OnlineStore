import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Card } from "antd"
import Meta from "antd/lib/card/Meta"
import style from "./cart-view.module.scss"

export const Cart = ({ props, mapDispatchToProps }) => {
    useEffect(() => {
        if (props.user) {
            console.log(props.user.id)
            mapDispatchToProps.createUserCart(props.user._id)
        }
    }, [props.user])

    

    const renderUserCart = () => {
        let column = 2
        let row = 1
        return (
            <>
                <h1>Your order:</h1>
                <div className={style.orderContainer}>
                    {props.cart.order?.map((el, index) => {
                        if (index % 5 === 0) {
                            row++
                            column = 2
                        } else {
                            column++
                        }
                        return (
                            <Card
                                key={el.albumName + index}
                                cover={
                                    <img
                                        alt="img"
                                        src={"xd"} //TODO add el.imgURL
                                    />
                                }
                                actions={[<Button onClick={() => mapDispatchToProps.removeItemFromCart(el)}>REMOVE</Button>]}
                                className={style.Card}
                                style={{ gridColumnStart: column, gridRowStart: row }}>
                                <Meta key={el.albumName} title={el.albumName} description="placeholder" />
                            </Card>
                        )
                    })}

                    

                </div>
            </>
        )
    }

    return (
        <>
            {props.isAuthenticated && props.user !== null ? (
                <>{renderUserCart()}</>
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
