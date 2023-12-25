import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
// import img5 from '../../assets/home/05.jpg'

const Banner = () => {
    return (

        <div className="container mx-auto text-center"> 
            <Carousel autoPlay={true}   infiniteLoop={true} className=" ">
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                   
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;