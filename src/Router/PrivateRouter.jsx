import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.state);
    if(loading){
        return <>
            <p>loading</p>
        </>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRouter;