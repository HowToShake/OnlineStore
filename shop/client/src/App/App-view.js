import "bootstrap/dist/css/bootstrap.css"
import "antd/dist/antd.css"
import React, { useEffect } from "react"
import TopBar from "../components/TopBar/top-bar-connected"
import AppStyle from "./App.module.scss"
import ROUTES, { RenderRoutes } from "../routes"

export const App = ({ props, mapDispatchToProps }) => {
    useEffect(() => {
        mapDispatchToProps.clearErrors()
        mapDispatchToProps.loadUser()
    }, [props.user])

    return (
        <div className={AppStyle.App}>
            <TopBar />
            <RenderRoutes routes={ROUTES} />
        </div>
    )
}
