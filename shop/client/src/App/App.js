import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import React, { useEffect } from 'react'
import TopBar from '../components/TopBar/top-bar-connected'
import AppStyle from'./App.module.scss'
import ROUTES, { RenderRoutes } from '../routes';
import store from '../redux/store'
import { loadUser } from '../redux/actions/auth'
import { clearErrors } from '../redux/actions/error';

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return(
        <div className={AppStyle.App}>
            <TopBar />
            <RenderRoutes routes = {ROUTES} />
        </div>
    )
}

export default App
