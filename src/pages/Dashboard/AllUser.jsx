import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUserAlt, FaUserCheck } from "react-icons/fa";

const AllUser = () => {
    const axiouSecure = useAxiosSecure()

    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiouSecure('/users')
            return res.data
        }
    })

    const handleDelete = id => {
        console.log(id);
        axiouSecure.delete(`/users/${id}`)
        .then(res =>{
            console.log(res.data);
            refetch()
        })
    }

    const handleMakeAdmin = id =>{
        console.log(id);
        axiouSecure.patch(`/users/admin/${id}`)
        .then(res =>{
            console.log(res.data);
            refetch()
        })
    }
    return (
        <div className="p-5">
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All User</h2>
                <h2 className="text-3xl">Total User: {user.length}</h2>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <table className="table table-zebra-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => <tr key={item._id} className="bg-base-200">
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={()=>handleMakeAdmin(item._id)} className="btn btn-circle text-2xl text-red-300">
                                    
                                        {
                                            item.role ? <FaUserCheck /> : <FaUserAlt/>
                                        }
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-circle text-2xl text-red-300">
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

export default AllUser;