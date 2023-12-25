
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    // const [menu, setMenu] = useState([]);
    

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {

    //             setMenu(data)
    //         })
    // }, [])
    // return [menu]
    // ;

    const axiouSecure = useAxiosSecure()
   
    // ten stak quiry
    const {refetch ,data: menu = []} = useQuery({
        queryKey: ['menu'],
        queryFn: async () =>{
            const res = await axiouSecure.get('/menu')
            return res.data
        }
    })
    return [menu, refetch]

};

export default useMenu;