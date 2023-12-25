import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

export const axiouSecure = axios.create({
    baseURL: ('http://localhost:5000/')
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOutUser} = useContext(AuthContext)
    axiouSecure.interceptors.request.use( (config)=>{
        const token = localStorage.getItem('access-token')
        // console.log('recquest interceptor by --', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, (error) =>{
        return Promise.reject(error);
    })

    axiouSecure.interceptors.response.use((response)=>{
        return response
    }, (error)=>{
        // console.log('nai', error.response.status);
        const status = error.response.status
        if(status === 401 || status === 403){
            logOutUser()
            .then(res =>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
            navigate('/login')

        }
        return Promise.reject(error);
    })

    return axiouSecure
};

export default useAxiosSecure;