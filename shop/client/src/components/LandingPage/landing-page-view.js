import React, { useEffect } from "react"
import style from "./landing-page-view.module.scss"
import "antd/dist/antd.css"
import { useHistory } from "react-router-dom"


export const LandingPage = ({ props, mapDispatchToProps }) => {
    let history = useHistory()

    useEffect(() => {
        if (props.categories.length === 0) {
            mapDispatchToProps.getDistinctCategories()
        }

    }, [props.user])

    return (
        <>
            <div className={style.container}>
                <div id={style.blues} onClick={() => history.push(`/category?Blues`)}>
                    Blues
                </div>
                <div id={style.rock} onClick={() => history.push(`/category?Rock`)}>
                    Rock
                </div>
                <div id={style.metal} onClick={() => history.push(`/category?Metal`)}>
                    Metal
                </div>
                <div id={style.hiphop} onClick={() => history.push(`/category?Hiphop`)}>
                    HipHop
                </div>
                <div id={style.rap} onClick={() => history.push(`/category?Rap`)}>
                    Rap
                </div>
                <div id={style.pop} onClick={() => history.push(`/category?Pop`)}>
                    Pop
                </div>
                <div id={style.classical} onClick={() => history.push(`/category?Classical`)}>
                    Classical
                </div>
                <div id={style.electronic} onClick={() => history.push(`/category?Electronic`)}>
                    Electronic
                </div>
                <div id={style.jazz} onClick={() => history.push(`/category?Jazz`)}>
                    Jazz
                </div>
            </div>
        </>
    )
}
