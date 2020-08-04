import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage/landing-page-connected'
import Register from './components/register/register-view'
import { Cart } from './components/Cart/cart-view'

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: LandingPage },
  {
    path: "/",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/register",
        key: "APP_REGISTER",
        exact: true,
        component: Register,
      },
      {
        path: "/cart",
        key: "APP_CART",
        exact: true,
        component: Cart,
      }

    ],
  },
];

export default ROUTES;

const RouteWithSubRoutes = (route) => {
    return (
    <Route
    path ={route.path}
    exact ={route.exact}
    render = {props => <route.component {...props} routes={route.routes} />}
    />
    );
}

export function RenderRoutes({ routes }) {
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }