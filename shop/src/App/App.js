import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { Provider } from 'react-redux'
import TopBar from '../components/TopBar/top-bar-connected'
import { store } from '../redux/configure-store'
import LandingPage from '../components/LandingPage/landing-page-view';
import AppStyle from'./App.module.scss'

import Register from '../components/register/register-view'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return(
        <div styles={AppStyle.App}>
            <Provider store={store}>
                <TopBar />

                <Router>

                <Switch>
                    <Route path="/">
                        <LandingPage /> 
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>
                    
                </Switch>

                </Router>
                
            </Provider>
        </div>
    )
}

export default App
