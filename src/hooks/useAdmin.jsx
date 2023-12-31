import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
   const {user} = useContext(AuthContext);
   const axiouSecure = useAxiosSecure()
   const {data : isAdmin} = useQuery({
    queryKey: [user.email, 'isAdmin'],
    queryFn: async() =>{
        const res = await axiouSecure.get(`/users/admin/${user.email}`)
        return res.data.admin
    }
   })
   return [isAdmin]
};

export default useAdmin;