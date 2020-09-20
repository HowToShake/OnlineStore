import React, { useEffect } from "react"
import { Card } from "antd"
import style from "./category-view.module.scss"
import Meta from "antd/lib/card/Meta"

export const CategoryView = ({ props, mapDispatchToProps }) => {
    useEffect(() => {
        const category = window.location.href.substring(window.location.href.indexOf("?") + 1)
        mapDispatchToProps.getItemsInParticularCategory(category)
    }, [])

    const uniqueBands = [...new Set(props.musicInParticularCategory.map((item) => item.band))]
    const multipleUniqueBands = uniqueBands.concat(uniqueBands).sort()

    const renderUniqueBands = () => {
        return multipleUniqueBands.map((uniqueBand, index) => {
            if (multipleUniqueBands[index] === multipleUniqueBands[index + 1])
                return (
                    <>
                        <h1 key={index}>{uniqueBand}</h1>
                    </>
                )
            else {
                return(
                    <div className={style.cardContainer}>
                        {props.musicInParticularCategory.map((el, index) => {
                            if (el.band === uniqueBand)
                                return (
                                    <>
                                        <Card className={style.Card}>
                                            <Meta title={el.albumName} description="placeholder" />
                                        </Card>
                                    </>
                                )
                        })}
                    </div>
                )
            }
        })
    }

    return (
        <>
            <div className={style.container}>{renderUniqueBands()}</div>
        </>
    )
}
