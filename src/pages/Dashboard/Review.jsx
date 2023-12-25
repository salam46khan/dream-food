import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Review = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleRating = event => {
        event.preventDefault()
        const form = event.target
        // console.log(form);
        const details = form.details.value;
        const rating = form.rating.value;
        const name = user.displayName;
        const date = new Date()
        const review = {details, rating, name, date}
        // console.log(review);

        axiosPublic.post('/review', review)
        .then(res => {
            // console.log(res.data);
            if(res.data.acknowledged){
                Swal.fire({
                   
                    icon: "success",
                    title: "Your review Posted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="p-5 h-full">
            <h3 className="text-2xl font-bold">Post Review</h3>
            <hr />
            <div className="h-full w-full flex justify-center items-center">
                <div className="border bg-base-100 hover:-translate-y-2 shadow-lg p-5 duration-200 w-[250px] rounded-lg">
                    <h2 className="text-xl font-bold text-center">Comment</h2>
                    <form onSubmit={handleRating} className="card-body p-0 mt-4">
                        <div className="form-control">
                            <textarea type="text" name="details" placeholder="Comment" className="textarea textarea-bordered textar" required />
                        </div>
                        <div className="form-control">
                            <div className="flex items-center border rounded-md p-3">
                                <p>Rating:</p>
                                <input className="w-full border-none outline-none pl-3 " placeholder="1-5" type="number" name="rating" min={1} max={5} required/>
                            </div>
                        </div>
                        <div className="form-control">
                            <input className="btn btn-primary" type="submit" value="Comment" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;