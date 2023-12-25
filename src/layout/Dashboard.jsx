import { FaBars, FaCalendar,  FaHome, FaList, FaListAlt, FaMailBulk, FaRedRiver, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-64 min-h-screen bg-orange-200">
                    <div className="px-4 py-5 text-center">
                        <p className="text-3xl font-bold">Bistro Boss</p>
                        <p>resturent</p>
                    </div>
                    <ul className="menu">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to={'/dashboard/adminhome'}>
                                            <FaHome></FaHome>
                                            Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/additems'}>
                                            <FaUtensils></FaUtensils>
                                            Add Items
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/manageitems'}>
                                            <FaList></FaList>
                                            Manage Items
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink to={'/dashboard/managebooking'}>
                                            <FaListAlt></FaListAlt>
                                            Manage Booking
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to={'/dashboard/alluser'}>
                                            <FaUser></FaUser>
                                            All User
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/dashboard/reservation'}>
                                            <FaRedRiver></FaRedRiver>
                                            Add a Review
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to={'/dashboard/home'}>
                                            <FaHome></FaHome>
                                            User Home
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink to={'/dashboard/reservation'}>
                                            <FaCalendar></FaCalendar>
                                            Reservation
                                        </NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to={'/dashboard/payment'}>
                                            <FaHome></FaHome>
                                            Payment History
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to={'/dashboard/cart'}>
                                            <FaShoppingCart></FaShoppingCart>
                                            My Cart
                                        </NavLink>
                                    </li>
                                    
                                    <li>
                                        <NavLink to={'/dashboard/reservation'}>
                                            <FaRedRiver></FaRedRiver>
                                            Add a Review
                                        </NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink to={'/dashboard/reservation'}>
                                            <FaList></FaList>
                                            Booking
                                        </NavLink>
                                    </li> */}
                                </>
                        }
                        <div className="divider">OR</div>
                        <li>
                            <NavLink to={'/'}>
                                <FaHome></FaHome>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/order/salad'}>
                                <FaBars></FaBars>
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shop'}>
                                <FaShoppingBag></FaShoppingBag>
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/shop'}>
                                <FaMailBulk></FaMailBulk>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;