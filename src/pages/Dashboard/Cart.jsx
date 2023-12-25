import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const [card, refetch] = useCart();
    const totalPrice = card.reduce((total, item) => total + item.price, 0);
    const axiouSecure = useAxiosSecure()
    const handleDelete = (id) =>{
        console.log(id);
        axiouSecure.delete(`/cart/${id}`)
        .then(res =>{
            console.log(res.data);
            refetch()
        })
    }
    return (
        <div className="p-5">
            <div className="flex justify-evenly">
                <div>
                    <h2 className="text-2xl">Item: {card.length}</h2>
                </div>
                <div>
                    <h2 className="text-2xl">Total Price: {totalPrice}</h2>
                </div>
                <div>
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
            <hr />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                card.map(item => <tr key={item._id} className="bg-base-200">
                                <th>
                                    <img className="h-12 w-16 rounded-lg" src={item.image} alt="" />
                                </th>
                                <td>{item.name}</td>
                                <td>{item.price}/-</td>
                                <td>
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-circle text-2xl text-red-300">
                                    <MdDelete />
                                    </button>
                                </td>
                            </tr>)
                            }

                            
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;