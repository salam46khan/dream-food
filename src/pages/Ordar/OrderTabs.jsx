import FoodCart from "../../Components/foodCart";

const OrderTabs = ({foodItem}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    foodItem.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
                }
            </div>
        </div>
    );
};

export default OrderTabs;