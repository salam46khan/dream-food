import SectionItem from "../../Components/SectionItem";
import ckOut from '../../assets/home/featured.jpg'

const CheckOut = () => {
    return (
        <div className="check-out py-10 text-white">
            <div className="container mx-auto">
                <SectionItem header={"FROM OUR MENU"} subHeader={"---Check it out---"}></SectionItem>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 p-10">
                    <img className="w-full" src={ckOut} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 p-10 space-y-2">
                        <h2 className="text-xl">March 20, 2023</h2>
                        <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className="btn btn-accent btn-outline">Ream more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;