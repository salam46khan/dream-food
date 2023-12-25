import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../Components/SocialLogin";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       
        createUser(email, password)
            .then(result =>{
                console.log(result.user);
                navigate('/')

                updateProfile(result.user, {
                    displayName: name
                })

                const userInfo = {
                    name, email
                }
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    console.log(res.data);
                })
            })
            .catch(error =>{
                console.log(error);
            })

        
    }
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="p-5">
                        <SocialLogin></SocialLogin>
                        </div>
                        <p className="p-3">If You Have account<Link className="btn btn-link" to={'/login'}>Log In</Link></p>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;