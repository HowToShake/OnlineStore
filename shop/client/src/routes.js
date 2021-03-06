import React from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage/landing-page-connected"
import Auth from "./components/Auth/auth-connected"
import Cart from "./components/Cart/cart-connected"
import SearchPage from "./components/SearchPage/search-page-connected"
import CategoryView from "./components/Category/category-connected"
import Admin from "./components/Admin/admin-connected"
import NotFoundPage from './components/404/404-view'
import Order from './components/Order/order-connected'
import User from './components/User/user-connected'

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: LandingPage },
    {
        path: "/",
        key: "APP",
        component: RenderRoutes,
        routes: [
            {
                path: "/auth",
                key: "APP_AUTH",
                exact: true,
                component: Auth,
            },
            {
                path: "/cart",
                key: "APP_CART",
                exact: true,
                component: Cart,
            },
            {
                path: "/search",
                key: "APP_SEARCH",
                exact: false,
                component: SearchPage,
            },
            {
                path: "/category",
                key: "APP_CATEGORY",
                exact: false,
                component: CategoryView,
            },
            {
                path: "/admin",
                key: "APP_ADMIN",
                exact: true,
                component: Admin,
            },
            {
                path: "/order",
                key: "APP_ORDER",
                exact: true,
                component: Order,
            },
            {
                path:"/user",
                key: "APP_USER",
                exact: true,
                component: User,
            }
        ],
    },
]

export default ROUTES

const RouteWithSubRoutes = (route) => {
    return <Route path={route.path} exact={route.exact} render={(props) => <route.component {...props} routes={route.routes} />} />
}

export function RenderRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes key={route.key} {...route} />
            })}
            <Route component={NotFoundPage}/>
        </Switch>
    )
}
