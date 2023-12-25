import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddItem = () => {
    const axiouSecure = useAxiosSecure()
    const handleAddItem = event =>{
        event.preventDefault()
        const form = event.target;
        console.log(form);
        const name = form.name.value;
        const recipe = form.recipe.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;

        const product = {name, recipe, image, category, price}

        // console.log(product);
        axiouSecure.post('/menu', product)
        .then(res => {
            console.log(res.data);
            if(res.data.acknowledged){
                Swal.fire({
                   
                    icon: "success",
                    title: "Your Product added succesfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });
                form.reset()
            }
        })

    }
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold">Add Items</h2>
            <hr />
            <div className="py-10">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleAddItem} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" name="price" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Link</span>
                                </label>
                                <input type="text" name="image" placeholder="image Link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>

                                <select className="select select-bordered w-full" name="category">
                                    <option disabled value={' '} selected>choose category</option>
                                    <option value={'salad'}>Salad</option>
                                    <option value={'drinks'}>Drinks</option>
                                    <option value={'dessert'}>Dessert</option>
                                    <option value={'popular'}>Popular</option>
                                    <option value={'pizza'}>Pizza</option>
                                    <option value={'soup'}>Soup</option>
                                    <option value={'offered'}>offered</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" placeholder="description" name="recipe" className="input input-bordered" required />
                        </div>
                        <div className="text-center mt-2">
                            <input className="btn btn-primary" type="submit" value="Add item" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;