import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Ordar/Order";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/LogIn/SignUp";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import AllUser from "../pages/Dashboard/AllUser";
import Error from "../pages/Error/Error";
import AddItem from "../pages/Dashboard/AddItem";
import DashHome from "../pages/Dashboard/DashHome";
import Payment from "../pages/Dashboard/Payment";
import Review from "../pages/Dashboard/Review";
import Management from "../pages/Dashboard/Management";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <PrivateRouter><Menu></Menu></PrivateRouter>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'home',
                element: <DashHome></DashHome>
            },
            {
                path: 'alluser',
                element: <AllUser></AllUser>
            },
            {
                path: 'additems',
                element: <AddItem></AddItem>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'reservation',
                element: <Review></Review>
            },
            {
                path: 'manageitems',
                element: <Management></Management>
            }
        ]
    }
])

export default MainRouter;