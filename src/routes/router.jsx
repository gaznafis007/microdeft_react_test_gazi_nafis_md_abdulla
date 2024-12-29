import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCourse from "../Pages/AddCourse/AddCourse";
import AllCourses from "../Pages/AllCourses/AllCourses";

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
            },
            {
                path: '/allCourses',
                element: <AllCourses/>
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