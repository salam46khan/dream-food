import { Link } from "react-router-dom";
import PopularItem from "./PopularItem";

const CategoriMenu = ({ item, title }) => {
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    item.map(item => <PopularItem item={item} key={item._id}></PopularItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="text-center">
                    <button className="btn mt-10 btn-ghost">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </Link>
        </div>
    );
};

export default CategoriMenu;