import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
    const axiouSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    // ten stak quiry
    const {refetch ,data: cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axiouSecure.get(`/cart?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;