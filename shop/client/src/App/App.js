import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import React from 'react'
import TopBar from '../components/TopBar/top-bar-connected'
import AppStyle from'./App.module.scss'
import ROUTES, { RenderRoutes } from '../routes';
import { LandingPage } from '../components/LandingPage/landing-page-view';

const App = () => {
    return(
        <div className={AppStyle.App}>
            <TopBar />
            <RenderRoutes routes = {ROUTES} />
        </div>
    )
}

export default App
