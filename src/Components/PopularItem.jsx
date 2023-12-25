
const PopularItem = ({item}) => {
    // console.log(item);
    const {image, name, recipe, price} = item
    return (
        <div className="flex border items-center justify-between gap-2 p-2">
            <img className="h-12 w-16 rounded-e-3xl rounded-b-3xl" src={image} alt="" />
            <div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default PopularItem;