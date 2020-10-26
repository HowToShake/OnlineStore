import React, { useEffect } from "react"
import { Card, Button, message } from "antd"
import { ShoppingCartOutlined, LoadingOutlined } from "@ant-design/icons"
import style from "./category-view.module.scss"
import Meta from "antd/lib/card/Meta"

const shortId = require('shortid');

export const CategoryView = ({ props, mapDispatchToProps }) => {
    useEffect(() => {
        const category = window.location.href.substring(window.location.href.indexOf("?") + 1)
        mapDispatchToProps.getItemsInParticularCategory(category)
    }, [])

    const uniqueBands = [...new Set(props.musicInParticularCategory.map((item) => item.band))]
    const multipleUniqueBands = uniqueBands.concat(uniqueBands).sort()

    const addItem = (element) => {
        if (props.user) {
            mapDispatchToProps.onAddItemToCartWasPressed(element)
        } else {
            message.error("Only authenticated user can add products to Cart!", 1.5)
        }
    }

    const renderUniqueBands = () => {
        return multipleUniqueBands.map((uniqueBand, index) => {
            if (multipleUniqueBands[index] === multipleUniqueBands[index + 1])
                return (
                    <>
                        <h1 key={index}>{uniqueBand}</h1>
                    </>
                )
            else {
                return (
                    <div className={style.cardContainer}>
                        {props.musicInParticularCategory.map((el, index) => {
                            if (el.band === uniqueBand) {
                                const price = `Price: ${el.price.toFixed(2)}$ `
                                let available = "available"
                                if (el.amount === 0) {
                                    available = "unavailable"
                                }

                                return (
                                    <>
                                        <Card
                                            key={el.albumName + index}
                                            cover={
                                                <img
                                                    alt="img"
                                                    src={`${el.imgURL}`}
                                                />
                                            }
                                            actions={[
                                                <Button onClick={() => addItem(el)} >
                                                    <ShoppingCartOutlined />
                                                </Button>,
                                            ]}
                                            className={style.Card}>
                                            <Meta  key={el.albumName + index + price} title={el.albumName} description={price + available} />
                                        </Card>
                                    </>
                                )
                            }
                        })}
                    </div>
                )
            }
        })
    }

    return <>{props.areItemsLoading ? <LoadingOutlined /> : <div className={style.container}>{renderUniqueBands()}</div>}</>
}
