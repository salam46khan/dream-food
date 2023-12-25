import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin";


const LogIn = () => {
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('eve----', email, password);
        logInUser(email, password)
            .then(result =>{
                console.log(result.user);
                navigate(location.state ? location.state : '/')
            })
            .catch(err=>{
                console.log(err);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">


                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="LogIn" />
                        </div>
                    </form>
                    <div className="p-5">
                        <SocialLogin></SocialLogin>
                    </div>
                    <p className="p-3">If You are new <Link className="btn btn-link" to={'/signup'}>Create Account</Link></p>
                </div>

            </div>
        </div>
    );
};

export default LogIn;