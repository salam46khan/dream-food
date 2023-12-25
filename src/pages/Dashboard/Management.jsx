import { MdDelete } from "react-icons/md";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Management = () => {
    const [menu, refetch] = useMenu();
    const axiouSecure = useAxiosSecure()
    const handleDeleteMenu = (id) =>{
        console.log(id);
        axiouSecure.delete(`/menu/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount){
                Swal.fire({
                    
                    icon: "success",
                    title: "Menu Item Delete Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        })
    }
    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold">Manage menu items</h2>
            <hr />
            <div className="overflow-x-auto">
                <table className="table table-zebra-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id} className="bg-base-200">
                                <td>{index + 1}</td>
                                <td>
                                    <img className="w-12" src={item.image} alt="" />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                
                                <td>
                                    <button onClick={() => handleDeleteMenu(item._id)} className="btn btn-circle text-2xl text-red-300">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Management;