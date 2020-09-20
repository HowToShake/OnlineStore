import React, { useEffect } from "react"
import style from './category-view.module.scss'

export const CategoryView = ({ props, mapDispatchToProps }) => {
    useEffect(() => {
        const category = window.location.href.substring(window.location.href.indexOf("?") + 1)
        mapDispatchToProps.getItemsInParticularCategory(category)
    }, [])

    const uniqueBands = [...new Set(props.musicInParticularCategory.map((item) => item.band))]

    const renderUniqueBands = () => {
        return uniqueBands.map((uniqueBand, index) => {
            let firstTime = true
            return props.musicInParticularCategory.map((el, index) => {
                if (uniqueBand === el.band) {
                    if (firstTime) {
                        firstTime = false
                        return (
                            <>
                                <h1 key={el.band}>{el.band}</h1>
                                <p key={el.albumName}>{el.albumName}</p>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <p key={el.albumName}>{el.albumName}</p>
                            </>
                        )
                    }
                }
            })
        })
    }

    return(
         <div className={style.container}>{renderUniqueBands()}</div>)
}
