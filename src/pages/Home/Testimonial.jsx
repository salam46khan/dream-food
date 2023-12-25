import {  useState } from "react";
import SectionItem from "../../Components/SectionItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

import { axiouSecure } from "../../hooks/useAxiosSecure";




const Testimonial = () => {
    const [review, setReview] = useState([])
    axiouSecure.get('/review')
    .then(data => setReview(data.data))
    // useEffect(() => {
    //     fetch('http://localhost:5000/review')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setReview(data)
    //         })
    // }, [])
    return (
        <div className="py-10">
            <div className="container mx-auto">
                <SectionItem header={'TESTIMONIALS'} subHeader={'---What Our Clients Say---'}></SectionItem>
                <div >
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper  text-center mx-10">

                        {
                            review.map(item => <SwiperSlide key={item._id} item={item} >
                                <div className="w-2/3 mx-auto">
                                    <div>
                                        <Rating
                                        className=" mx-auto"
                                            style={{ maxWidth: 180}}
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                    <FaQuoteLeft className="mx-auto text-3xl" />
                                    <p>{item.details}</p>
                                    <h2>{item.name}</h2>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;