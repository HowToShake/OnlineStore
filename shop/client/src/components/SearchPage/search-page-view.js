import React from "react"
import Meta from "antd/lib/card/Meta"
import { Card, Button, message } from "antd"
import { ShoppingCartOutlined } from "@ant-design/icons"
import style from './search-page-view.module.scss'

export const SearchPage = ({ props, mapDispatchToProps }) => {

    const addItem = (element) => {
        if (props.user) {
            mapDispatchToProps.onAddItemToCartWasPressed(element)
        } else {
            message.error("Only authenticated user can add products to Cart!", 1.5)
        }
    }

    const uniqueBands = [...new Set(props.searchedItems.map((item) => item.band))]
    const multipleUniqueBands = uniqueBands.concat(uniqueBands).sort()

    const renderSearchedItems = () => {
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
                        {props.searchedItems.map((el, index) => {
                            if (el.band === uniqueBand) {
                                const price = `Price: ${el.price}$ `
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
                                                    src={"xd"} //TODO add el.imgURL
                                                />
                                            }
                                            actions={[
                                                <Button onClick={() => addItem(el)}>
                                                    <ShoppingCartOutlined />
                                                </Button>,
                                            ]}
                                            className={style.Card}>
                                            <Meta key={el.albumName + index + price} title={el.albumName} description={price +` | `+available +` | `+`Category: ${el.category}`} />
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

    return (
        <>
            <h1>SEARCH</h1>
            <div className={style.container}>{renderSearchedItems()}</div>
        </>
    )
}
