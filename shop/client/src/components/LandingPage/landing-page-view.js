import React, { useEffect, useState } from "react"
import style from "./landing-page-view.module.scss"
import { ShoppingCartOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"
import { Card, Button, message, Menu, Carousel, Row, Col } from "antd"

import { getWindowDimensions } from "../../models/common-method"

const { Meta } = Card

export const LandingPage = ({ props, mapDispatchToProps }) => {
    const [widthToMenu, setwidthToMenu] = useState()

    useEffect(() => {
        mapDispatchToProps.uploadItems()
        window.addEventListener("resize", handleResize)
        handleResize()
        if (props.categories.length === 0) {
            mapDispatchToProps.getDistinctCategories()
        }
        return () => {
            window.removeEventListener("resize", handleResize)
            document.querySelector("div#root").style.backgroundColor = ""
        }
    }, [props.user, props.wasHomeOrMenuPressed])

    const handleResize = () => {
        const { width } = getWindowDimensions()

        if (width > 768) {
            setwidthToMenu(`${100 / 50}vw`)
        } else if (width <= 768) {
            setwidthToMenu("")
        }
    }

    const addItem = (element) => {
        if (props.user) {
            mapDispatchToProps.onAddItemToCartWasPressed(element)
        } else {
            message.error("Only authenticated user can add products to Cart!", 1.5)
        }
    }

    const showItems = () => {
        return props.items.map((element, index) => {
            const desc = "Size: " + element.size + " | " + "Amount: " + element.amount + " | " + "Price: " + element.price + "$"
            return (
                <li key={index} style={{ listStyleType: "none" }}>
                    <Card
                        style={{
                            marginTop: "1.5vh",
                        }}
                        hoverable
                        cover={
                            <div
                                style={{
                                    background: `url(${element.imgURL}) no-repeat center center`,
                                    backgroundSize: "contain",
                                    height: 200,
                                }}></div>
                        }
                        actions={[
                            <Button onClick={() => addItem(element)}>
                                <ShoppingCartOutlined />
                            </Button>,
                        ]}>
                        <Meta title={element.name} description={desc} />
                    </Card>
                </li>
            )
        })
    }

    return (
        <>
            <div className={style.container}>
                <div id={style.blues}>
                    <div onClick={() => console.log('xD')}>
                        Blues
                    </div>
                </div>
                <div id={style.rock}> xD </div>
                <div id={style.metal}> xD </div>
                <div id={style.hiphop}> xD </div>
                <div id={style.rap}> xD </div>
                <div id={style.pop}> xD </div>
                <div id={style.classic}> xD </div>
                <div id={style.electronic}> xD </div>
                <div id={style.jazz}> xD </div>
            </div>
        </>
    )
}
