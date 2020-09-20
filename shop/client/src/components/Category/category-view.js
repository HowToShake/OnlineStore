import React, { useEffect } from "react"

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
                                <p key={index}>{el.band}</p>
                                <p key={el}>{el.albumName}</p>
                            </>
                        )
                    } else {
                        return (
                            <>
                                <p key={el}>{el.albumName}</p>
                            </>
                        )
                    }
                }
            })
        })
    }

    return <div>{renderUniqueBands()}</div>
}
