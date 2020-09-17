import React, { useEffect, useState } from "react"
import LandingPageStyles from "./landing-page-view.module.scss"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Card, Button, message, Menu, Carousel } from "antd"

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

    const carouselContentStyle = {
        marginTop: "60px",
        width: "80vw",
        marginLeft: "10vw",
        marginRight: "10vw",
        color: "#fff",
        lineHeight: "30vh",
        textAlign: "center",
        background: "#364d79",
    }

    return <></>
}
