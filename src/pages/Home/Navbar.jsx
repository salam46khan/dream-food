import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import { MdLogout } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogOut = () => {
        console.log('out');
        logOutUser()
            .then(() => {
                console.log('log out success');
            })
            .catch(err => {
                console.log(err);
            })
    }
    const navLinks = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/menu'}>Menu</NavLink>
        </li>
        <li>
            <NavLink to={'/order/salad'}>Order Page</NavLink>
        </li>

    </>
    return (
        <div className="fixed z-10 bg-white bg-opacity-95 w-full">
            <div className="navbar z-20 container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-orange-400">
                        <span className="text-black">Dream</span>Food
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mx-4">
                        {
                            user ? <>

                                <NavLink to={'/dashboard/cart'}>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary">{cart.length}</span>
                                        <button className="btn btn-circle text-2xl text-pink-400 bg-pink-100 hover:text-white hover:bg-pink-400">
                                            <FaShoppingCart></FaShoppingCart>
                                        </button>
                                    </div>
                                </NavLink>

                            </> : ''
                        }
                    </div>
                    <div>
                        {
                            user ? <>
                                <button onClick={handleLogOut} className="btn btn-circle text-2xl text-pink-400 bg-pink-100 hover:text-white hover:bg-pink-400">
                                    <MdLogout />
                                </button>
                            </> : <Link to={'/login'}><button className="btn btn-circle text-2xl text-pink-400 bg-pink-100 hover:text-white hover:bg-pink-400">
                                <AiOutlineUser />
                            </button></Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;