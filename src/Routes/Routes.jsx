import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import MyDashboard from "../pages/Dashboard/Dashboard/MyDashboard/MyDashboard";
import AddCourse from "../pages/Dashboard/AddCourse/AddCourse";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/Dashboard/AllUsers/AllUsers";
import AllCourse from "../pages/Dashboard/Dashboard/AllCourse/AllCourse";
import ManageCourse from "../pages/Dashboard/Dashboard/AllCourse/ManageCourse";
import UpdateCourse from "../pages/Dashboard/Dashboard/AllCourse/UpdateCourse";
import CourseDetails from "../pages/Dashboard/Dashboard/CourseDetails/CourseDetails";
import EnrollCourse from "../pages/EnrollCourse/EnrollCourse";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
       
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
       
        
      ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyDashboard></MyDashboard>
            },
            {
                path: '/dashboard/addcourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: '/dashboard/mydash',
                element: <MyDashboard></MyDashboard>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allcourse',
                element: <AllCourse></AllCourse>
            },
            {
                path: '/dashboard/managecourse',
                element: <ManageCourse></ManageCourse>,
            },
            {
                path: '/dashboard/updatecourse/:id',
                element: <UpdateCourse></UpdateCourse>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/courses/${params.id}`)
            },
            {
                path: '/dashboard/allcourse',
                element: <AllCourse></AllCourse>
            },
            {
                path: '/dashboard/enroll/:id',
                element: <EnrollCourse></EnrollCourse>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/courses/${params.id}`)
            },
            {
                path: '/dashboard/coursedetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/courses/${params.id}`)
            },
        ]
    },
  ]);