import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const handleGoogleSignIn = () =>{
        googleSignIn()
            .then(result=>{
                console.log(result.user);
                
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res =>{
                        console.log(res.data);
                        navigate(location.state ? location.state : '/')

                    })
            })
            .catch(error=>{
                console.log(error);
            })
    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn w-full rounded-full btn-primary">
                    <FaGoogle></FaGoogle>
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;