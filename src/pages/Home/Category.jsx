import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionItem from '../../Components/SectionItem';

const Category = () => {
    return (
        <div className='py-10'>
            <div className='container mx-auto'>
                <SectionItem header={"Order Online"} subHeader={"---From 11:00am to 10:00pm---"}></SectionItem>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 80,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide1} alt="" />
                        <h3 className='absolute bottom-0  h-20 bg-gradient-to-t w-full text-white text-2xl flex items-center justify-center from-slate-700'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide2} alt="" />
                        <h3 className='absolute bottom-0  h-20 bg-gradient-to-t w-full text-white text-2xl flex items-center justify-center from-slate-700'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide3} alt="" />
                        <h3 className='absolute bottom-0  h-20 bg-gradient-to-t w-full text-white text-2xl flex items-center justify-center from-slate-700'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide4} alt="" />
                        <h3 className='absolute bottom-0  h-20 bg-gradient-to-t w-full text-white text-2xl flex items-center justify-center from-slate-700'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                        <img className='w-full' src={slide5} alt="" />
                        <h3 className='absolute bottom-0  h-20 bg-gradient-to-t w-full text-white text-2xl flex items-center justify-center from-slate-700'>Pizza</h3>
                    </SwiperSlide>
                    
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Category;