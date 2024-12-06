
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper,SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from './../../assets/image/istockphoto-1188462138-1024x1024.jpg';
import image2 from './../../assets/image/istockphoto-175005911-1024x1024.jpg';
import image3 from './../../assets/image/istockphoto-186157161-1024x1024.jpg';
import image4 from './../../assets/image/istockphoto-520703373-1024x1024.jpg';
import image5 from './../../assets/image/istockphoto-949190756-1024x1024.jpg';

const Banner = () => {
    return (
        <div className=''>
            <Swiper 
            modules={[Pagination,Autoplay]}
            spaceBetween={30}
        slidesPerView={1}
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
            className='mySwiper'
            >
                <SwiperSlide>
                <img src={image1} className='w-full h-[20vh] md:h-[30vh] lg:h-[60vh] rounded-md object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={image3} className='w-full h-[20vh] md:h-[30vh] lg:h-[60vh] object-cover rounded-md' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={image2} className='w-full h-[20vh] md:h-[30vh] lg:h-[60vh] object-cover rounded-md' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={image4} className='w-full h-[20vh] md:h-[30vh] lg:h-[60vh] object-cover rounded-md' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={image5} className='w-full h-[20vh] md:h-[30vh] lg:h-[60vh] object-cover rounded-md' alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;