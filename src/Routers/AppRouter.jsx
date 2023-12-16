import {BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import User from "../Pages/user/user";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                element: <UserProtected />,
                children:[
                    {
                        path: 'user',
                        element: <User />
                    }
                ]
            }
        ]
    },
    {
        path:'/login',
        element: <Login />
    }
])

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter