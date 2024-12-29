import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCourse from "../Pages/AddCourse/AddCourse";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addCourse',
                element: <AddCourse/>
            }
        ]
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    }
])