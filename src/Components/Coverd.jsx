import { ParallaxBanner } from "react-scroll-parallax";
const Coverd = ({ img, title, text }) => {



    return (
       

        <ParallaxBanner
        
            layers={[
                { image: `${img}`, speed: -20 },
                {
                    speed: -15,
                    children: (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="md:w-[700px] text-white text-center bg-black bg-opacity-40  py-3 px-10">
                                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                                <p className="mb-5">{text}</p>

                            </div>
                        </div>
                    ),
                },
                { image: ``, speed: -10 },
            ]}
            className="aspect-[2/1] h-[700px]"
        />

    );
};

export default Coverd;