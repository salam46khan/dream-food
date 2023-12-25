import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
// import axios from "axios";
// import { axiouSecure } from "../hooks/useAxiosSecure";

const FoodCart = ({item}) => {
    const {_id, image, name, category, price} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiouSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddtoCard = () =>{
        const bookingItem = {
            image, name, price, category,
            userEmail: user?.email, productId: _id
        }
        if(!user){
            navigate('/')
        }
        else{
            axiouSecure.post('/cart', bookingItem)
            .then(res => {
                console.log(res.data);
                refetch()

            })
            // console.log(bookingItem);
        }
    }
    return (
        <div className="bg-base-200 overflow-hidden rounded-lg relative">
            <img className="w-full" src={item.image} alt="" />
            <div className="text-center p-3 space-y-2">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <p>{item.recipe}</p>
                <button onClick={handleAddtoCard} className="btn btn-primary btn-outline">Add to card</button>
            </div>
            <p className="bg-black text-white absolute top-2 px-4 py-1 right-2">${item.price}</p>
        </div>
    );
};

export default FoodCart;