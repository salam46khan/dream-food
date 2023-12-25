import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Home/Navbar";

const Root = () => {
    const location = useLocation()
    // console.log(location);
    const noHeader = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeader || <Navbar></Navbar>}
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;