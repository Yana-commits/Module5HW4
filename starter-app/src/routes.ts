// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import User from "./pages/User";
import Resources from "./pages/Resources";

// other
import {FC} from "react";
import Resource from "./pages/Resource";
import Registration from "./pages/Registration";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    },
    {
        key: 'resources-route',
        title: 'Resources',
        path: '/resources',
        enabled: true,
        component: Resources
    },
    {
        key: 'registration-route',
        title: 'Registration',
        path: '/registration',
        enabled: true,
        component: Registration
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource/:id',
        enabled: false,
        component: Resource
    },
   
]